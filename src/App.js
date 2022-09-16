import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBarRoutes, AppRoutes } from "./utils/Routes";
import Main from "./screens/Main";
import { ConvertRoutes } from "./utils/ConvertRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />}>
          {ConvertRoutes(AppRoutes)}
          {ConvertRoutes(NavBarRoutes)}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
