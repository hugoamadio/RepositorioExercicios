import { combineReducers } from "@reduxjs/toolkit";
import SaldoSlice from "./SaldoSlice";
import EntradasSlice from "./EntradasSlice";

export default combineReducers({
    saldo: SaldoSlice,
    entradas: EntradasSlice
})