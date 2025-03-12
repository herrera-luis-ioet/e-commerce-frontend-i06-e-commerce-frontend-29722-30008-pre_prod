import styled from 'styled-components';

export const ProductDetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px 15px;
    gap: 30px;
  }
`;

export const ProductImage = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const ProductInfo = styled.div`
  h1 {
    margin: 0 0 10px;
    font-size: 28px;
    color: #333;
  }
  
  .category {
    color: #666;
    margin-bottom: 15px;
    font-size: 14px;
  }
  
  .rating {
    margin-bottom: 20px;
    
    span {
      color: #f39c12;
    }
    
    .reviews {
      margin-left: 10px;
      color: #666;
    }
  }
  
  .price {
    font-size: 24px;
    font-weight: bold;
    color: #e53935;
    margin-bottom: 15px;
  }
  
  .stock-status {
    margin-bottom: 20px;
    
    .in-stock {
      color: #4caf50;
      font-weight: 500;
    }
    
    .out-of-stock {
      color: #f44336;
      font-weight: 500;
    }
  }
  
  .description {
    margin-bottom: 30px;
    line-height: 1.6;
    color: #444;
  }
`;

export const ProductActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  .quantity {
    display: flex;
    align-items: center;
    gap: 10px;
    
    label {
      font-size: 14px;
      color: #666;
    }
    
    input {
      width: 60px;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      text-align: center;
      
      &:focus {
        outline: none;
        border-color: #2196f3;
      }
    }
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    
    button {
      width: 100%;
    }
  }
`;