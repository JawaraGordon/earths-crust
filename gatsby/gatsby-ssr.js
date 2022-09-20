import React from 'react';
import Layout from './src/components/Layout';
import { OrderProvider } from './src/components/OrderContext';

export function wrapPageElement({ el, props }) {
  return <Layout {...props}>{el}🌱</Layout>;
}
export function wrapRootElement({ element }) {
  return <OrderProvider>{element}</OrderProvider>;
}
