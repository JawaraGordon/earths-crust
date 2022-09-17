import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  name: 'topping',
  title: 'Toppings',
  icon,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Toppings Name',
      type: 'string',
      description: 'What is the name of the topping',
    },
    {
      name: 'gluten_free',
      title: 'Gluten Free',
      type: 'boolean',
      description: 'What is the name of the topping',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      gluten_free: 'gluten_free',
    },
    prepare: ({ name, gluten_free }) => ({
        title: `${name} ${gluten_free ? '🚫' : ''}`,
      }),
  },
};
