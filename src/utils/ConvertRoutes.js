import { Route } from "react-router-dom";

export const ConvertRoutes = (routesList) => {
    return routesList.map((route) => {
      return (
        <Route key={route.path} path={route.path} element={route.component} />
      );
    });
  };