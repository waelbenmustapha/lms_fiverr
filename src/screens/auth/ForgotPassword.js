import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import {  useFormik } from "formik";
import * as Yup from "yup";
import { ReactComponent as CheckCircle } from "../../assets/svg/check-circle.svg";


const ForgotPassword = () => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required"),
    }),
    onSubmit: function (values) {
      // submit password if match the requirements and show success message

      console.log(values);
      setSuccess(true)
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
          <div className="max-w-[500px]">
            <p onClick={()=>navigate(-1)}  className="font-bold cursor-pointer ">
              {"<<"} <span className="font-[400] underline">Back</span>
            </p>
            <p className="text-[#5E45FF] font-bold text-[32px]">
              Reset Your Password
            </p>
            <p className="text-[20px] mb-[32px]">
              Enter your email below to receive a password reset email
            </p>

            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col">
                <div className="mb-[40px]">
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
                  {formik.touched.email &&
                    formik.errors.email && (
                      <div className="text-[#cc0000] text-[14px]">
                        {formik.errors.email}
                      </div>
                    )}
                </div>

                <button
                  className=" h-[50px] mt-[20px] w-full py-[8px] px-[16px] font-[inherit] text-[14px] font-bold cursor-pointer whitespace-nowrap no-underline text-center flex items-center justify-center border-[1px] rounded-[4px] border-blue outline-none bg-blue-gradient text-white"
                  type="submit"
                >
                  <p className="text-[16px] text-white font-bold ">
                    Reset Password
                  </p>
                </button>
              </div>
            </form>

            {success && (
              <>
                <div className="text-[16px] p-[24px] mt-[16px] bg-green/10 flex-row flex">
                  <div className="text-green flex flex-row mb-[8px]">
                    <CheckCircle className="mr-[8px]" />
                  </div>
                  <p>An email has been sent , please check your mailbox</p>
                </div>
                
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
