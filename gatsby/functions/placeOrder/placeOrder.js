const nodemailer = require('nodemailer');

function generateOrderEmail({ order, total }) {
  return `<div>
        <h2>Your order for ${total} has been received!</h2>
        <p>One of our friendly "Green Thumbs" is carefully preparing your items. </p>
        <p>The harvest will be ready in 30 minutes or less.</p>
        <ul>
        ${order
          .map(
            (item) => `<li>
            <img src="${item.thumbnail}" alt="${item.name}"/>
            ${item.size} ${item.name} - ${item.price}
            </li>`
          )
          .join('')}
        </ul>
        <p>Your total is <strong>${total}</strong> due at pickup</p>
        <style>
        ul {
            list-style: none;
        }
        </style>
        <p>One tree will be planted for every order placed 🌱</p>
        <h3>The Earth 🌎 says thanks!</h3>
    </div>`;
}

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// function wait(ms=0) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms);
//   });
// }

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  if (body.fakeDrop) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: `ERROR 28473` }),
    };
  }

  const requiredFields = ['email', 'name', 'order'];

  for (const field of requiredFields) {
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `You forgot to add the ${field} field, please try again.`,
        }),
      };
    }
  }
  //validate that order was placed

  if (!body.order.length) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Help us save the Earth by adding items to your order`,
      }),
    };
  }

  const info = await transporter.sendMail({
    from: "Earth's Crust <m.baker@example.com>",
    to: `${body.name} <${body.email}>, orders@example.com`,
    subject: 'New Order',
    html: generateOrderEmail({ order: body.order, total: body.total }),
  });
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success' }),
  };
};
