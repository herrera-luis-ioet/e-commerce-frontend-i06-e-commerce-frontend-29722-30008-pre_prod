import React from 'react';
import './App.css';
import ProductCatalog from './components/ProductCatalog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>E-Commerce Product Catalog</h1>
      </header>
      <main>
        <ProductCatalog />
      </main>
    </div>
  );
}

export default App;