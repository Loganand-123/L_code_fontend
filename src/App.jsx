import React, { useState } from "react";
import "./App.css";
import Nav1 from "./base/Nav1";
import Footer from "./base/Footer";
import Home from "./pages/HomeF/Home";
import CustomerReviews from "./pages/HomeF/CustomerReview";
import "font-awesome/css/font-awesome.min.css";
import CardDetails from "./pages/HomeF/CardDetails";
import AboutUs from "./pages/HomeF/AboutUs";
import New from "./New"
import Addarea from "./pages/HomeF/Addarea";
import { CssBaseline, ThemeProvider, colors, createTheme } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handlecheck = (ldcheck) => {
    setDarkMode(ldcheck);
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
        <Nav1 check={handlecheck} />
        {/* <Home/> */}
        <New />
        <div style={{ position: "relative" }}>
            <Nav1 />
            <Home />
            <CardDetails/>
            <CustomerReviews />
            <AboutUs />
            <Footer />
           
          </div>
      </ThemeProvider>
    </>
  );
}

export default App;
