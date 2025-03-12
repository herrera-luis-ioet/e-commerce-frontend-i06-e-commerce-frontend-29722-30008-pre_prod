import React, { useState } from 'react';
import { ProductFilterContainer } from './ProductFilter.styles';

// Types
interface FilterOptions {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
}

// PUBLIC_INTERFACE
/**
 * ProductFilter Component
 * 
 * Provides filtering and sorting options for products
 */
const ProductFilter: React.FC<{
  onFilterChange: (filters: FilterOptions) => void;
  categories: string[];
}> = ({ onFilterChange, categories }) => {
  const [filters, setFilters] = useState<FilterOptions>({
    category: '',
    minPrice: undefined,
    maxPrice: undefined,
    sortBy: 'default'
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFilters = {
      ...filters,
      [name]: name === 'minPrice' || name === 'maxPrice' ? Number(value) || undefined : value
    };
    
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <ProductFilterContainer>
      <div className="filter-group">
        <label htmlFor="category">Category</label>
        <select 
          id="category" 
          name="category" 
          value={filters.category} 
          onChange={handleFilterChange}
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <label htmlFor="minPrice">Min Price</label>
        <input 
          type="number" 
          id="minPrice" 
          name="minPrice" 
          value={filters.minPrice || ''} 
          onChange={handleFilterChange} 
          min="0"
        />
      </div>
      
      <div className="filter-group">
        <label htmlFor="maxPrice">Max Price</label>
        <input 
          type="number" 
          id="maxPrice" 
          name="maxPrice" 
          value={filters.maxPrice || ''} 
          onChange={handleFilterChange} 
          min="0"
        />
      </div>
      
      <div className="filter-group">
        <label htmlFor="sortBy">Sort By</label>
        <select 
          id="sortBy" 
          name="sortBy" 
          value={filters.sortBy} 
          onChange={handleFilterChange}
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>
    </ProductFilterContainer>
  );
};

export default ProductFilter;