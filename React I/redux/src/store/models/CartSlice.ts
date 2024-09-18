import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

const CartSlice = createSlice({
  name: 'CartSlice',
  initialState,
  reducers: {
    increment(state) {
      state++
      return state;
    },
    decrement(state) {
      state--
      return state;
    },
  },
});

export const { increment, decrement } = CartSlice.actions;
export default CartSlice.reducer;
