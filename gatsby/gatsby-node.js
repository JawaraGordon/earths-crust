import path, { resolve } from 'path';
import fetch from 'isomorphic-fetch';

async function turnPizzasIntoPages({ graphql, actions }) {
  const pizzaTemplate = path.resolve('./src/templates/Pizza.js');

  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  data.pizzas.nodes.forEach((pizza) => {
    actions.createPage({
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current,
      },
    });
  });
}

async function turnToppingsIntoPages({ graphql, actions }) {
  const toppingTemplate = path.resolve('./src/pages/pizzas.js');
  const { data } = await graphql(`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
        }
      }
    }
  `);

  data.toppings.nodes.forEach((topping) => {
    actions.createPage({
      path: `topping/${topping.name}`,
      component: toppingTemplate,
      context: {
        topping: topping.name,
        toppingRegex: `/${topping.name}/i`,
      },
    });
  });
}

async function fetchDrinksAndTurnIntoNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  const res = await fetch('https://jawaragordon.com/earthscrust/db.json');
  const drinks = await res.json();
  for (const drink of Object.entries(drinks)) {
    const nodeMeta = {
      id: createNodeId(`drink - ${drink.name}`),
      parent: null,
      children: [],
      internal: {
        type: 'Drink',
        mediaType: 'application/json',
        contentDigest: createContentDigest(drink),
      },
    };
    actions.createNode({
      ...drink,
      ...nodeMeta,
    });
  }
}

async function turnGreenThumbsIntoPages({ graphql, actions }) {
  const personTemplate = path.resolve('./src/templates/Greenthumb.js');
  const { data } = await graphql(`
    query {
      greenthumbs: allSanityPerson {
        totalCount
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
    }
  `);

  data.greenthumbs.nodes.forEach((greenthumb) => {
    actions.createPage({
      component: personTemplate,
      path: `/greenthumbs/${greenthumb.slug.current}`,
      context: {
        name: greenthumb.person,
        slug: greenthumb.slug.current,
      },
    });
  });

  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.greenthumbs.totalCount / pageSize);

  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: `/greenthumbs/${i + 1}`,
      component: path.resolve('./src/pages/greenthumbs.js'),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

export async function sourceNodes(params) {
  await Promise.all([fetchDrinksAndTurnIntoNodes(params)]);
}

export async function createPages(params) {
  await Promise.all([
    turnPizzasIntoPages(params),
    turnToppingsIntoPages(params),
    turnGreenThumbsIntoPages(params),
  ]);
}
