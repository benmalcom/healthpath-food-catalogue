import React from 'react';
import CatalogueCard from 'components/page-components/foods/CatalogueCard';

export default {
  title: 'Catalogue/Card',
  component: CatalogueCard,
};

const Template = args => <CatalogueCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  w: '336px',
  catalogueItem: {
    name: 'Elegant Steel Sausages',
    tags: 'normal, vegan, pescatarian',
    description:
      'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
  },
};
