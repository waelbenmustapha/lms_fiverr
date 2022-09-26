import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AuthProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {ConvertRoutes(SoloRoutes)}

          <Route path="/" element={<Main />}>
            {ConvertRoutes(NormalRoutes)}
            {ConvertRoutes(NavBarRoutes)}
            <Route element={<Lessons />} index />
            <Route path="/academy-lessons">{ConvertRoutes(AppRoutes)}</Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </AuthProvider>
  );
}

export default App;
