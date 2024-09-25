import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SaldoState {
  value: number;
}

const initialState: SaldoState = {
  value: 0,
};

export const SaldoSlice = createSlice({
  name: 'SaldoSlice',
  initialState,
  reducers: {
    entrada: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    saida: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { entrada, saida } = SaldoSlice.actions;
export default SaldoSlice.reducer;
