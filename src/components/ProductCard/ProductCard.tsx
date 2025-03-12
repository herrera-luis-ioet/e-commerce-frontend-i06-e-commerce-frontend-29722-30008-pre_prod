import React, { memo } from 'react';
import { ProductCardContainer } from './ProductCard.styles';
import { Product } from '../../types/product.types';
import { useAppDispatch } from '../../redux/hooks';
import LazyImage from '../common/LazyImage';
import Button from '../common/Button';

// PUBLIC_INTERFACE
/**
 * ProductCard Component
 * 
 * Displays a single product with image, title, price, rating, and action buttons
 * Wrapped with React.memo to prevent unnecessary re-renders when props haven't changed
 */
interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onViewDetails?: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart,
  onViewDetails
}) => {
  const dispatch = useAppDispatch();
  
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };
  
  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(product.id);
    }
  };
  
  // Format price with 2 decimal places
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(product.price);
  
  return (
    <ProductCardContainer>
      <div className="product-image" onClick={handleViewDetails}>
        <LazyImage src={product.image} alt={product.title} />
        {product.rating && (
          <div className="product-rating">
            <span className="rating-value">{product.rating.rate.toFixed(1)}</span>
            <span className="rating-count">({product.rating.count})</span>
          </div>
        )}
      </div>
      <div className="product-info">
        <h3 onClick={handleViewDetails}>{product.title}</h3>
        <p className="category">{product.category}</p>
        <p className="price">{formattedPrice}</p>
        <div className="product-actions">
          <Button 
            variant="primary" 
            size="small" 
            onClick={handleAddToCart}
            aria-label={`Add ${product.title} to cart`}
          >
            Add to Cart
          </Button>
          <Button 
            variant="outline" 
            size="small" 
            onClick={handleViewDetails}
            aria-label={`View details for ${product.title}`}
          >
            Details
          </Button>
        </div>
      </div>
    </ProductCardContainer>
  );
};

export default memo(ProductCard);