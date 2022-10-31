import { createContext, useContext, useState } from "react";
import { axiosToken } from "../utils/apis/AxiosWithToken";
import {
  axiosExpiredTokenLogout,
  axiosInjectToken,
} from "../utils/AxiosInterceptors";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("token"));

  const login = (user) => {
    localStorage.setItem("token", user);
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  //Axios Interceptors on HOC
  axiosInjectToken();
  axiosExpiredTokenLogout();

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
