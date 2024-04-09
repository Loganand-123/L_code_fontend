import React from "react";
// import homeImg from "public/assets/image/img2.png";
// import logo from "./assets/image/logo.png";
import { Button, Divider } from "@mui/material";

function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <img
            src="assets/image/logo.png"
            alt="Girl in a jacket"
            width="200"
            height="100"
          />
          <h3>Hi!..</h3>
          <p>welcome to L_card...</p>
          <a href="#" className="btn">
            Learn more
          </a>

          {/* <Button variant="contained">Learn more</Button> */}
        </div>
        <div className="">
          <img
            src="assets/image/img2.png"
            alt="Girl in a jacket"
            width="500"
            height="500"
          />
        </div>
      </section>
      <Divider sx={{ padding: "2px", color: "black" }} />
    </>
  );
}

export default Home;
