# README

# Earth's Crust

A Plant-Based Pizzeria

Serving the best pizza on the planet!
Open 24/7 364 - (closed on Earth Day)

## Description

A web application that uses a React & Gatsby front-end, a Sanity & GraphQL back-end and a custom designed API.

Deployed on Netlify with Sanity Studio.
https://earths-crust.netlify.app/

### Project Repo

- GitHub [here] https://github.com/JawaraGordon/earths-crust

# Navigating the application

🌎 Press the logo to return to the index page.

🌱 View a list of dynamically generated "Fresh Picks and "Green Thumbs" on the homepage by pressing 'Fresh Picks' in the navbar.

🌱 See a complete list of Pizzas by pressing 'Pizza Menu' in the navbar.

🌱 Sort the list of Pizzas by topping by choosing the topping name from a list on the 'Pizza Menu' page.

🌱 See a complete list of "Green Thumbs" by pressing 'Green Thumbs' in the navbar.

🌱 View all of the 'Green Thumbs" by pressing the 'Next' and 'Prev' buttons, or by choosing a page number.

🌱 Make an order by pressing "Order Up!" in the navbar.

🌱 Fill out the order form, then choose your pizzas from the list by size and price.

🌱 See a list of drinks by pressing "Kombucha" at the bottom of the order page. This will take you to a "Drinks page" that displays a list of drinks from a custom API end point.

🌱 You can return to the order page at any time to see your saved order with the quantity of items and dynamically generated total.

🌱 Complete your order by pressing the "Order Up!" button at the bottom of the page.

## Setup

`gatsby/src` folder contains the following files:

```txt
../src/
└── components/
    ├── Footer.js
    ├── Layout.js
    ├── Logo.js
    ├── Nav.js
    ├── OrderContext.js
    ├── Pagination.js
    ├── PizzaList.js
    ├── PizzaOrder.js
    ├── SEO.js
    └── ToppingsFilter.js
└── pages/
    ├── 404.js
    ├── drinks.js
    ├── greenthumbs.js
    ├── index.js
    ├── order.js
    └── pizzas.js
└── styles/
    ├── GlobalStyles.js
    ├── Grids.js
    ├── ItemGrid.js
    ├── LoadingGrid.js
    └── Typography.js
└── templates/
    ├── Greenthumb.js
    └── Pizza.js
└── utils/
    ├── attachNames.js
    ├── calculateOrderTotal.js
    ├── calculatePizzaPrice.js
    ├── formatMoney.js
    ├── useForm.js
    ├── useLatestData.js
    └── usePizza.js
└── static/
    ├── favicon.ico
    └── favicon.svg
```

### React version

- 16.13.1

### Sanity version

- 2.33.2

### Rails version

- 7.0.3.1

### NPM version

- 8.15.0

### Node version

- 18.7.0

### Database

- GraphQL 14.4

## System dependencies

- macOS 10+

- Windows 10+

### Project dependencies

### Gatsby

```
    "babel-plugin-styled-components": "^1.11.1",
    "dotenv": "^8.2.0",
    "gatsby": "^2.24.63",
    "gatsby-image": "^2.4.17",
    "gatsby-plugin-react-helmet": "^3.3.10",
    "gatsby-plugin-styled-components": "^3.3.10",
    "gatsby-source-sanity": "^6.0.4",
    "isomorphic-fetch": "^2.2.1",
    "netlify-cli": "^2.62.0",
    "netlify-lambda": "^2.0.1",
    "normalize.css": "^8.0.1",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-helmet": "^6.1.0",
    "styled-components": "^5.2.0"
```

### Sanity

```
  "plugins": [
    "@sanity/base",
    "@sanity/components",
    "@sanity/default-layout",
    "@sanity/default-login",
    "@sanity/desk-tool",
    "@sanity/google-maps-input"
```

## Deploy with Netlify

Instructions [here] https://docs.netlify.com/welcome/add-new-site/

## License

Build your own version of this project from Wes Bos:
[MasterGatsby.com](https://mastergatsby.com).
