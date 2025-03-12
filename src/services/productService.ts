import { apiRequest } from './api';
import { Product } from '../types/product.types';

/**
 * Product service for handling product-related API requests
 */

// PUBLIC_INTERFACE
/**
 * Fetch all products
 * 
 * @returns Promise with array of products
 */
export const fetchProducts = async (): Promise<Product[]> => {
  return apiRequest<Product[]>({
    method: 'GET',
    url: '/products',
  });
};

// PUBLIC_INTERFACE
/**
 * Fetch a single product by ID
 * 
 * @param id - Product ID
 * @returns Promise with product data
 */
export const fetchProductById = async (id: string): Promise<Product> => {
  return apiRequest<Product>({
    method: 'GET',
    url: `/products/${id}`,
  });
};

// PUBLIC_INTERFACE
/**
 * Search products by query
 * 
 * @param query - Search query
 * @returns Promise with array of matching products
 */
export const searchProducts = async (query: string): Promise<Product[]> => {
  return apiRequest<Product[]>({
    method: 'GET',
    url: '/products/search',
    params: { query },
  });
};

// PUBLIC_INTERFACE
/**
 * Filter products by category
 * 
 * @param category - Category name
 * @returns Promise with array of filtered products
 */
export const filterProductsByCategory = async (category: string): Promise<Product[]> => {
  return apiRequest<Product[]>({
    method: 'GET',
    url: '/products',
    params: { category },
  });
};