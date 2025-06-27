// libraries
import { useDispatch } from 'react-redux';
// store
import type { AppDispatch } from 'store/store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
