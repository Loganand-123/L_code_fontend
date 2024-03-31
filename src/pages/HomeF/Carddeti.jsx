import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

export default function Carddeti() {
  return (
    <div>
      <Box p={4}>
        <Box m={1} pb={5} display={"flex"}>
          <Typography
            variant="h2"
            fontSize={"4vw"}
            fontWeight={"600"}
            color={"#2009ed"}
            fontFamily={"-apple-system"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            Card Details:
          </Typography>
          <TextField id="card-no" label="Outlined" variant="outlined" />
        </Box>
        <Box mx={15}>
          <Button variant="contained">Contained</Button>
        </Box>
      </Box>
    </div>
  );
}
