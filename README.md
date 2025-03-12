# E-Commerce Frontend - Product Catalog Component

This project is a comprehensive React-based frontend for an e-commerce application, focusing on the Product Catalog Component. It provides a feature-rich interface for browsing, searching, filtering, and interacting with products.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Development Guidelines](#development-guidelines)
  - [Code Style](#code-style)
  - [Component Structure](#component-structure)
  - [State Management](#state-management)
  - [Testing](#testing)
- [API Integration](#api-integration)
- [Performance Optimization](#performance-optimization)
- [Browser Support](#browser-support)
- [Contributing](#contributing)

## 🔍 Overview

The Product Catalog Component is a modular, reusable frontend module designed to handle all aspects of product display and interaction in an e-commerce application. It includes product listing, detailed views, search functionality, filtering, sorting, and cart integration.

## ✨ Features

- **Product Listing**: Display products in a grid or list view with pagination
- **Product Details**: Detailed product information with images, descriptions, and specifications
- **Search Functionality**: Real-time product search with debounced input
- **Advanced Filtering**: Filter products by category, price range, and other attributes
- **Sorting Options**: Sort products by price, name, or newest
- **Responsive Design**: Optimized for mobile, tablet, and desktop views
- **Cart Integration**: Add products to cart with quantity selection
- **Performance Optimized**: Lazy loading, code splitting, and memoization for optimal performance
- **Accessibility**: WCAG compliant components for inclusive user experience
- **Offline Support**: Basic functionality works offline using local storage caching

## 🛠️ Technologies Used

- **Programming Language**: JavaScript (ES6+) with TypeScript
- **Frontend Framework**: React.js
- **State Management**: Redux with Redux Toolkit
- **Styling**: CSS with Styled-Components
- **HTTP Client**: Axios
- **Performance Optimization**: React.memo, Code Splitting, Intersection Observer
- **Storage**: LocalStorage for persistent caching
- **Testing**: Jest and React Testing Library
- **Build System**: Create React App, Webpack, Babel
- **Code Quality**: ESLint, Prettier
- **End-to-End Testing**: Cypress

## 📁 Project Structure

```
e-commerce-frontend/
├── public/                  # Static files
│   ├── index.html           # HTML template
│   ├── favicon.ico          # Favicon
│   ├── manifest.json        # PWA manifest
│   └── robots.txt           # SEO robots file
├── src/                     # Source code
│   ├── assets/              # Static assets
│   │   ├── icons/           # SVG icons
│   │   └── images/          # Images
│   ├── components/          # Reusable components
│   │   ├── common/          # Shared UI components
│   │   │   ├── Button/      # Button component
│   │   │   ├── LazyImage/   # Image with lazy loading
│   │   │   └── Modal/       # Modal dialog component
│   │   ├── ProductCard/     # Product card component
│   │   ├── ProductCatalog/  # Main catalog component
│   │   ├── ProductFilter/   # Filtering component
│   │   ├── ProductList/     # Product listing component
│   │   └── ProductSearch/   # Search component
│   ├── hooks/               # Custom React hooks
│   │   ├── useDebounce.ts   # Debounce hook for search
│   │   ├── useIntersectionObserver.ts # Lazy loading hook
│   │   └── useLocalStorage.ts # Local storage hook
│   ├── pages/               # Page components
│   │   ├── ProductCatalog/  # Catalog page
│   │   └── ProductDetail/   # Product detail page
│   ├── redux/               # Redux state management
│   │   ├── slices/          # Redux slices
│   │   │   ├── cartSlice.ts # Cart state management
│   │   │   ├── filterSlice.ts # Filter state management
│   │   │   └── productSlice.ts # Product state management
│   │   ├── hooks.ts         # Redux hooks
│   │   └── store.ts         # Redux store configuration
│   ├── services/            # API services
│   │   ├── api.ts           # API client setup
│   │   └── productService.ts # Product-specific API calls
│   ├── styles/              # Global styles
│   │   ├── globalStyles.ts  # Global style definitions
│   │   └── theme.ts         # Theme variables
│   ├── types/               # TypeScript type definitions
│   │   ├── common.types.ts  # Shared types
│   │   └── product.types.ts # Product-related types
│   ├── utils/               # Utility functions
│   │   ├── formatting.ts    # Text/number formatting
│   │   ├── validation.ts    # Form validation
│   │   └── test-utils/      # Testing utilities
│   ├── __mocks__/           # Jest mock files
│   ├── App.tsx              # Main App component
│   ├── App.css              # App-specific styles
│   ├── index.tsx            # Application entry point
│   ├── index.css            # Global CSS
│   └── setupTests.ts        # Test configuration
├── jest.config.js           # Jest configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.22.x or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-organization/e-commerce-frontend.git
   cd e-commerce-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode at [http://localhost:3000](http://localhost:3000) |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run test:ci` | Runs tests in CI mode with coverage report |
| `npm run build` | Builds the app for production to the `build` folder |
| `npm run eject` | Ejects from Create React App (one-way operation) |
| `npm run lint` | Lints the code using ESLint |
| `npm run lint:fix` | Automatically fixes linting issues |
| `npm run format` | Formats code using Prettier |
| `npm run cypress` | Opens Cypress for E2E testing |
| `npm run cypress:run` | Runs Cypress tests headlessly |

## 💻 Development Guidelines

### Code Style

- Follow the ESLint and Prettier configurations
- Use TypeScript for type safety
- Write meaningful variable and function names
- Add JSDoc comments for public interfaces

### Component Structure

- Use functional components with hooks
- Create small, reusable components
- Follow the component folder structure:
  ```
  ComponentName/
  ├── index.tsx          # Main component export
  ├── ComponentName.tsx  # Component implementation (if complex)
  ├── ComponentName.styles.ts  # Styled components
  └── __tests__/         # Tests for the component
  ```

### State Management

- Use Redux for global state (products, cart, filters)
- Use React Context for theme and UI state
- Use local component state for component-specific state
- Follow the Redux Toolkit patterns for actions and reducers

### Testing

- Write unit tests for all components and utilities
- Use React Testing Library for component testing
- Use Jest for utility function testing
- Aim for at least 70% code coverage
- Write E2E tests for critical user flows with Cypress

## 🔌 API Integration

The application integrates with a RESTful API for product data. The API client is configured in `src/services/api.ts` and product-specific endpoints are in `src/services/productService.ts`.

Key API endpoints:
- `GET /products` - List all products with filtering
- `GET /products/:id` - Get a single product
- `GET /products/search` - Search products
- `GET /products/categories` - Get all categories

## ⚡ Performance Optimization

- Lazy loading of images using Intersection Observer
- Code splitting with React.lazy and Suspense
- Debounced search input to reduce API calls
- Memoization of expensive calculations with useMemo and useCallback
- Local storage caching for frequently accessed data

## 🌐 Browser Support

The application supports the following browsers:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 👥 Contributing

1. Follow the code style guidelines
2. Write tests for new features
3. Update documentation for any changes
4. Create focused, small pull requests
