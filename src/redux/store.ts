import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';
import filterReducer from './slices/filterSlice';

// PUBLIC_INTERFACE
/**
 * Configure the Redux store with all reducers and middleware
 */
export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your-non-serializable-action-type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

// PUBLIC_INTERFACE
/**
 * RootState type representing the complete Redux state tree
 */
export type RootState = ReturnType<typeof store.getState>;

// PUBLIC_INTERFACE
/**
 * AppDispatch type for dispatching actions
 */
export type AppDispatch = typeof store.dispatch;

// PUBLIC_INTERFACE
/**
 * AppThunk type for creating thunks
 */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;