import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

/**
 * Custom Redux hooks for TypeScript
 * 
 * These hooks are pre-typed with the correct types for the application's Redux store
 */

// PUBLIC_INTERFACE
/**
 * Use this hook instead of plain `useDispatch` for better TypeScript support
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

// PUBLIC_INTERFACE
/**
 * Use this hook instead of plain `useSelector` for better TypeScript support
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;