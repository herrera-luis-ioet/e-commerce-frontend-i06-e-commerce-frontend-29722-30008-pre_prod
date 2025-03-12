import React from 'react';
import { ProductListContainer } from './ProductList.styles';
import ProductCard from '../ProductCard';

// Types
interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

// PUBLIC_INTERFACE
/**
 * ProductList Component
 * 
 * Displays a grid of product cards
 */
const ProductList: React.FC<{
  products: Product[];
}> = ({ products }) => {
  return (
    <ProductListContainer>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))
      ) : (
        <div className="no-products">No products found</div>
      )}
    </ProductListContainer>
  );
};

export default ProductList;