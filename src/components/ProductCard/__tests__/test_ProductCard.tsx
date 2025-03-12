import React from 'react';
import { render, screen, fireEvent } from 'utils/test-utils';
import { createMockProduct } from 'utils/test-utils';
import ProductCard from '../index';

describe('ProductCard Component', () => {
  const mockProduct = createMockProduct();
  const mockAddToCart = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />);
    
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.name)).toHaveAttribute('src', mockProduct.image);
  });

  test('calls onAddToCart when add to cart button is clicked', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />);
    
    const addToCartButton = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(addToCartButton);
    
    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });

  test('displays product rating correctly', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />);
    
    expect(screen.getByText(`${mockProduct.rating.rate}/5`)).toBeInTheDocument();
    expect(screen.getByText(`(${mockProduct.rating.count})`)).toBeInTheDocument();
  });
});