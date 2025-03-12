import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductState } from '../../types/product.types';
import { RootState } from '../store';

// Initial state
const initialState: ProductState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

// PUBLIC_INTERFACE
/**
 * Async thunk for fetching all products
 */
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      // This would typically be a call to your API service
      const response = await fetch('https://api.example.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      return data as Product[];
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// PUBLIC_INTERFACE
/**
 * Async thunk for fetching a single product by ID
 */
export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId: string, { rejectWithValue }) => {
    try {
      // This would typically be a call to your API service
      const response = await fetch(`https://api.example.com/products/${productId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      const data = await response.json();
      return data as Product;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Create the product slice
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // PUBLIC_INTERFACE
    /**
     * Set the selected product
     */
    setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload;
    },
    // PUBLIC_INTERFACE
    /**
     * Clear all products
     */
    clearProducts: (state) => {
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchProducts
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Handle fetchProductById
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action: PayloadAction<Product>) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Export actions
export const { setSelectedProduct, clearProducts } = productSlice.actions;

// PUBLIC_INTERFACE
/**
 * Selector to get all products
 */
export const selectAllProducts = (state: RootState) => state.products.products;

// PUBLIC_INTERFACE
/**
 * Selector to get the selected product
 */
export const selectSelectedProduct = (state: RootState) => state.products.selectedProduct;

// PUBLIC_INTERFACE
/**
 * Selector to get the loading state
 */
export const selectProductsLoading = (state: RootState) => state.products.loading;

// PUBLIC_INTERFACE
/**
 * Selector to get the error state
 */
export const selectProductsError = (state: RootState) => state.products.error;

// Export reducer
export default productSlice.reducer;