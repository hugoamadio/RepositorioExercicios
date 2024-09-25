import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Typography } from "@mui/material";
import { useAppSelector } from "../../store/hooks";

function Saldo() {
  const saldoRedux = useAppSelector(state => state.saldo.value)

  return (
    <div
      style={{
        height: "auto",
        width: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AttachMoneyIcon htmlColor="#000000" fontSize="large" />
      <Typography>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(saldoRedux)}</Typography>

    </div>
  );
}

export default Saldo;
