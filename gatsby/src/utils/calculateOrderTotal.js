import React from 'react';
import calculatePizzaPrice from './calculatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
  const total = order.reduce((runningtotal, singleOrder) => {
    const pizza = pizzas.find((singlePizza) => singlePizza.id === singleOrder.id);
    return runningtotal + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);
  return total;
}
