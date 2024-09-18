import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './models/CartSlice'

export const store = configureStore({
  reducer: {
    Cart: CartSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch