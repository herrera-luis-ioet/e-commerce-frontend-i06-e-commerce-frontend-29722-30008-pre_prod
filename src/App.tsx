import React, { Suspense, lazy } from 'react';
import './App.css';

// Use React.lazy for code splitting
const ProductCatalog = lazy(() => import('./components/ProductCatalog'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="loading-fallback">
    <p>Loading...</p>
  </div>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>E-Commerce Product Catalog</h1>
      </header>
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <ProductCatalog />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
