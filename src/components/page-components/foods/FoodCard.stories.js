import React from 'react';
import FoodCard from 'components/page-components/foods/FoodCard';

export default {
  title: 'FoodCard',
  component: FoodCard,
};

const Template = args => <FoodCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  food: {
    name: 'Elegant Steel Sausages',
    tags: 'normal, vegan, pescatarian',
    description:
      'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
  },
};
