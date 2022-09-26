import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { ReactComponent as BackArrow } from "../../assets/svg/backArrow.svg";
import { ReactComponent as LoginLayer } from "../../assets/svg/login-layer.svg";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import { signin } from "../../utils/apis/Auth";
import { useAuth } from "../../contexts/AuthContext";
import { motion } from "framer-motion";
import { RotatingLines, TailSpin } from "react-loader-spinner";

function Login() {
  const auth = useAuth();
  const [loginErr, setLoginErr] = useState(false);
  const navigate = useNavigate();
  const loginSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "كلمة المرور قصيرة")
      .max(30, "كلمة المرور طويلة")
      .required("حقل مطلوب"),
    email: Yup.string().email("بريد الكتروني خاطئ").required("حقل مطلوب"),
  });

  return (
    <motion.div
      initial={{ opacity: 0,x: window.innerWidth }}
      animate={{ opacity: 1,x:0 }}
      exit={{ x: window.innerWidth, opacity: 0,transition:{duration:0.4}}}
      className="flex flex-row flex-nowrap bg-white min-h-screen h-full relative"
    >
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
              signin(values)
                .then((res) => {
                  auth.login(res.token);
                  navigate("/");
                })
                .catch(() => setLoginErr(true))
                .finally(() => setSubmitting(false));
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
                {loginErr && (
                  <div className="text-[13px] p-[10px] mt-[10px] w-fit rounded-[4px] bg-[rgb(204,0,0,0.2)] flex flex-row items-center">
                    <p>الرجاء التأكد من صحة المعلومات</p>
                  </div>
                )}
                <Link
                  to={"/forgot-password"}
                  className="w-fit underline text-primary-one text-[14px] mb-[40px]"
                >
                  <span>نسيت كلمة المرور؟</span>
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex justify-center items-center w-[100%] max-w-[250px] h-[50px] font-bold text-center text-[20px] bg-green text-primary-color outline-none border-none"
                >
                  {isSubmitting ? <RotatingLines
  strokeColor="white"
  strokeWidth="5"
  animationDuration="1"
  width="35"
  visible={true}
/> : <span>تسجيل الدخول</span>}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="flex-[1] relative block mediamax-550:hidden bg-login-image bg-no-repeat bg-cover">
        <LoginLayer className="max-w-[200px] h-full absolute top[0px] left-[64px]" />
      </div>
    </motion.div>
  );
}

export default Login;
