import React, { memo, lazy, Suspense } from 'react';
import { ProductListContainer } from './ProductList.styles';
import { Product } from '../../types/product.types';

// Use React.lazy for code splitting
const ProductCard = lazy(() => import('../ProductCard'));

// Loading fallback for product cards
const ProductCardFallback = () => (
  <div className="product-card-loading">
    <div className="loading-placeholder">Loading product...</div>
  </div>
);

// PUBLIC_INTERFACE
/**
 * ProductList Component
 * 
 * Displays a grid of product cards
 * Wrapped with React.memo to prevent unnecessary re-renders when products haven't changed
 */
const ProductList: React.FC<{
  products: Product[];
}> = ({ products }) => {
  return (
    <ProductListContainer>
      {products.length > 0 ? (
        products.map((product) => (
          <Suspense key={product.id} fallback={<ProductCardFallback />}>
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          </Suspense>
        ))
      ) : (
        <div className="no-products">No products found</div>
      )}
    </ProductListContainer>
  );
};

export default memo(ProductList);