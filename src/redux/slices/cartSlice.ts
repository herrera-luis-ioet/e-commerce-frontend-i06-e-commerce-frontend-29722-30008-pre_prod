import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState, Product } from '../../types/product.types';
import { RootState } from '../store';

// Initial state
const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

// Helper function to calculate cart totals
const calculateCartTotals = (items: CartItem[]): { totalItems: number; totalPrice: number } => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return { totalItems, totalPrice };
};

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // PUBLIC_INTERFACE
    /**
     * Add an item to the cart
     */
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      
      if (existingItem) {
        // If item already exists, increase quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise add new item with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
      
      // Update totals
      const { totalItems, totalPrice } = calculateCartTotals(state.items);
      state.totalItems = totalItems;
      state.totalPrice = totalPrice;
    },
    
    // PUBLIC_INTERFACE
    /**
     * Remove an item from the cart
     */
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      
      // Update totals
      const { totalItems, totalPrice } = calculateCartTotals(state.items);
      state.totalItems = totalItems;
      state.totalPrice = totalPrice;
    },
    
    // PUBLIC_INTERFACE
    /**
     * Update the quantity of an item in the cart
     */
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      
      if (item) {
        if (quantity <= 0) {
          // If quantity is 0 or negative, remove the item
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          // Otherwise update the quantity
          item.quantity = quantity;
        }
        
        // Update totals
        const { totalItems, totalPrice } = calculateCartTotals(state.items);
        state.totalItems = totalItems;
        state.totalPrice = totalPrice;
      }
    },
    
    // PUBLIC_INTERFACE
    /**
     * Clear the cart
     */
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

// Export actions
export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

// PUBLIC_INTERFACE
/**
 * Selector to get all cart items
 */
export const selectCartItems = (state: RootState) => state.cart.items;

// PUBLIC_INTERFACE
/**
 * Selector to get the total number of items in the cart
 */
export const selectTotalItems = (state: RootState) => state.cart.totalItems;

// PUBLIC_INTERFACE
/**
 * Selector to get the total price of items in the cart
 */
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;

// Export reducer
export default cartSlice.reducer;