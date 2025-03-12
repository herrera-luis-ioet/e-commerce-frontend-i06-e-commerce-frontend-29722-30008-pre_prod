import React, { useState } from 'react';
import { ProductDetailContainer, ProductImage, ProductInfo, ProductActions } from './ProductDetail.styles';
import { Button } from '../../components';

// Mock product data for initial development
const mockProduct = {
  id: '1',
  title: 'Sample Product',
  description: 'This is a detailed description of the sample product. It includes information about features, materials, and other important details that customers might want to know.',
  price: 49.99,
  image: 'https://via.placeholder.com/500',
  category: 'Electronics',
  rating: 4.5,
  reviews: 120,
  inStock: true
};

// PUBLIC_INTERFACE
/**
 * ProductDetail Page
 * 
 * Displays detailed information about a specific product
 */
const ProductDetailPage: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const product = mockProduct;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.title} to cart`);
    // Add to cart logic will be implemented later
  };

  return (
    <ProductDetailContainer>
      <ProductImage>
        <img src={product.image} alt={product.title} />
      </ProductImage>
      
      <ProductInfo>
        <h1>{product.title}</h1>
        <p className="category">{product.category}</p>
        
        <div className="rating">
          <span>★★★★☆</span>
          <span className="reviews">{product.rating} ({product.reviews} reviews)</span>
        </div>
        
        <p className="price">${product.price.toFixed(2)}</p>
        
        <div className="stock-status">
          {product.inStock ? (
            <span className="in-stock">In Stock</span>
          ) : (
            <span className="out-of-stock">Out of Stock</span>
          )}
        </div>
        
        <p className="description">{product.description}</p>
        
        <ProductActions>
          <div className="quantity">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          
          <Button 
            onClick={handleAddToCart} 
            disabled={!product.inStock}
            size="large"
          >
            Add to Cart
          </Button>
        </ProductActions>
      </ProductInfo>
    </ProductDetailContainer>
  );
};

export default ProductDetailPage;