import DefaultTheme from './config/theme/DefaultTheme';
import GlobalStyled from './config/GlobalStyled';
import AppRoutes from './routes/AppRoutes';
import UserProvider from './contexts/UserContexts';

function App() {
  return (
    <UserProvider>
      <DefaultTheme>
        <AppRoutes />
        <GlobalStyled/>
      </DefaultTheme>
    </UserProvider>

  );
}

export default App;
