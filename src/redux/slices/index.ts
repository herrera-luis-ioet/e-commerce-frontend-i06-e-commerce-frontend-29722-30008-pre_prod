/**
 * Redux Slices Index
 * 
 * Export all Redux slices for easy importing
 */

export { default as productReducer } from './productSlice';
export { default as cartReducer } from './cartSlice';
export { default as filterReducer } from './filterSlice';

// Export actions and selectors from productSlice
export {
  fetchProducts,
  fetchProductById,
  setSelectedProduct,
  clearProducts,
  selectAllProducts,
  selectSelectedProduct,
  selectProductsLoading,
  selectProductsError,
} from './productSlice';

// Export actions and selectors from cartSlice
export {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  selectCartItems,
  selectTotalItems,
  selectTotalPrice,
} from './cartSlice';

// Export actions and selectors from filterSlice
export {
  setSearchQuery,
  setCategory,
  setPriceRange,
  setSortBy,
  resetFilters,
  selectSearchQuery,
  selectCategory,
  selectPriceRange,
  selectSortBy,
} from './filterSlice';