// libraries
import { useSelector } from 'react-redux';
// store
import type { RootState } from 'store/store';

export const useAppSelector = useSelector.withTypes<RootState>();
