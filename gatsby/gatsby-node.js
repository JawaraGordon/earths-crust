import path from 'path';

async function turnPizzasIntoPages({ graphql, action }) {
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
}

export async function createPages(params) {
  await turnPizzasIntoPages(params);
}
