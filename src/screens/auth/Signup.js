import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  useFormik } from "formik";
import * as Yup from "yup";
import { ReactComponent as Lock } from "../../assets/svg/lock.svg";
import { ReactComponent as Eye } from "../../assets/svg/eye.svg";
import { ReactComponent as EyeClosed } from "../../assets/svg/eye-close.svg";
import axios from "axios";

const Signup = () => {
  const [success, setSuccess] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [passwordConfirmationType, setPasswordConfirmationType] =
    useState("password");

  const [passValidation, setPassValidation] = useState(null);
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const togglePasswordConfirmation = () => {
    if (passwordConfirmationType === "password") {
      setPasswordConfirmationType("text");
    } else {
      setPasswordConfirmationType("password");
    }
  };

  // submit changes
  async function updatePassword(password) {
    await axios
      .put("https://reqres.in/api/users/", { password })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          setSuccess(true);
          setPassValidation("");
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  }
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirmation: "",
      email: "",
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),

      email: Yup.string().email("Invalid email format").required("Required"),
      password: Yup.string()
        .required("Required")
        .test("test name", "validation failure message", function (e) {
          let hasNumber = /\d/.test(e);
          let hasUpper = /[A-Z]/.test(e);
          let hasLower = /[a-z]/.test(e);
          let morethaneightchar = e?.length >= 8;

          let specialChar = /[!@#$%^&*]/.test(e);
          if (
            hasNumber &&
            hasUpper &&
            hasLower &&
            specialChar &&
            morethaneightchar
          ) {
            setPassValidation("strong");
          } else if (hasNumber && (hasUpper || hasLower) && morethaneightchar) {
            setPassValidation("medium");
            console.log("e is "+e.length)

          } else if (!e) {
            console.log("e is empty")
          } else {

            setPassValidation("weak");
          }
          return true;
        }),
      passwordConfirmation: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passowrds do not match!"),
    }),
    onSubmit: function (values) {
      // submit password if match the requirements and show success message
      if (passValidation !== "weak") {
        console.log(`password: ${values.password}`);
        console.log(`passwordConfirmation: ${values.passwordConfirmation}`);
        updatePassword(values.password);
      }
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
          backgroundImage: "url(/bgblue.png)",
          backgroundAttachment: "fixed",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-full min-h-screen flex items-center justify-center py-[40px] px-[185px] horizontal-padding"
      >
        <div className="relative w-full h-full flex flex-col justify-center py-[90px] max-w-[1100px] items-center rounded-[4px]  bg-white">
          <div className="max-w-[600px]">
            <p onClick={()=>navigate(-1)}  className="font-bold cursor-pointer ">
              {"<<"} <span className="font-[400] underline">Back</span>
            </p>
            <p className="text-[#5E45FF] font-bold text-[32px]">
              Create New Account
            </p>
            <p className="text-[20px] mb-[32px]">
              Welcome! Please enter your details.
            </p>

            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col">
                <div className="mb-[20px]">
                  <p className="text-[16px] mb-[8px]">Full Name</p>
                  <div className="relative">
                    <input
                      style={
                        formik.touched.name && formik.errors.name
                          ? { borderColor: "#cc0000", color: "#cc0000" }
                          : { borderColor: "#DFDFDF" }
                      }
                      className="w-full h-[62px] bg-white rounded-[1px] px-[20px] placeholder:text-placeholder outline-none border-[1px]"
                      placeholder="Enter your Full Name"
                      name="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                  </div>
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-[#cc0000] text-[14px]">
                      {formik.errors.name}
                    </div>
                  )}
                </div>
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
                      placeholder="Enter your email"
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
                  <p className="text-[16px] mb-[8px]">
                    New Password 
                  </p>
                  <div className="relative">
                    <div
                      style={
                        formik.touched.password && formik.errors.password
                          ? { color: "#cc0000" }
                          : passValidation === "strong"
                          ? { color: "#3ECE44" }
                          : passValidation === "medium"
                          ? { color: "#4397D8" }
                          : passValidation === "weak"
                          ? { color: "#FDB236" }
                          : { color: "#D3D3D3" }
                      }
                      className="flex absolute inset-y-0 left-0 items-center pl-[20px] text-placeholder pointer-events-none"
                    >
                      <Lock />
                    </div>
                    <input
                      style={
                        formik.touched.password && formik.errors.password
                          ? { borderColor: "#cc0000", color: "#cc0000" }
                          : passValidation === "strong"
                          ? { borderColor: "#3ECE44", color: "#3ECE44" }
                          : passValidation === "medium"
                          ? { borderColor: "#4397D8", color: "#4397D8" }
                          : passValidation === "weak"
                          ? { borderColor: "#FDB236", color: "#FDB236" }
                          : { borderColor: "#DFDFDF", color: "" }
                      }
                      className={
                        " h-[62px] w-[380px] bg-white rounded-[1px] px-[40px] placeholder:text-placeholder outline-none border-[1px] "
                      }
                      placeholder="Enter your new Password.."
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

                  {formik.values.password.length > 0 &&
                    passValidation === "weak" && (
                      <div className="text-[#FDB236] text-[14px]">
                        Oppss! Your password is weak, we recommend you change
                        it!
                      </div>
                    )}
                  {formik.values.password.length > 0 &&
                    passValidation === "medium" && (
                      <div className="text-[#4397D8] text-[14px]">
                        Hmm.. Your new password is good but not strong
                      </div>
                    )}
                  {formik.values.password.length > 0 &&
                    passValidation === "strong" && (
                      <div className="text-[#3ECE44] text-[14px]">
                        Well done!! Your new password is strong
                      </div>
                    )}
                  {formik.touched.password && formik.errors.password && (
                    <div className="text-[#cc0000] text-[14px]">
                      {formik.errors.password}
                    </div>
                  )}
                </div>
                <div className="mb-[20px]">
                  <p className="text-[16px] mb-[8px]">Confirm New Password</p>
                  <div className="relative">
                    <div
                      style={
                        formik.touched.passwordConfirmation &&
                        formik.errors.passwordConfirmation
                          ? { color: "#cc0000" }
                          : { color: "#D3D3D3" }
                      }
                      className="flex absolute inset-y-0 left-0 items-center pl-[20px] pointer-events-none"
                    >
                      <Lock />
                    </div>
                    <input
                      style={
                        formik.touched.passwordConfirmation &&
                        formik.errors.passwordConfirmation
                          ? { borderColor: "#cc0000", color: "#cc0000" }
                          : { borderColor: "#DFDFDF" }
                      }
                      className="w-full h-[62px] bg-white rounded-[1px] px-[40px] placeholder:text-placeholder outline-none border-[1px]"
                      placeholder="Re-enter your new Password.."
                      name="passwordConfirmation"
                      type={passwordConfirmationType}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.passwordConfirmation}
                    />
                    <div
                      onClick={togglePasswordConfirmation}
                      className="flex absolute inset-y-0 right-0 items-center px-[20px] cursor-pointer"
                    >
                      {passwordConfirmationType === "password" ? (
                        <Eye className="w-[14px] h-[14px]" />
                      ) : (
                        <EyeClosed className="w-[14px] h-[14px]" />
                      )}
                    </div>
                  </div>
                  {formik.touched.passwordConfirmation &&
                    formik.errors.passwordConfirmation && (
                      <div className="text-[#cc0000] text-[14px]">
                        {formik.errors.passwordConfirmation}
                      </div>
                    )}
                </div>
                <button
                  className=" h-[50px] mt-[20px] w-full py-[8px] px-[16px] font-[inherit] text-[14px] font-bold cursor-pointer whitespace-nowrap no-underline text-center flex items-center justify-center border-[1px] rounded-[4px] border-blue outline-none bg-blue-gradient text-white"
                  type="submit"
                >
                  <p className="text-[16px] text-white font-bold ">Sign Up</p>
                </button>
              </div>
            </form>

            <p className="text-center mt-[16px]">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="font-bold text-[14px] text-[#5E45FF] "
              >
                Sign In
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
