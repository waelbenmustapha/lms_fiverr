import { createContext, useContext, useState } from "react";
import { axiosToken } from "../utils/apis/AxiosWithToken";
const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(localStorage.getItem("token"));
  
    const login =(user)=>{
        localStorage.setItem("token",user)
        setUser(user);
    }

    const logout = () =>{
        setUser(null);
        localStorage.removeItem("token")

    }
    axiosToken.interceptors.request.use(
        (config) => {
      
          if (user) {
            config.headers.Authorization = `Bearer ${user}`;
          }
          console.log("request config", config);
          return config;
        },
        (error) => {
          // console.log("request error", error);
          return Promise.reject(error);
        }
      );

    return (<AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>)
}

export const useAuth =() => {
    return useContext(AuthContext);
}