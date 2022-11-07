import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import Loader from "../Loader";
export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  console.log(auth.user);
  if (!auth.user) {
    window.location.replace("https://google.com");
    return (
      <div className="h-[calc(100vh-200px)] w-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  } else {
    return children;
  }
};
