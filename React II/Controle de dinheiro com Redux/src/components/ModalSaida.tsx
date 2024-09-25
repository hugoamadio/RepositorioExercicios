import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField/TextField";
import { useAppDispatch } from "../store/hooks";
import { useState } from "react";
import { saida } from "../store/models/SaldoSlice";
import { registrar } from "../store/models/EntradasSlice";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

interface ModalSaidaProps {
  open: boolean;
  close: () => void;
}

function ModalSaida({ open, close }: ModalSaidaProps) {
  const dispatch = useAppDispatch();
  const [valor, setValor] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");

  function handleClick() {
    dispatch(saida(Number(valor)));
    dispatch(
      registrar({
        descricao: descricao,
        valor: Number(valor),
        isEntrada: false,
      })
    );
    close();
    setValor("");
    setDescricao("");
  }

  return (
    <BootstrapDialog
      onClose={close}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Registrar Saída
        <IconButton
          aria-label="close"
          onClick={close}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Valor"
              variant="outlined"
              value={valor}
              onChange={(ev) => setValor(ev.target.value)} // Atualiza o estado do valor
            />
            <TextField
              id="outlined-basic"
              label="Descrição"
              variant="outlined"
              value={descricao}
              onChange={(ev) => setDescricao(ev.target.value)} // Atualiza o estado da descrição
            />
          </div>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClick}>
          Registrar
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}

export default ModalSaida;
