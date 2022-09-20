import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { ReactComponent as BackArrow } from "../../assets/svg/backArrow.svg";
import { ReactComponent as LoginLayer } from "../../assets/svg/login-layer.svg";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";

function Login() {
  const navigate = useNavigate();
  const loginSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "كلمة المرور قصيرة")
      .max(30, "كلمة المرور طويلة")
      .required("حقل مطلوب"),
    email: Yup.string().email("بريد الكتروني خاطئ").required("حقل مطلوب"),
  });

  return (
    <div className="flex flex-row flex-nowrap bg-white min-h-screen h-full relative">
      <div className="flex-[1] w-full h-full my-auto py-8 p-horizontal">
        <div className="relative w-full h-full flex flex-col justify-center">
          <Link
            to={"/"}
            className="flex flex-row items-center flex-nowrap w-fit text-primary-one text-[24px] mb-[20px]"
          >
            <BackArrow className="w-[30px] h-[16px] ml-[8px]" />
            <span className="relative font-bold before:absolute before:content-[''] before:w-full before:h-[2px] before:bg-primary-color before:bottom-[2px] right-[0px]">
              الرجوع
            </span>
          </Link>
          <img src={logo} alt="logo" className="w-[170px] h-[60px] mb-[40px]" />
          <h3 className="text-primary-one text-3xl font-bold mb-[20px]">
            تسجيل الدخول
          </h3>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={(values, { setSubmitting }) => {
              navigate("/form-sucess");
            }}
          >
            {({
              values,

              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form className="flex flex-col">
                <div className="mb-[16px]">
                  <p className="text-[16px] font-bold text-primary-color mb-[8px]">
                    البريد الالكتروني
                  </p>
                  <Field
                    className="px-6 w-[100%] max-w-[370px] h-[50px] bg-[#F8F8F8] focus:bg-white outline-none focus:border-[1px] focus:border-[#203B3E]"
                    placeholder="أدخل بريدك الالكتروني.."
                    name="email"
                    type="email"
                  />
                  <ErrorMessage
                    className="text-[#cc0000] text-[14px]"
                    name="email"
                    component="div"
                  />
                </div>
                <div className="mb-[16px]">
                  <p className="text-[16px] font-bold text-primary-color mb-[8px]">
                    كلمة المرور
                  </p>
                  <Field
                    className="px-6 w-[100%] max-w-[370px] h-[50px] bg-[#F8F8F8] focus:bg-white outline-none focus:border-[1px] focus:border-[#203B3E]"
                    placeholder="أدخل كلمة المرور.."
                    name="password"
                    type="password"
                  />
                  <ErrorMessage
                    className="text-[#cc0000] text-[14px]"
                    name="password"
                    component="div"
                  />
                </div>
                <Link
                  to={"/forgot-password"}
                  className="w-fit underline text-primary-one text-[14px] mb-[40px]"
                >
                  <span>نسيت كلمة المرور؟</span>
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-[100%] max-w-[250px] h-[50px] font-bold text-center text-[20px] bg-green text-primary-color outline-none border-none"
                >
                  <span>تسجيل الدخول</span>
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="flex-[1] relative block mediamax-550:hidden bg-login-image bg-no-repeat bg-cover">
        <LoginLayer className="max-w-[200px] h-full absolute top[0px] left-[64px]" />
      </div>
    </div>
  );
}

export default Login;
