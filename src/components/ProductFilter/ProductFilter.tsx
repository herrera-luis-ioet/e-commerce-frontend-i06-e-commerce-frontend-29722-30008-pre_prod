import React, { useEffect } from 'react';
import { ProductFilterContainer } from './ProductFilter.styles';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { 
  setCategory, 
  setPriceRange, 
  setSortBy, 
  resetFilters,
  selectCategory,
  selectPriceRange,
  selectSortBy
} from '../../redux/slices/filterSlice';
import { PriceRange, SortOption } from '../../types/product.types';
import Button from '../common/Button';

// PUBLIC_INTERFACE
/**
 * ProductFilter Component
 * 
 * Provides filtering and sorting options for products
 * Integrates with Redux for state management
 */
interface ProductFilterProps {
  categories: string[];
  onFilterChange?: () => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ 
  categories,
  onFilterChange 
}) => {
  const dispatch = useAppDispatch();
  
  // Get current filter values from Redux
  const selectedCategory = useAppSelector(selectCategory);
  const priceRange = useAppSelector(selectPriceRange);
  const sortBy = useAppSelector(selectSortBy);
  
  // Handle category change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value === '' ? null : e.target.value;
    dispatch(setCategory(category));
    if (onFilterChange) onFilterChange();
  };
  
  // Handle price range change
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = Number(value) || 0;
    
    const newPriceRange: PriceRange = {
      ...priceRange,
      [name === 'minPrice' ? 'min' : 'max']: numValue
    };
    
    dispatch(setPriceRange(newPriceRange));
    if (onFilterChange) onFilterChange();
  };
  
  // Handle sort option change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(e.target.value as SortOption));
    if (onFilterChange) onFilterChange();
  };
  
  // Handle reset filters
  const handleResetFilters = () => {
    dispatch(resetFilters());
    if (onFilterChange) onFilterChange();
  };
  
  // Ensure min price is not greater than max price
  useEffect(() => {
    if (priceRange.min > priceRange.max) {
      dispatch(setPriceRange({
        ...priceRange,
        max: priceRange.min
      }));
    }
  }, [priceRange.min, priceRange.max, dispatch]);
  
  return (
    <ProductFilterContainer>
      <div className="filter-group">
        <label htmlFor="category">Category</label>
        <select 
          id="category" 
          value={selectedCategory || ''} 
          onChange={handleCategoryChange}
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <label htmlFor="minPrice">Min Price ($)</label>
        <input 
          type="number" 
          id="minPrice" 
          name="minPrice" 
          value={priceRange.min} 
          onChange={handlePriceChange} 
          min="0"
          aria-label="Minimum price"
        />
      </div>
      
      <div className="filter-group">
        <label htmlFor="maxPrice">Max Price ($)</label>
        <input 
          type="number" 
          id="maxPrice" 
          name="maxPrice" 
          value={priceRange.max} 
          onChange={handlePriceChange} 
          min={priceRange.min}
          aria-label="Maximum price"
        />
      </div>
      
      <div className="filter-group">
        <label htmlFor="sortBy">Sort By</label>
        <select 
          id="sortBy" 
          value={sortBy} 
          onChange={handleSortChange}
          aria-label="Sort products"
        >
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>
      
      <div className="filter-actions">
        <Button 
          variant="secondary" 
          size="small" 
          onClick={handleResetFilters}
          aria-label="Reset all filters"
        >
          Reset Filters
        </Button>
      </div>
    </ProductFilterContainer>
  );
};

export default ProductFilter;