import logo from './logo.svg';
import './App.css';
import List from './components/List'
import { AppBar, createTheme, IconButton, ThemeProvider, Toolbar, Typography } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu"
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <IconButton edge='start' sx={{ mr: 2}}>
            <MenuIcon/>
          </IconButton>
          <Typography variant='h6'>
            Rick and Morty
          </Typography>
        </Toolbar>
      </AppBar>
      <List />
    </ThemeProvider>
  )
}

export default App;
