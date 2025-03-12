import React from 'react';
import { ProductCardContainer } from './ProductCard.styles';

// PUBLIC_INTERFACE
/**
 * ProductCard Component
 * 
 * Displays a single product with image, title, price, and action buttons
 */
const ProductCard: React.FC<{
  id: string;
  title: string;
  price: number;
  image: string;
}> = ({ id, title, price, image }) => {
  return (
    <ProductCardContainer>
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <p className="price">${price.toFixed(2)}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </ProductCardContainer>
  );
};

export default ProductCard;