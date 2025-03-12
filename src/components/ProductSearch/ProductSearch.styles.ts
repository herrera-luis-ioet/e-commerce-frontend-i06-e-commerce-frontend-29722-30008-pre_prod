import styled from 'styled-components';

export const ProductSearchContainer = styled.div`
  margin-bottom: 20px;
  
  form {
    display: flex;
    width: 100%;
    
    input {
      flex: 1;
      padding: 10px 15px;
      border: 1px solid #ddd;
      border-right: none;
      border-radius: 4px 0 0 4px;
      font-size: 16px;
      
      &:focus {
        outline: none;
        border-color: #2196f3;
      }
    }
    
    button {
      padding: 10px 20px;
      background-color: #2196f3;
      color: white;
      border: none;
      border-radius: 0 4px 4px 0;
      cursor: pointer;
      transition: background-color 0.3s;
      
      &:hover {
        background-color: #0b7dda;
      }
    }
  }
`;