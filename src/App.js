import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBarRoutes, AppRoutes, NormalRoutes } from "./utils/Routes";
import Main from "./screens/Main";
import { ConvertRoutes } from "./utils/ConvertRoutes";
import Lessons from "./screens/mainScreens/lessons/Lessons";

function App() {
  console.log(ConvertRoutes(NavBarRoutes));
  return (
    <BrowserRouter>
      <Routes>
        {ConvertRoutes(NormalRoutes)}

        <Route path="/" element={<Main />}>
          {ConvertRoutes(NavBarRoutes)}
          <Route element={<Lessons />} index />
          <Route path="/academy-lessons">{ConvertRoutes(AppRoutes)}</Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
