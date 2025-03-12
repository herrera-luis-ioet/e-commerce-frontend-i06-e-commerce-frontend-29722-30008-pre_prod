import styled from 'styled-components';

export const ProductCatalogPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  
  h1 {
    margin-bottom: 30px;
    color: #333;
    font-size: 28px;
  }
  
  @media (max-width: 768px) {
    padding: 15px;
    
    h1 {
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
`;