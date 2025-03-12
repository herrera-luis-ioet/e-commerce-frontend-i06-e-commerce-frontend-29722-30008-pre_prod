import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ThemeProvider } from 'styled-components';
// BrowserRouter is optional as react-router-dom might not be installed

// Import your reducers
import { productReducer } from 'redux/slices/productSlice';
import { filterReducer } from 'redux/slices/filterSlice';
import { cartReducer } from 'redux/slices/cartSlice';

// Import your theme
import { theme } from 'styles/theme';

// Setup a test store with the reducers
const createTestStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      products: productReducer,
      filters: filterReducer,
      cart: cartReducer,
    },
    preloadedState,
  });
};

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: any;
  store?: ReturnType<typeof createTestStore>;
  route?: string;
}

/**
 * Custom render function that wraps the component with necessary providers
 * @param ui - The React component to render
 * @param options - Additional options including preloadedState, store, and route
 * @returns The rendered component with testing-library utilities
 */
function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState = {},
    store = createTestStore(preloadedState),
    route = '/',
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  // Set the initial route if provided
  window.history.pushState({}, 'Test page', route);

  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </Provider>
    );
  }

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

/**
 * Creates a mock product object for testing
 * @param overrides - Properties to override in the default product
 * @returns A mock product object
 */
export const createMockProduct = (overrides = {}) => ({
  id: '1',
  name: 'Test Product',
  description: 'This is a test product',
  price: 99.99,
  category: 'electronics',
  image: 'test-image.jpg',
  rating: { rate: 4.5, count: 100 },
  ...overrides,
});

/**
 * Creates an array of mock products for testing
 * @param count - Number of mock products to create
 * @returns An array of mock product objects
 */
export const createMockProducts = (count: number) => {
  return Array.from({ length: count }, (_, index) =>
    createMockProduct({ id: String(index + 1), name: `Test Product ${index + 1}` })
  );
};

// Re-export everything from RTL
export * from '@testing-library/react';

// Export our custom render method
export { renderWithProviders as render };
