import { CssBaseline } from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';
import Header from './Header';
import Body from './Body';
import { menuItems } from '../utils/menuItems';
import { defaultTheme } from '../utils/defaultTheme';

export default function Layout({ children }) {
  const theme = defaultTheme;
  const menuContent = menuItems;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Header menuItems={menuContent} />
        <Body>{children}</Body>
      </Box>
    </ThemeProvider>
  );
}
