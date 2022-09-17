import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ el, props }) {
  return <Layout {...props}>{el}🌱</Layout>;
}
