import React from 'react';
import { render, screen } from 'test-utils';
import FoodCard from './FoodCard';

const foodFixture = {
  id: '1',
  name: 'Elegant Steel Sausages',
  tags: 'normal, vegan, pescatarian',
  description:
    'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
};

describe('<FoodCard />', () => {
  test('renders without crash', () => {
    render(<FoodCard food={foodFixture} />);
    expect(screen.getByText(/Elegant Steel Sausages/i)).toBeInTheDocument();
    expect(screen.getByText(/normal, vegan, pescatarian/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart/i
      )
    ).toBeInTheDocument();
  });
});
