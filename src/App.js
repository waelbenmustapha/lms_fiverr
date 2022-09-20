import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  NavBarRoutes,
  AppRoutes,
  NormalRoutes,
  SoloRoutes,
} from "./utils/Routes";
import Main from "./screens/Main";
import { ConvertRoutes } from "./utils/ConvertRoutes";
import Lessons from "./screens/mainScreens/lessons/Lessons";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {ConvertRoutes(SoloRoutes)}

          <Route path="/" element={<Main />}>
            {ConvertRoutes(NormalRoutes)}
            {ConvertRoutes(NavBarRoutes)}
            <Route element={<Lessons />} index />
            <Route path="/academy-lessons">{ConvertRoutes(AppRoutes)}</Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
