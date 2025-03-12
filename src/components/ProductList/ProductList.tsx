import React, { memo } from 'react';
import { ProductListContainer } from './ProductList.styles';
import { Product } from '../../types/product.types';
import ProductCard from '../ProductCard/ProductCard';
import { useAppSelector } from '../../redux/hooks';
import { selectProductsLoading, selectProductsError } from '../../redux/slices/productSlice';

// PUBLIC_INTERFACE
/**
 * ProductList Component
 * 
 * Displays a grid of product cards with loading and empty states
 * Wrapped with React.memo to prevent unnecessary re-renders when products haven't changed
 */
interface ProductListProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
  onViewDetails?: (productId: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ 
  products,
  onAddToCart,
  onViewDetails
}) => {
  const isLoading = useAppSelector(selectProductsLoading);
  const error = useAppSelector(selectProductsError);
  
  // Loading state
  if (isLoading) {
    return (
      <ProductListContainer>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={`skeleton-${index}`} className="product-card-loading">
            <div className="loading-placeholder">Loading...</div>
          </div>
        ))}
      </ProductListContainer>
    );
  }
  
  // Error state
  if (error) {
    return (
      <ProductListContainer>
        <div className="error-message">
          <h3>Error loading products</h3>
          <p>{error}</p>
        </div>
      </ProductListContainer>
    );
  }
  
  // Empty state
  if (products.length === 0) {
    return (
      <ProductListContainer>
        <div className="no-products">
          <h3>No products found</h3>
          <p>Try adjusting your filters or search criteria</p>
        </div>
      </ProductListContainer>
    );
  }
  
  // Products grid
  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onViewDetails={onViewDetails}
        />
      ))}
    </ProductListContainer>
  );
};

export default memo(ProductList);