import Grid from "@mui/material/Grid2";
import { Button, Paper } from "@mui/material";
import DefaultLayout from "../configs/layouts/DefaultLayout";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

function Home() {
  const config = {
    header: true,
    footer: true,
  };

  const modalContext = useContext(ModalContext);

  function handleOpenModal() {
    if (modalContext) {
      modalContext.setData({
        title: "Modal de exemplo",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto perferendis voluptatibus nam temporibus nobis optio cumque! Maiores nihil autem esse voluptatibus aliquid, incidunt, pariatur architecto facilis nam itaque saepe?",
        label: "Botão",
      });
      modalContext.setOpen(true);
    }
  }

  return (
    <DefaultLayout config={config}>
      <Button variant="contained" onClick={handleOpenModal}>
        Abrir Modal
      </Button>

      <Grid container spacing={1} sx={{ marginBottom: "2em" }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Paper elevation={5} sx={{ padding: "1em" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            distinctio hic rerum nam numquam minima consequuntur temporibus?
            Commodi maiores eos esse vitae ipsam obcaecati, laboriosam maxime
            illo perferendis explicabo nam. Ex mollitia perspiciatis, assumenda
            reiciendis molestias esse ratione doloremque impedit cupiditate
            porro sed sapiente quas distinctio qui dolores, saepe dignissimos
            velit odit aut tempore quo. Distinctio aperiam earum id beatae.
            Porro totam cupiditate obcaecati optio labore nihil libero dolores
            dolore ex dolor rem facere, ducimus, sapiente ratione quod impedit
            sed explicabo eius eos corporis similique laborum. Similique porro
            ad sint!
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper elevation={5} sx={{ padding: "1em" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            labore assumenda delectus mollitia distinctio tempora reiciendis
            accusamus nulla, ducimus, harum, quis explicabo quaerat totam
            deserunt laboriosam non ratione suscipit cupiditate. Mollitia atque
            doloremque quibusdam suscipit nisi saepe dicta perspiciatis,
            assumenda fuga? Nostrum explicabo laborum praesentium, non ratione
            animi, ex cumque magnam alias harum hic inventore delectus nulla
            iste neque quod. Aut incidunt minus mollitia reiciendis, labore
            molestias! Vel itaque aperiam pariatur velit, earum, laudantium
            quidem tempore debitis ex, culpa ad similique sunt? Voluptatum optio
            delectus facilis aspernatur obcaecati molestias minima!
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper elevation={5} sx={{ padding: "1em" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            tempore odio eveniet ea? Odit inventore obcaecati maxime vel
            aspernatur voluptatibus ea porro excepturi, nam voluptates magni
            saepe sed ex similique! Ipsum, cumque. Iusto distinctio rerum
            aliquam eveniet cum fugit at quasi ipsum. Est qui nobis quae
            voluptas reiciendis porro fugit aut, distinctio tenetur dicta culpa
            debitis, possimus eveniet. Nulla, labore! Perspiciatis atque,
            obcaecati molestiae commodi velit labore tempora cum sit natus quis
            ducimus deleniti excepturi numquam mollitia veritatis vitae ex,
            omnis cumque corrupti in unde nostrum ipsa odit porro? Dignissimos.
          </Paper>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
}

export default Home;
