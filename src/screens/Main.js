import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div style={{position:"relative",minHeight:"100vh",paddingBottom:"100px"}}>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
