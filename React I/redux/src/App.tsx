import { Provider } from "react-redux";
import GlobalStyled from "./Configs/GlobalStyled";
import DefaultLayout from "./Configs/Layouts/DefaultLayout";
import AppRoutes from "./Routes/AppRoutes";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <AppRoutes />
        <GlobalStyled />
      </DefaultLayout>
    </Provider>
  );
}

export default App;
