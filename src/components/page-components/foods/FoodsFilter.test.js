import React from 'react';
import { fireEvent, render, screen } from 'test-utils';
import FoodsFilter from './FoodsFilter';

describe('<FoodsFilter />', () => {
  test('renders without crash', () => {
    render(<FoodsFilter />);
  });

  test('should render with an initial value', () => {
    const onFilterMock = jest.fn();
    render(<FoodsFilter onFilter={onFilterMock} value={{ text: 'test' }} />);
    expect(screen.getByDisplayValue('test')).toBeInTheDocument();
  });

  test('should reflect typed in filter text', () => {
    const onFilterMock = jest.fn();
    render(<FoodsFilter onFilter={onFilterMock} value={{ text: '' }} />);
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Bell' },
    });
    expect(onFilterMock).toBeCalledWith({ text: 'Bell' });
    expect(screen.getByDisplayValue('Bell')).toBeInTheDocument();
  });
});
