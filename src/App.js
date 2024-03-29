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
import AnimateAfterLogin from "./utils/AnimateAfterLogin";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  const location = useLocation();
  return (
    <AuthProvider>
      <AnimatePresence mode="wait">
        <ScrollToTop />
        <Routes location={location} key={location.pathname}>
          {ConvertRoutes(SoloRoutes)}

          <Route
            path="/"
            element={
              <AnimateAfterLogin>
                <Main />
              </AnimateAfterLogin>
            }
          >
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
