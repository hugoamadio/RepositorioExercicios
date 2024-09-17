import GlobalStyled from "./configs/GlobalStyled";
import DefaultLayout from "./configs/layouts/DefaultLayout";
import ModalContextProvider from "./context/ModalContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <DefaultLayout>
      <ModalContextProvider>
        <AppRoutes />
        <GlobalStyled />
      </ModalContextProvider>
    </DefaultLayout>
  );
}

export default App;
