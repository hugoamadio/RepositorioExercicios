import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#050818',
      dark: '#002884',
      contrastText: '#2c3c98',
    },
    secondary: {
      light: '#ff7961',
      main: '#720b03',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default darkTheme;
