import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import CallUsBox from "./components/CallUsBox";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./screens/Main";
import CoursePage from "./screens/CoursePage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route
            path={"/"}
            element={
            <Main/>
            }
          />
           <Route
            path={"/course"}
            element={
            <CoursePage/>
            }
          />
    </Routes>
  </BrowserRouter>
   
  );
}

export default App;
