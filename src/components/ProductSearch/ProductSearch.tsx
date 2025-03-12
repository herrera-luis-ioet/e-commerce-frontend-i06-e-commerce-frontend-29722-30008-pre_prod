import React, { useState, useEffect } from 'react';
import { ProductSearchContainer } from './ProductSearch.styles';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSearchQuery, selectSearchQuery } from '../../redux/slices/filterSlice';
import { useDebounce } from '../../hooks';
import Button from '../common/Button';

// PUBLIC_INTERFACE
/**
 * ProductSearch Component
 * 
 * Search input for filtering products by keyword
 * Implements debounced search to prevent excessive API calls
 */
interface ProductSearchProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  debounceTime?: number;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ 
  onSearch,
  placeholder = 'Search products...',
  debounceTime = 500
}) => {
  const dispatch = useAppDispatch();
  const currentQuery = useAppSelector(selectSearchQuery);
  
  // Local state for input value
  const [searchInput, setSearchInput] = useState(currentQuery);
  
  // Debounce the search input to prevent excessive API calls
  const debouncedSearchTerm = useDebounce(searchInput, debounceTime);
  
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setSearchQuery(searchInput));
    if (onSearch) onSearch(searchInput);
  };
  
  // Clear search
  const handleClear = () => {
    setSearchInput('');
    dispatch(setSearchQuery(''));
    if (onSearch) onSearch('');
  };
  
  // Update search when debounced term changes
  useEffect(() => {
    if (debouncedSearchTerm !== currentQuery) {
      dispatch(setSearchQuery(debouncedSearchTerm));
      if (onSearch) onSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, dispatch, onSearch, currentQuery]);
  
  return (
    <ProductSearchContainer>
      <form onSubmit={handleSubmit} role="search">
        <input
          type="text"
          placeholder={placeholder}
          value={searchInput}
          onChange={handleChange}
          aria-label="Search products"
        />
        <Button 
          type="submit" 
          variant="primary"
          aria-label="Submit search"
        >
          Search
        </Button>
        {searchInput && (
          <Button 
            type="button" 
            variant="secondary"
            onClick={handleClear}
            className="clear-button"
            aria-label="Clear search"
          >
            Clear
          </Button>
        )}
      </form>
      {currentQuery && (
        <div className="search-info">
          Showing results for: <strong>{currentQuery}</strong>
        </div>
      )}
    </ProductSearchContainer>
  );
};

export default ProductSearch;