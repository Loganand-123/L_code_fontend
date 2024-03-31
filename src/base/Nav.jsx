import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FormControlLabel, Switch } from "@mui/material";

export default function Nav(props) {
  const [ldcheck, setLdcheck] = React.useState(false);
  props.check(ldcheck);
  const handlechange = () => {
    setLdcheck(!ldcheck);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LD
          </Typography>
          <FormControlLabel
            control={
              <Switch
                color="secondary"
                onChange={handlechange}
                checked={ldcheck}
              />
            }
            label="Theme"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
