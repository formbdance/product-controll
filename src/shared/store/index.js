import { configureStore } from '@reduxjs/toolkit';
import modalControl from '@/shared/slices/modalview';
import categoriesSlice from '@/shared/slices/categories';
import clientSlice from '@/shared/slices/client';




export const mainStore = () => {
  return configureStore({
    reducer: {
      modalStates: modalControl,
      categoriesState: categoriesSlice,
      clientState: clientSlice,
    }
  })
}