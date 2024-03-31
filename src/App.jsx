import React, { useState } from "react";

import "./App.css";
import New from "./New";
import Nav from "./base/Nav";
// import { colors, createTheme } from '@mui/material';
import { CssBaseline, ThemeProvider, colors, createTheme } from "@mui/material";
import Home from "./pages/HomeF/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handlecheck = (data) => {
    setDarkMode(data);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        light: darkMode ? colors.orange[200] : colors.red[200],
        main: darkMode ? colors.orange[500] : colors.red[500],
        dark: darkMode ? colors.orange[800] : colors.red[800],
        contrastText: "#fff",
      },
      secondary: {
        light: darkMode ? colors.green[200] : colors.purple[200],
        main: darkMode ? colors.green[500] : colors.purple[500],
        dark: darkMode ? colors.green[800] : colors.purple[800],
        contrastText: "#000",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav check={handlecheck} />
        <Home/>
        <New />
        
      </ThemeProvider>
    </>
  );
}

export default App;
