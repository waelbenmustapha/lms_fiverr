import React from "react";
import logo from "../../assets/images/logo.png";

function Login() {
  return (
    <div className="flex flex-row flex-nowrap bg-white min-h-screen h-full relative">
      <div className="w-[47%] mediamax-900::w-[100%] relative p-16">
        <div className="relative flex flex-col justify-center h-full w-fit">
          <img src={logo} alt="logo" className="w-[200px] h-[77px] mb-[50px]" />
          <h3 className="text-primary-one text-3xl font-bold">تسجيل الدخول</h3>
          <form className="flex flex-col">
            <div>
              <p className="text-[24px] text-primary-color mb-[10px]">
                البريد الالكتروني
              </p>
              <input
                className="input-formit"
                placeholder="أدخل بريدك الالكتروني.."
                name="name"
                // onChange={handleChange}
                // onBlur={handleBlur}
                // value={values.name}
              />
            </div>
            <div>
              <p className="text-[24px] text-primary-color mb-[10px]">
                كلمة المرور
              </p>
              <input
                className="input-formit"
                placeholder="أدخل كلمة المرور.."
                name="name"
                // onChange={handleChange}
                // onBlur={handleBlur}
                // value={values.name}
              />
            </div>
            <p className="w-full underline text-primary-one text-tiny mb-[40px]">
              نسيت كلمة المرور؟
            </p>
            <button
              onClick={(e) => {}}
              className="flex flex-row flex-nowrap justify-center items-center font-bold text-center text-base bg-primary-one text-white outline-none border-none shadow-orange-shadow w-[100%] max-w-[365px] h-[50px] rounded-[10px]"
            >
              <span>Login</span>
            </button>
          </form>
        </div>
      </div>
      <div className="block w-[53%] mediamax-900:hidden justify-start items-start bg-login-image bg-no-repeat bg-cover"></div>
    </div>
  );
}

export default Login;
