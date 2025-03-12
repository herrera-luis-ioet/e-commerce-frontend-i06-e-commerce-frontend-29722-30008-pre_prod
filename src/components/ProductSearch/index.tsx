import React, { useState } from 'react';
import { ProductSearchContainer } from './ProductSearch.styles';

// PUBLIC_INTERFACE
/**
 * ProductSearch Component
 * 
 * Search input for filtering products by keyword
 */
const ProductSearch: React.FC<{
  onSearch: (query: string) => void;
}> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <ProductSearchContainer>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleChange}
        />
        <button type="submit">
          Search
        </button>
      </form>
    </ProductSearchContainer>
  );
};

export default ProductSearch;