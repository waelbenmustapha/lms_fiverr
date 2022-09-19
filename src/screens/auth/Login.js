import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Login() {
  return (
    <div className="flex flex-row flex-nowrap bg-white min-h-screen h-full relative">
      <div className="flex-[1] relative flex flex-col justify-center h-full w-full p-16">
        <Link
          to={"/"}
          className="w-fit underline text-primary-one text-[24px] mb-[20px]"
        >
          <span>الرجوع</span>
        </Link>
        <img src={logo} alt="logo" className="w-[180px] h-[70px] mb-[40px]" />
        <h3 className="text-primary-one text-3xl font-bold mb-[20px]">
          تسجيل الدخول
        </h3>
        <form className="flex flex-col">
          <div className="mb-[16px]">
            <p className="text-[16px] text-primary-color mb-[8px]">
              البريد الالكتروني
            </p>
            <input
              className="px-6 w-[100%] max-w-[370px] h-[50px] bg-[#F8F8F8] focus:bg-white outline-none focus:border-[1px] focus:border-[#203B3E]"
              placeholder="أدخل بريدك الالكتروني.."
              name="name"
              // onChange={handleChange}
              // onBlur={handleBlur}
              // value={values.name}
            />
          </div>
          <div className="mb-[16px]">
            <p className="text-[16px] text-primary-color mb-[8px]">
              كلمة المرور
            </p>
            <input
              className="px-6 w-[100%] max-w-[370px] h-[50px] bg-[#F8F8F8] focus:bg-white outline-none focus:border-[1px] focus:border-[#203B3E]"
              placeholder="أدخل كلمة المرور.."
              name="name"
              // onChange={handleChange}
              // onBlur={handleBlur}
              // value={values.name}
            />
          </div>
          <Link
            to={"/forgot-password"}
            className="w-fit underline text-primary-one text-[14px] mb-[40px]"
          >
            <span>نسيت كلمة المرور؟</span>
          </Link>
          <button
            onClick={(e) => {}}
            className="w-[100%] max-w-[250px] h-[50px] font-bold text-center text-[20px] bg-green text-primary-color outline-none border-none"
          >
            <span>تسجيل الدخول</span>
          </button>
        </form>
      </div>
      <div className="flex-[1] relative block mediamax-550:hidden bg-login-image bg-no-repeat bg-cover"></div>
    </div>
  );
}

export default Login;
