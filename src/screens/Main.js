import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className="relative min-h-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
