import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MailIcon from '@mui/icons-material/Mail';
import { Badge } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setTheme } from '../store/models/ThemeSlice';

interface MyAppBarProps {
  actionMenu: () => void;
}
function MyAppBar({ actionMenu }: MyAppBarProps) {
  const counterRedux = useAppSelector(state => state.counter);
  const themeRedux = useAppSelector(state => state.theme);
  const dispatch = useAppDispatch();

  function handleTheme() {
    console.log('CLICOU');
    console.log(themeRedux.theme);
    if (themeRedux.theme === 'dark') {
      console.log('ENTROU AQUI');
      dispatch(setTheme({ theme: 'light' }));
    } else {
      dispatch(setTheme({ theme: 'dark' }));
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <IconButton onClick={actionMenu} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News{' '}
            <Badge badgeContent={counterRedux.value} color="primary">
              <MailIcon color="action" />
            </Badge>
          </Typography>
          <Button color="inherit">Login</Button>
          <IconButton onClick={handleTheme}>
            {themeRedux.theme === 'dark' ? <DarkModeIcon color="secondary" /> : <LightModeIcon color="secondary" />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MyAppBar;
