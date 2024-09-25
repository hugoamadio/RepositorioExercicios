import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegistroType {
  descricao: string;
  valor: number;
  isEntrada: boolean;
}

interface EntradasState {
  registros: RegistroType[];
}

const initialState: EntradasState = {
  registros: [],
};

export const EntradasSlice = createSlice({
  name: 'EntradasSlice',
  initialState,
  reducers: {
    registrar: (state, action: PayloadAction<RegistroType>) => {
      state.registros.push(action.payload);
    },
  },
});

export const { registrar } = EntradasSlice.actions;
export default EntradasSlice.reducer;
