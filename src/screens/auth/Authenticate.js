import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { useAuth } from "../../contexts/AuthContext";


function Authenticate() {
  const [searchParams] = useSearchParams();
  const auth = useAuth();
  const navigate = useNavigate();
  const email = searchParams.get("email");
  const name = searchParams.get("name");
  const token = searchParams.get("token");

  function authentic() {
    //change the .get to .post
    axios
      .get("https://mocki.io/v1/3aa284c8-6ec8-444b-8ecd-59c95f715b08", {
        email,
        name,
        token,
      })
      .then((res) => {
        auth.login(res.data.token);
        navigate("/", { state: { from: "login" } });
      })
      .catch(() => console.log("error occured"));
  }

  useEffect(() => {
    authentic();
  }, []);

  return (
    <div className="h-[calc(100vh-200px)] w-screen flex justify-center items-center">
      <Loader />
    </div>
  );
}

export default Authenticate;
