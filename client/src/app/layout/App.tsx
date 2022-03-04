import { Container, CssBaseline, ListItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ListBlock from '../../features/List/ListBlock';
import List from '../../features/List/List';

import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      },
      secondary: {
        main: '#6200EE'
      },
    }
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  // display: flex;
  // flex - direction: column;
  // align - items: center;
  // justify - content: center;


  const appContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    mt: 4,
  }



  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container sx={appContainer}>
          {/* <List /> */}

          <Routes>
            <Route path="/" element={<List />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>




        </Container>

      </ThemeProvider>
    </>
  );
}

