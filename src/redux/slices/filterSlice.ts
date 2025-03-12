import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  searchQuery: string;
  category: string | null;
  priceRange: {
    min: number;
    max: number;
  };
  sortBy: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'newest';
}

const initialState: FilterState = {
  searchQuery: '',
  category: null,
  priceRange: {
    min: 0,
    max: 1000,
  },
  sortBy: 'newest',
};

/**
 * Filter slice for managing product filtering and sorting state in Redux
 */
const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // Set search query
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    
    // Set category filter
    setCategory: (state, action: PayloadAction<string | null>) => {
      state.category = action.payload;
    },
    
    // Set price range
    setPriceRange: (state, action: PayloadAction<{ min: number; max: number }>) => {
      state.priceRange = action.payload;
    },
    
    // Set sort order
    setSortBy: (state, action: PayloadAction<FilterState['sortBy']>) => {
      state.sortBy = action.payload;
    },
    
    // Reset all filters
    resetFilters: (state) => {
      state.searchQuery = '';
      state.category = null;
      state.priceRange = {
        min: 0,
        max: 1000,
      };
      state.sortBy = 'newest';
    },
  },
});

export const { 
  setSearchQuery, 
  setCategory, 
  setPriceRange, 
  setSortBy, 
  resetFilters 
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;