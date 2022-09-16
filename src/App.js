import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBarRoutes ,NormalRoutes} from "./utils/Routes";
import Main from "./screens/Main";
import { ConvertRoutes } from "./utils/ConvertRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />}>
          {ConvertRoutes(NavBarRoutes)}
          {ConvertRoutes(NormalRoutes)}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
