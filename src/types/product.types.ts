/**
 * Product Types
 * 
 * Type definitions for product-related data structures
 */

// PUBLIC_INTERFACE
/**
 * Product interface representing a product in the catalog
 */
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating?: {
    rate: number;
    count: number;
  };
}

// PUBLIC_INTERFACE
/**
 * CartItem interface extending Product with quantity
 */
export interface CartItem extends Product {
  quantity: number;
}

// PUBLIC_INTERFACE
/**
 * ProductState interface for Redux state
 */
export interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;
}

// PUBLIC_INTERFACE
/**
 * CartState interface for Redux state
 */
export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

// PUBLIC_INTERFACE
/**
 * PriceRange interface for filtering products by price
 */
export interface PriceRange {
  min: number;
  max: number;
}

// PUBLIC_INTERFACE
/**
 * SortOption type for product sorting options
 */
export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'newest';

// PUBLIC_INTERFACE
/**
 * FilterState interface for Redux state
 */
export interface FilterState {
  searchQuery: string;
  category: string | null;
  priceRange: PriceRange;
  sortBy: SortOption;
}