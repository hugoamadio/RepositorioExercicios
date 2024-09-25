import { Button, Grid2, Typography } from "@mui/material";
import DefaultLayout from "../configs/Layouts/DefaultLayout";
import { useState } from "react";
import ModalEntrada from "../components/ModalEntrada";
import ModalSaida from "../components/ModalSaida";
import RenderRegistros from "../components/RenderRegistros";

function Home() {
  const [modalEntrada, setModalEntrada] = useState<boolean>(false);
  const [modalSaida, setModalSaida] = useState<boolean>(false);

  const config = {
    navigation: true,
  };

  return (
    <DefaultLayout config={config}>
      <Grid2
        size={12}
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          gap: "120px",
          marginTop: "35px",
        }}
      >
        <Button
          variant="outlined"
          color="success"
          onClick={() => setModalEntrada(true)}
        >
          <Typography>Registrar Entrada</Typography>
        </Button>

        <Button
          variant="outlined"
          color="error"
          onClick={() => setModalSaida(true)}
        >
          <Typography>Registrar Saída</Typography>
        </Button>
      </Grid2>
      <Grid2 size={12} sx={{marginTop: '35px', padding: '20px 200px'}}>
        <RenderRegistros />
      </Grid2>
      <ModalEntrada open={modalEntrada} close={() => setModalEntrada(false)} />
      <ModalSaida open={modalSaida} close={() => setModalSaida(false)} />
    </DefaultLayout>
  );
}

export default Home;
