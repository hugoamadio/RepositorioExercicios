import { Button, Typography } from "@mui/material";
import DefaultLayout from "../Configs/Layouts/DefaultLayout";
import { useAppDispatch } from "../store/hooks";
import { decrement, increment } from "../store/models/CartSlice";

function Home() {
  const config = {
    header: true,
    footer: true,
  };

  const dispatch = useAppDispatch()

  function incrementCart(){
    console.log("Incrementar!")
    dispatch(increment())
  }

  function decrementCart(){
    console.log("Decrementar!")
    dispatch(decrement())
  }

  return (
    <DefaultLayout config={config}>
      <Typography sx={{fontSize: '25px', fontWeight: '700'}}>Incrementar carrinho com Redux</Typography>
      <div style={{display: 'flex', width: 'auto', gap: '10px'}}>
      <Button variant="outlined" onClick={incrementCart}>+</Button>
      <Button variant="outlined" onClick={decrementCart}>-</Button>
      </div>
    </DefaultLayout>
  );
}

export default Home;
