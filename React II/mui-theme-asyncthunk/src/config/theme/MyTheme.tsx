import { ThemeProvider } from '@mui/material';
import { ReactNode, useEffect } from 'react';
import defaultTheme from './defaultTheme';
import darkTheme from './darkTheme';
import { useAppSelector } from '../../store/hooks';

interface MyThemeProps {
  children: ReactNode;
}

function MyTheme({ children }: MyThemeProps) {
  const themeRedux = useAppSelector(state => state.theme);

  useEffect(() => {
    console.log(themeRedux);
  }, [themeRedux]);
  return <ThemeProvider theme={themeRedux.theme === 'dark' ? darkTheme : defaultTheme}>{children}</ThemeProvider>;
}

export default MyTheme;
