import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductState, PriceRange, SortOption } from '../../types/product.types';
import { RootState } from '../store';
import { 
  fetchProducts as fetchProductsApi, 
  fetchProductById as fetchProductByIdApi,
  searchProducts as searchProductsApi,
  filterProductsByCategory as filterProductsByCategoryApi,
  filterProductsByPriceRange as filterProductsByPriceRangeApi,
  sortProducts as sortProductsApi,
  ProductFilterParams,
  ApiError
} from '../../services';

// Initial state
const initialState: ProductState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

// PUBLIC_INTERFACE
/**
 * Async thunk for fetching all products with optional filters
 */
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (params?: ProductFilterParams, { rejectWithValue }) => {
    try {
      return await fetchProductsApi(params);
    } catch (error) {
      if (error instanceof ApiError) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Failed to fetch products');
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
      return await fetchProductByIdApi(productId);
    } catch (error) {
      if (error instanceof ApiError) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(`Failed to fetch product with ID ${productId}`);
    }
  }
);

// PUBLIC_INTERFACE
/**
 * Async thunk for searching products
 */
export const searchProducts = createAsyncThunk(
  'products/searchProducts',
  async ({ query, params }: { query: string; params?: Omit<ProductFilterParams, 'page' | 'limit'> }, { rejectWithValue }) => {
    try {
      return await searchProductsApi(query, params);
    } catch (error) {
      if (error instanceof ApiError) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(`Failed to search products with query "${query}"`);
    }
  }
);

// PUBLIC_INTERFACE
/**
 * Async thunk for filtering products by category
 */
export const filterProductsByCategory = createAsyncThunk(
  'products/filterProductsByCategory',
  async ({ category, params }: { category: string; params?: Omit<ProductFilterParams, 'category'> }, { rejectWithValue }) => {
    try {
      return await filterProductsByCategoryApi(category, params);
    } catch (error) {
      if (error instanceof ApiError) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(`Failed to filter products by category "${category}"`);
    }
  }
);

// PUBLIC_INTERFACE
/**
 * Async thunk for filtering products by price range
 */
export const filterProductsByPriceRange = createAsyncThunk(
  'products/filterProductsByPriceRange',
  async ({ priceRange, params }: { priceRange: PriceRange; params?: Omit<ProductFilterParams, 'minPrice' | 'maxPrice'> }, { rejectWithValue }) => {
    try {
      return await filterProductsByPriceRangeApi(priceRange, params);
    } catch (error) {
      if (error instanceof ApiError) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(`Failed to filter products by price range (${priceRange.min}-${priceRange.max})`);
    }
  }
);

// PUBLIC_INTERFACE
/**
 * Async thunk for sorting products
 */
export const sortProducts = createAsyncThunk(
  'products/sortProducts',
  async ({ sortBy, params }: { sortBy: SortOption; params?: Omit<ProductFilterParams, 'sortBy'> }, { rejectWithValue }) => {
    try {
      return await sortProductsApi(sortBy, params);
    } catch (error) {
      if (error instanceof ApiError) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(`Failed to sort products by "${sortBy}"`);
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
      })
      
      // Handle searchProducts
      .addCase(searchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      
      // Handle filterProductsByCategory
      .addCase(filterProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(filterProductsByCategory.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(filterProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      
      // Handle filterProductsByPriceRange
      .addCase(filterProductsByPriceRange.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(filterProductsByPriceRange.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(filterProductsByPriceRange.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      
      // Handle sortProducts
      .addCase(sortProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sortProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(sortProducts.rejected, (state, action) => {
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
