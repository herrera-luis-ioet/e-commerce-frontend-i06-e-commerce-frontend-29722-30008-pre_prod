import { apiRequest, ApiError, ApiErrorType } from './api';
import { Product, PriceRange, SortOption } from '../types/product.types';

/**
 * Product service for handling product-related API requests
 */

/**
 * Product filter parameters interface
 */
export interface ProductFilterParams {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: SortOption;
  limit?: number;
  page?: number;
}

// PUBLIC_INTERFACE
/**
 * Fetch all products with optional filtering and pagination
 * 
 * @param params - Optional filter parameters
 * @returns Promise with array of products
 */
export const fetchProducts = async (params?: ProductFilterParams): Promise<Product[]> => {
  try {
    return await apiRequest<Product[]>({
      method: 'GET',
      url: '/products',
      params,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    if (error instanceof ApiError) {
      // Handle specific error types if needed
      if (error.type === ApiErrorType.NETWORK_ERROR) {
        // Could implement retry logic here
      }
    }
    throw error;
  }
};

// PUBLIC_INTERFACE
/**
 * Fetch a single product by ID
 * 
 * @param id - Product ID
 * @returns Promise with product data
 * @throws ApiError if product not found or request fails
 */
export const fetchProductById = async (id: string): Promise<Product> => {
  try {
    return await apiRequest<Product>({
      method: 'GET',
      url: `/products/${id}`,
    });
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    if (error instanceof ApiError && error.type === ApiErrorType.NOT_FOUND) {
      throw new ApiError(`Product with ID ${id} not found`, ApiErrorType.NOT_FOUND);
    }
    throw error;
  }
};

// PUBLIC_INTERFACE
/**
 * Search products by query
 * 
 * @param query - Search query
 * @param params - Optional additional filter parameters
 * @returns Promise with array of matching products
 */
export const searchProducts = async (query: string, params?: Omit<ProductFilterParams, 'page' | 'limit'>): Promise<Product[]> => {
  try {
    return await apiRequest<Product[]>({
      method: 'GET',
      url: '/products/search',
      params: {
        query,
        ...params,
      },
    });
  } catch (error) {
    console.error(`Error searching products with query "${query}":`, error);
    throw error;
  }
};

// PUBLIC_INTERFACE
/**
 * Filter products by category
 * 
 * @param category - Category name
 * @param params - Optional additional filter parameters
 * @returns Promise with array of filtered products
 */
export const filterProductsByCategory = async (
  category: string,
  params?: Omit<ProductFilterParams, 'category'>
): Promise<Product[]> => {
  try {
    return await apiRequest<Product[]>({
      method: 'GET',
      url: '/products',
      params: {
        category,
        ...params,
      },
    });
  } catch (error) {
    console.error(`Error filtering products by category "${category}":`, error);
    throw error;
  }
};

// PUBLIC_INTERFACE
/**
 * Filter products by price range
 * 
 * @param priceRange - Min and max price values
 * @param params - Optional additional filter parameters
 * @returns Promise with array of filtered products
 */
export const filterProductsByPriceRange = async (
  priceRange: PriceRange,
  params?: Omit<ProductFilterParams, 'minPrice' | 'maxPrice'>
): Promise<Product[]> => {
  try {
    return await apiRequest<Product[]>({
      method: 'GET',
      url: '/products',
      params: {
        minPrice: priceRange.min,
        maxPrice: priceRange.max,
        ...params,
      },
    });
  } catch (error) {
    console.error(`Error filtering products by price range (${priceRange.min}-${priceRange.max}):`, error);
    throw error;
  }
};

// PUBLIC_INTERFACE
/**
 * Sort products by specified option
 * 
 * @param sortBy - Sort option
 * @param params - Optional additional filter parameters
 * @returns Promise with array of sorted products
 */
export const sortProducts = async (
  sortBy: SortOption,
  params?: Omit<ProductFilterParams, 'sortBy'>
): Promise<Product[]> => {
  try {
    return await apiRequest<Product[]>({
      method: 'GET',
      url: '/products',
      params: {
        sortBy,
        ...params,
      },
    });
  } catch (error) {
    console.error(`Error sorting products by "${sortBy}":`, error);
    throw error;
  }
};

// PUBLIC_INTERFACE
/**
 * Get all available product categories
 * 
 * @returns Promise with array of category names
 */
export const getProductCategories = async (): Promise<string[]> => {
  try {
    return await apiRequest<string[]>({
      method: 'GET',
      url: '/products/categories',
    });
  } catch (error) {
    console.error('Error fetching product categories:', error);
    throw error;
  }
};

// PUBLIC_INTERFACE
/**
 * Get featured products (could be newest, most popular, etc.)
 * 
 * @param limit - Maximum number of products to return
 * @returns Promise with array of featured products
 */
export const getFeaturedProducts = async (limit: number = 10): Promise<Product[]> => {
  try {
    return await apiRequest<Product[]>({
      method: 'GET',
      url: '/products/featured',
      params: { limit },
    });
  } catch (error) {
    console.error('Error fetching featured products:', error);
    throw error;
  }
};
