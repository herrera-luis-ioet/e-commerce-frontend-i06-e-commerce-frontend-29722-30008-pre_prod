import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: white;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .product-image {
    height: 200px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .product-info {
    padding: 15px;
    
    h3 {
      margin: 0 0 10px;
      font-size: 16px;
      color: #333;
    }
    
    .price {
      font-weight: bold;
      color: #e53935;
      margin-bottom: 15px;
    }
    
    .add-to-cart {
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 8px 15px;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
      
      &:hover {
        background-color: #388e3c;
      }
    }
  }
`;