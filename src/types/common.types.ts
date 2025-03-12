import React from 'react';

/**
 * Common Types
 * 
 * Type definitions for common UI components and shared interfaces
 */

// PUBLIC_INTERFACE
/**
 * ButtonVariant type for button styling options
 */
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'outline';

// PUBLIC_INTERFACE
/**
 * ButtonSize type for button size options
 */
export type ButtonSize = 'small' | 'medium' | 'large';

// PUBLIC_INTERFACE
/**
 * ButtonProps interface for Button component
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

// PUBLIC_INTERFACE
/**
 * ModalProps interface for Modal component
 */
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

// PUBLIC_INTERFACE
/**
 * Theme interface for styled-components theme
 */
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    danger: string;
    success: string;
    background: string;
    text: string;
    lightText: string;
    border: string;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      small: string;
      medium: string;
      large: string;
    };
    fontWeight: {
      regular: number;
      medium: number;
      bold: number;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
    round: string;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
  transitions: {
    short: string;
    medium: string;
    long: string;
  };
}

// PUBLIC_INTERFACE
/**
 * ChildrenProps interface for components that accept children
 */
export interface ChildrenProps {
  children: React.ReactNode;
}

// PUBLIC_INTERFACE
/**
 * ClassNameProps interface for components that accept className
 */
export interface ClassNameProps {
  className?: string;
}