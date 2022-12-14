import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, ErrorMessage, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import { ReactComponent as CheckCircle } from "../../assets/svg/check-circle.svg";
import { ReactComponent as Lock } from "../../assets/svg/lock.svg";
import { signin } from "../../utils/apis/Auth";
import { ReactComponent as Eye } from "../../assets/svg/eye.svg";
import { ReactComponent as EyeClosed } from "../../assets/svg/eye-close.svg";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [loginErr, setLoginErr] = useState(false);
  const auth = useAuth()
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };



  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: function (values) {
      // submit password if match the requirements and show success message
      signin(values)
        .then((res) => {
          auth.login(res.token);
          navigate("/", { state: { from: "login" } });
        })
        .catch(() => setLoginErr(true))
    },
  });

  return (
    <>
      {/** background image */}
      {/* <img
        className="fixed top-0 right-0 z-[-10] w-auto h-screen"
        src="/bgblue.png"
        style={{}}
        alt="bg"
      /> */}
      <div
        style={{
          backgroundImage: "url(/bgblue .png)",
          backgroundAttachment: "fixed",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-full min-h-screen flex items-center justify-center py-[40px] px-[185px] horizontal-padding"
      >
        <div className="relative w-full h-full flex flex-col justify-center py-[90px] max-w-[1100px] items-center rounded-[4px]  bg-white">
          <div className="max-w-[600px]">
           
            <p className="text-[#5E45FF] font-bold text-[32px]">Log In</p>
            <p className="text-[20px] mb-[32px]">
              Welcome back! Please enter your details.
            </p>

            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col">
                <div className="mb-[20px]">
                  <p className="text-[16px] mb-[8px]">Email</p>
                  <div className="relative">
                    <input
                      style={
                        formik.touched.email && formik.errors.email
                          ? { borderColor: "#cc0000", color: "#cc0000" }
                          : { borderColor: "#DFDFDF" }
                      }
                      className="w-full h-[62px] bg-white rounded-[1px] px-[20px] placeholder:text-placeholder outline-none border-[1px]"
                      placeholder="example@email.com"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-[#cc0000] text-[14px]">
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div className="mb-[20px]">
                  <p className="text-[16px] mb-[8px]">Password</p>
                  <div className="relative">
                    <input
                      style={
                        formik.touched.password && formik.errors.password
                          ? { borderColor: "#cc0000", color: "#cc0000" }
                          : { borderColor: "#DFDFDF" }
                      }
                      className={
                        " h-[62px] w-[380px] bg-white rounded-[1px] px-[20px] placeholder:text-placeholder outline-none border-[1px] "
                      }
                      placeholder="********"
                      name="password"
                      type={passwordType}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    <div
                      onClick={togglePassword}
                      className="flex absolute inset-y-0 right-0 items-center px-[20px] cursor-pointer"
                    >
                      {passwordType === "password" ? (
                        <Eye className="w-[14px] h-[14px]" />
                      ) : (
                        <EyeClosed className="w-[14px] h-[14px]" />
                      )}
                    </div>
                  </div>

                  {formik.touched.password && formik.errors.password && (
                    <div className="text-[#cc0000] text-[14px]">
                      {formik.errors.password}
                    </div>
                  )}
                </div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="vehicle2"
                      style={{ height: 20, width: 20, borderRadius: 4 }}
                      name="vehicle2"
                      value="Car"
                    />
                    <p
                      style={{ marginLeft: 10, fontSize: 14, color: "#232323" }}
                    >
                      Remember for 30 days
                    </p>
                  </div>
                  <Link
                    to={"/forgot-password"}
                    className="font-bold text-[14px] text-[#5E45FF] "
                  >
                    Forgot Password
                  </Link>
                </div>
                {loginErr && (
                  <div className="text-[13px] p-[10px] mt-[10px] w-fit rounded-[4px] bg-[rgb(204,0,0,0.2)] flex flex-row items-center">
                    <p> Invalid email or password </p>
                  </div>
                )}
                <button
                  className=" h-[50px] mt-[20px] w-full py-[8px] px-[16px] font-[inherit] text-[14px] font-bold cursor-pointer whitespace-nowrap no-underline text-center flex items-center justify-center border-[1px] rounded-[4px] border-blue outline-none bg-blue-gradient text-white"
                  type="submit"
                >
                  <p className="text-[16px] text-white font-bold ">Sign In</p>
                </button>
              </div>
            </form>

            <p className="text-center mt-[16px]">
              Don't have an account?
              <Link
                to={"/signup"}
                className="font-bold text-[14px] text-[#5E45FF] "
              >
                {" "}
                Sign Up
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
