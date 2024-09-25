import TableContainer from "@mui/material/TableContainer";
import { useAppSelector } from "../store/hooks";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";

function RenderRegistros() {
  const registrosRedux = useAppSelector((state) => state.entradas.registros);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ backgroundColor: "#cdcdcd" }} align="center">
              Valor
            </TableCell>
            <TableCell sx={{ backgroundColor: "#cdcdcd" }} align="center">
              Descrição
            </TableCell>
            <TableCell sx={{ backgroundColor: "#cdcdcd" }} align="center">
              Tipo
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {registrosRedux.map((registro) => (
            <TableRow
              key={registro.valor}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {registro.valor}
              </TableCell>
              <TableCell align="center">{registro.descricao}</TableCell>
              <TableCell align="center">
                {registro.isEntrada ? "Entrada" : "Saída"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RenderRegistros;
