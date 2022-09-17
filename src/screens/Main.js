import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import { Outlet } from "react-router-dom";
import MultipleRows from "../components/MultipleRows";

function Main() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        paddingBottom: "100px",
      }}
    >
      <NavBar />
      {/* <MultipleRows /> */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
