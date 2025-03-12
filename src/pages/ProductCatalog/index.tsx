import React, { useState, useEffect } from 'react';
import { ProductCatalogPageContainer } from './ProductCatalog.styles';
import { ProductList, ProductFilter, ProductSearch } from '../../components';

// Mock data for initial development
const mockProducts = [
  { id: '1', title: 'Product 1', price: 19.99, image: 'https://via.placeholder.com/150' },
  { id: '2', title: 'Product 2', price: 29.99, image: 'https://via.placeholder.com/150' },
  { id: '3', title: 'Product 3', price: 39.99, image: 'https://via.placeholder.com/150' },
];

const mockCategories = ['Electronics', 'Clothing', 'Books', 'Home & Kitchen'];

// PUBLIC_INTERFACE
/**
 * ProductCatalog Page
 * 
 * Main page for displaying the product catalog with filtering and search
 */
const ProductCatalogPage: React.FC = () => {
  const [products, setProducts] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on search query and filters
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filters: any) => {
    // Apply filters logic here
    console.log('Filters applied:', filters);
  };

  // Effect to filter products based on search query
  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter(product => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  return (
    <ProductCatalogPageContainer>
      <h1>Product Catalog</h1>
      
      <ProductSearch onSearch={handleSearch} />
      
      <ProductFilter 
        onFilterChange={handleFilterChange}
        categories={mockCategories}
      />
      
      <ProductList products={filteredProducts} />
    </ProductCatalogPageContainer>
  );
};

export default ProductCatalogPage;