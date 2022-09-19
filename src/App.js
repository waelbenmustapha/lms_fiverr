import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBarRoutes, AppRoutes, NormalRoutes } from "./utils/Routes";
import Main from "./screens/Main";
import { ConvertRoutes } from "./utils/ConvertRoutes";
import Lessons from "./screens/mainScreens/lessons/Lessons";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Main />}>
        {ConvertRoutes(NormalRoutes)}
          {ConvertRoutes(NavBarRoutes)}
          <Route element={<Lessons />} index />
          <Route path="/academy-lessons">{ConvertRoutes(AppRoutes)}</Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
