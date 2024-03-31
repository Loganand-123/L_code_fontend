import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Carddeti from "./Carddeti";
import Addarea from "./Addarea";

export default function Home() {
  return (
    <div>
      <Box my={4}>
        {/* Home */}
        <Grid container justifyContent={"center"}>
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            // display={"flex"}
            // alignItems={"center"}
          >
            <Box>
              <img
                src="assets/image/logo.png"
                alt="Girl in a jacket"
                width="300"
                height="150"
              />
            </Box>
            <Box m={10}>
              <Typography
                variant="h2"
                fontSize={"8vw"}
                fontWeight={"600"}
                color={"#0e64cc"}
                fontFamily={"-apple-system"}
              >
                Hi!..
              </Typography>
              <Typography
                variant="h2"
                fontSize={"4vw"}
                fontWeight={"600"}
                color={"#cc0e31"}
                fontFamily={"-apple-system"}
              >
                welcome to L_card...
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            display={"flex"}
            alignItems={"center"}
          >
            <Box>
              <img
                src="assets/image/img2.png"
                alt="Girl in a jacket"
                width="500"
                height="500"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box bgcolor={"#c4c4c4"}>
        <Grid container display={"block"}>
          <Box>
            <Typography
              variant="h2"
              fontSize={"4vw"}
              fontWeight={"600"}
              color={"#e32020"}
              fontFamily={"-apple-system"}
            >
              Your Point
            </Typography>
          </Box>
          <Grid container display={"block"}>
            {/* <Typography
              p={4}
              // style={{
              //   fontSize: "32px",
              //   color: "red",
              //   stroke: "blue",
              //   strokewidth: "4px",
              // }}
              sx={{
                fontSize: "23px",
                stroke: "blue",
                strokeWidth: 2,
              }}
            >
              Card No:
            </Typography> */}
            <Carddeti />
            <Addarea/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
