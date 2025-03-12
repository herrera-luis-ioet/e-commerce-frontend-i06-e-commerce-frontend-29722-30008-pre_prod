import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// PUBLIC_INTERFACE
/**
 * Custom hook for dispatching actions with correct typing
 * Use this throughout your app instead of plain `useDispatch`
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

// PUBLIC_INTERFACE
/**
 * Custom hook for selecting state with correct typing
 * Use this throughout your app instead of plain `useSelector`
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;