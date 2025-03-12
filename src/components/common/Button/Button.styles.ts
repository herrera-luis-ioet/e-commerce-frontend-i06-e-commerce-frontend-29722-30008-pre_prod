import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';

interface StyledButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  fullWidth: boolean;
}

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: #2196f3;
        color: white;
        &:hover:not(:disabled) {
          background-color: #0b7dda;
        }
      `;
    case 'secondary':
      return css`
        background-color: #757575;
        color: white;
        &:hover:not(:disabled) {
          background-color: #616161;
        }
      `;
    case 'danger':
      return css`
        background-color: #f44336;
        color: white;
        &:hover:not(:disabled) {
          background-color: #d32f2f;
        }
      `;
    case 'success':
      return css`
        background-color: #4caf50;
        color: white;
        &:hover:not(:disabled) {
          background-color: #388e3c;
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: #2196f3;
        border: 1px solid #2196f3;
        &:hover:not(:disabled) {
          background-color: rgba(33, 150, 243, 0.1);
        }
      `;
    default:
      return css`
        background-color: #2196f3;
        color: white;
        &:hover:not(:disabled) {
          background-color: #0b7dda;
        }
      `;
  }
};

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        padding: 6px 12px;
        font-size: 14px;
      `;
    case 'medium':
      return css`
        padding: 8px 16px;
        font-size: 16px;
      `;
    case 'large':
      return css`
        padding: 12px 24px;
        font-size: 18px;
      `;
    default:
      return css`
        padding: 8px 16px;
        font-size: 16px;
      `;
  }
};

export const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s, transform 0.1s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  ${props => getVariantStyles(props.variant)}
  ${props => getSizeStyles(props.size)}
  
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:active:not(:disabled) {
    transform: scale(0.98);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.3);
  }
`;