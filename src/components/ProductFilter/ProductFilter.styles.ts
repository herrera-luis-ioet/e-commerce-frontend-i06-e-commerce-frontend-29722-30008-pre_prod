import styled from 'styled-components';

export const ProductFilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 20px;
  
  .filter-group {
    display: flex;
    flex-direction: column;
    min-width: 150px;
    flex: 1;
    
    label {
      margin-bottom: 5px;
      font-size: 14px;
      color: #555;
    }
    
    select, input {
      padding: 8px 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      
      &:focus {
        outline: none;
        border-color: #2196f3;
      }
    }
    
    input[type="number"] {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    
    .filter-group {
      width: 100%;
    }
  }
`;