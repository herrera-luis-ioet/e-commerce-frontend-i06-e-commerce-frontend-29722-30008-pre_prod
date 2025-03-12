import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState, PriceRange, SortOption } from '../../types/product.types';
import { RootState } from '../store';

// Initial state
const initialState: FilterState = {
  searchQuery: '',
  category: null,
  priceRange: {
    min: 0,
    max: 1000,
  },
  sortBy: 'newest',
};

// Create the filter slice
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    // PUBLIC_INTERFACE
    /**
     * Set the search query
     */
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    
    // PUBLIC_INTERFACE
    /**
     * Set the selected category
     */
    setCategory: (state, action: PayloadAction<string | null>) => {
      state.category = action.payload;
    },
    
    // PUBLIC_INTERFACE
    /**
     * Set the price range
     */
    setPriceRange: (state, action: PayloadAction<PriceRange>) => {
      state.priceRange = action.payload;
    },
    
    // PUBLIC_INTERFACE
    /**
     * Set the sort option
     */
    setSortBy: (state, action: PayloadAction<SortOption>) => {
      state.sortBy = action.payload;
    },
    
    // PUBLIC_INTERFACE
    /**
     * Reset all filters to their initial values
     */
    resetFilters: (state) => {
      state.searchQuery = initialState.searchQuery;
      state.category = initialState.category;
      state.priceRange = initialState.priceRange;
      state.sortBy = initialState.sortBy;
    },
  },
});

// Export actions
export const {
  setSearchQuery,
  setCategory,
  setPriceRange,
  setSortBy,
  resetFilters,
} = filterSlice.actions;

// PUBLIC_INTERFACE
/**
 * Selector to get the search query
 */
export const selectSearchQuery = (state: RootState) => state.filter.searchQuery;

// PUBLIC_INTERFACE
/**
 * Selector to get the selected category
 */
export const selectCategory = (state: RootState) => state.filter.category;

// PUBLIC_INTERFACE
/**
 * Selector to get the price range
 */
export const selectPriceRange = (state: RootState) => state.filter.priceRange;

// PUBLIC_INTERFACE
/**
 * Selector to get the sort option
 */
export const selectSortBy = (state: RootState) => state.filter.sortBy;

// Export reducer
export default filterSlice.reducer;