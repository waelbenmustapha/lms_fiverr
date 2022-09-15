import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import CallUsBox from "./components/CallUsBox";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";

function App() {
  return (
    <>
      <NavBar />
      <CourseCard />
      <CallUsBox />
      <Footer />
    </>
  );
}

export default App;
