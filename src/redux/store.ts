import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './slices/productSlice';
import { cartReducer } from './slices/cartSlice';
import { filterReducer } from './slices/filterSlice';

/**
 * Redux store configuration
 * 
 * Configures the Redux store with all reducers for the application
 */
export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    filters: filterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;