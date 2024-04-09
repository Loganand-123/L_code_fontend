import React, { useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import RestaurantIcon from "@mui/icons-material/Restaurant";
import { FormControlLabel, Switch } from "@mui/material";
// import theme from "./theme1.png"
function Nav1(props) {
  const [ldcheck, setLdcheck] = React.useState(false);
  
  const handlechange = () => {
    setLdcheck(!ldcheck);
    // Call the check function passed as prop with the updated ldcheck value
    if (typeof props.check === 'function') {
      props.check(ldcheck);
    }
  };

  return (
    <header className="fb">
      <h4 className="logo" style={{color:"black"}}> LD </h4>
      <div id="menu-bar" className="fas fa-bars">
      </div>
      <nav className="navbar">
        <FormControlLabel
          control={
            <Switch
              color="secondary"
              onChange={handlechange}
              checked={ldcheck}
            />
          }
        />
        <a href="#home">home</a>
        <a href="#aboutUs">AboutUs</a>
      </nav>
    </header>
  );
}

export default Nav1;
