import { Provider } from "react-redux";
import GlobalStyled from "./configs/GlobalStyled";
import AppRoutes from "./routes/AppRoutes";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyled />
          <AppRoutes />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
