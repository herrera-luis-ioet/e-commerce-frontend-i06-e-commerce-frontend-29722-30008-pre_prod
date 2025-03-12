import { createGlobalStyle } from 'styled-components';
import { theme, Theme } from './theme';

/**
 * Global styles for the application
 * 
 * These styles are applied globally to the entire application.
 * Includes reset styles, typography, form elements, and accessibility features.
 */
export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  /* 
   * Modern CSS Reset
   * Based on Josh Comeau's CSS Reset
   */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Remove default margin and padding */
  * {
    margin: 0;
    padding: 0;
  }

  /* Allow percentage-based heights */
  html, body {
    height: 100%;
  }

  /* Set core body defaults */
  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.background.default};
    line-height: ${({ theme }) => theme.typography.lineHeight.md};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
  }

  /* Improve media defaults */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* Remove built-in form typography styles */
  input, button, textarea, select {
    font: inherit;
  }

  /* Avoid text overflows */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  /* Create a root stacking context */
  #root, #__next {
    isolation: isolate;
    height: 100%;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    line-height: ${({ theme }) => theme.typography.lineHeight.sm};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize.h1};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize.h2};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.h3};
  }

  h4 {
    font-size: ${({ theme }) => theme.typography.fontSize.h4};
  }

  h5 {
    font-size: ${({ theme }) => theme.typography.fontSize.h5};
  }

  h6 {
    font-size: ${({ theme }) => theme.typography.fontSize.h6};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: ${({ theme }) => theme.typography.lineHeight.md};
  }

  /* Links */
  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.create('color')};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary.dark};
      text-decoration: underline;
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.primary.main};
      outline-offset: 2px;
    }
  }

  /* Lists */
  ul, ol {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    padding-left: ${({ theme }) => theme.spacing.xl};
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  /* Form elements */
  button, 
  input[type="button"], 
  input[type="reset"], 
  input[type="submit"] {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.contrastText};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    transition: ${({ theme }) => theme.transitions.create('background-color')};
    
    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primary.dark};
    }
    
    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.primary.main};
      outline-offset: 2px;
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  input, 
  textarea, 
  select {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    padding: ${({ theme }) => theme.spacing.sm};
    border: 1px solid ${({ theme }) => theme.colors.grey[300]};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    background-color: ${({ theme }) => theme.colors.common.white};
    transition: ${({ theme }) => theme.transitions.create(['border-color', 'box-shadow'])};
    
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary.main};
      box-shadow: 0 0 0 3px ${({ theme }) => `rgba(33, 150, 243, 0.2)`};
    }
    
    &:disabled {
      background-color: ${({ theme }) => theme.colors.grey[100]};
      cursor: not-allowed;
    }
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  th, td {
    padding: ${({ theme }) => theme.spacing.sm};
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey[200]};
  }

  th {
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    background-color: ${({ theme }) => theme.colors.grey[100]};
  }

  /* Code blocks */
  pre, code {
    font-family: 'Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    background-color: ${({ theme }) => theme.colors.grey[100]};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }

  code {
    padding: 0.2em 0.4em;
  }

  pre {
    padding: ${({ theme }) => theme.spacing.md};
    overflow-x: auto;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    
    code {
      padding: 0;
      background-color: transparent;
    }
  }

  /* Blockquote */
  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.grey[300]};
    padding-left: ${({ theme }) => theme.spacing.md};
    margin-left: 0;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-style: italic;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  /* Horizontal rule */
  hr {
    border: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grey[200]};
    margin: ${({ theme }) => theme.spacing.lg} 0;
  }

  /* Selection */
  ::selection {
    background-color: ${({ theme }) => theme.colors.primary.light};
    color: ${({ theme }) => theme.colors.primary.contrastText};
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.grey[100]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.grey[400]};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.grey[500]};
  }

  /* Utility classes */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .text-left {
    text-align: left;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  /* Responsive helpers */
  .hide-on-mobile {
    ${({ theme }) => theme.breakpoints.down('sm')} {
      display: none !important;
    }
  }

  .hide-on-tablet {
    ${({ theme }) => theme.breakpoints.between('sm', 'md')} {
      display: none !important;
    }
  }

  .hide-on-desktop {
    ${({ theme }) => theme.breakpoints.up('lg')} {
      display: none !important;
    }
  }
`;

export default GlobalStyles;
