/**
 * Application theme configuration
 * 
 * This file defines the theme used throughout the application.
 * It provides a comprehensive set of design tokens for consistent styling.
 */

export const theme = {
  colors: {
    // Primary palette
    primary: {
      main: '#3f51b5',
      light: '#7986cb',
      dark: '#303f9f',
      contrastText: '#ffffff',
    },
    // Secondary palette
    secondary: {
      main: '#f50057',
      light: '#ff4081',
      dark: '#c51162',
      contrastText: '#ffffff',
    },
    // Feedback colors
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: '#ffffff',
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
      contrastText: '#000000',
    },
    info: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
      contrastText: '#ffffff',
    },
    // Neutral colors
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    // Common colors
    common: {
      black: '#000000',
      white: '#ffffff',
      transparent: 'transparent',
    },
    // Background and surface colors
    background: {
      default: '#ffffff',
      paper: '#ffffff',
      alt: '#f5f5f5',
    },
    // Text colors
    text: {
      primary: '#212121',
      secondary: '#757575',
      disabled: '#9e9e9e',
      hint: '#bdbdbd',
      inverse: '#ffffff',
    },
    // Action colors
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      focus: 'rgba(0, 0, 0, 0.12)',
    },
    // Divider color
    divider: 'rgba(0, 0, 0, 0.12)',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    // Font sizes
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      md: '1rem',         // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      xxl: '1.5rem',      // 24px
      h1: '2.5rem',       // 40px
      h2: '2rem',         // 32px
      h3: '1.75rem',      // 28px
      h4: '1.5rem',       // 24px
      h5: '1.25rem',      // 20px
      h6: '1rem',         // 16px
    },
    // Font weights
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    // Line heights
    lineHeight: {
      xs: 1.1,
      sm: 1.25,
      md: 1.5,
      lg: 1.75,
      xl: 2,
    },
    // Letter spacing
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  spacing: {
    // Base spacing unit: 1rem = 16px
    unit: '1rem',
    // Spacing scale
    xxs: '0.125rem',  // 2px
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    xxl: '3rem',      // 48px
    xxxl: '4rem',     // 64px
    // Spacing function (multiplier)
    get: (multiplier: number) => `${multiplier * 0.25}rem`,
  },
  breakpoints: {
    // Breakpoint values
    values: {
      xs: '0px',       // 0px
      sm: '600px',     // 600px
      md: '960px',     // 960px
      lg: '1280px',    // 1280px
      xl: '1920px',    // 1920px
    },
    // Media query helpers
    up: (key: keyof typeof theme.breakpoints.values) => 
      `@media (min-width: ${theme.breakpoints.values[key]})`,
    down: (key: keyof typeof theme.breakpoints.values) => 
      `@media (max-width: ${theme.breakpoints.values[key]})`,
    between: (start: keyof typeof theme.breakpoints.values, end: keyof typeof theme.breakpoints.values) => 
      `@media (min-width: ${theme.breakpoints.values[start]}) and (max-width: ${theme.breakpoints.values[end]})`,
  },
  borderRadius: {
    // Border radius values
    none: '0',
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    xxl: '32px',
    full: '9999px',
  },
  shadows: {
    // Shadow values
    none: 'none',
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    md: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
    lg: '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
    xl: '0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },
  transitions: {
    // Easing functions
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    // Duration values
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    // Transition creator
    create: (props: string = 'all', options: { duration?: number; easing?: string; delay?: number } = {}) => {
      const {
        duration = theme.transitions.duration.standard,
        easing = theme.transitions.easing.easeInOut,
        delay = 0,
      } = options;
      
      return `${props} ${duration}ms ${easing} ${delay}ms`;
    },
  },
  zIndex: {
    // z-index scale
    mobileStepper: 1000,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
    fab: 1050,
    speedDial: 1050,
  },
};

// Type definition for the theme
export type Theme = typeof theme;

// PUBLIC_INTERFACE
/**
 * Get theme value by path
 * 
 * @param path - Dot notation path to theme value
 * @returns Theme value at the specified path
 */
export const getThemeValue = (path: string): any => {
  return path.split('.').reduce((acc: any, part: string) => {
    return acc && acc[part] !== undefined ? acc[part] : undefined;
  }, theme);
};

// PUBLIC_INTERFACE
/**
 * Creates a responsive value based on breakpoints
 * 
 * @param values - Object with breakpoint keys and corresponding values
 * @returns CSS value with media queries
 */
export const responsive = <T>(values: { [key in keyof typeof theme.breakpoints.values]?: T }) => {
  return Object.entries(values).map(([breakpoint, value]) => {
    const bpKey = breakpoint as keyof typeof theme.breakpoints.values;
    return `${theme.breakpoints.up(bpKey)} { ${value} }`;
  }).join('\n');
};

// PUBLIC_INTERFACE
/**
 * Converts a hex color to rgba
 * 
 * @param hex - Hex color code
 * @param alpha - Alpha value (0-1)
 * @returns RGBA color string
 */
export const hexToRgba = (hex: string, alpha: number = 1): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
