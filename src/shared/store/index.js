import { configureStore } from '@reduxjs/toolkit'
import modalControl from '@/shared/slices/modalview'





export const mainStore = () => {
  return configureStore({
    reducer: {
      modalStates: modalControl,
    }
  })
}