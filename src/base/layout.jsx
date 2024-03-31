import React from "react";
import Nav from "./Nav1";
import Footer from "./Footer"

import { Outlet } from "react-router-dom";
// import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Nav />
      <div className="container-fluid justify-content-center align-items ">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
}

export default Layout;