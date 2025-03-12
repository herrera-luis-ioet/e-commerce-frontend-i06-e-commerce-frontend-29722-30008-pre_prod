import styled from 'styled-components';

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px 0;
  
  .no-products {
    grid-column: 1 / -1;
    text-align: center;
    padding: 40px;
    background-color: #f9f9f9;
    border-radius: 8px;
    color: #666;
    font-size: 16px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;