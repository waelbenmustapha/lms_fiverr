import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { ReactComponent as BackArrow } from "../../assets/svg/backArrow.svg";
import { ReactComponent as CheckCircle } from "../../assets/svg/check-circle.svg";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import { changePass } from "../../utils/apis/Auth";
function NewPassword() {
  const [success, setSuccess] = useState(false);

  const loginSchema = Yup.object().shape({
    password1: Yup.string()
      .min(8, "كلمة المرور قصيرة")
      .max(30, "كلمة المرور طويلة")
      .required("حقل مطلوب"),
    passwordConfirmation: Yup.string()
      .min(8, "كلمة المرور قصيرة")
      .max(30, "كلمة المرور طويلة")
      .required("حقل مطلوب")
      .oneOf([Yup.ref("password1"), null], "كلمت المرور لا تتطابق"),
  });
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center py-[40px] p-horizontal">
      <Link to={"/"}>
        <img
          className="w-[110px] h-[50px] absolute top-[40px] right-[40px] mediamax-767:right-[20px]"
          src={logo}
          alt="logo"
        />
      </Link>
      <div className="relative w-full max-w-[400px] h-full flex flex-col justify-center px-auto">
        <Link
          to={"/login"}
          className="flex flex-row items-center flex-nowrap w-fit text-primary-one text-[24px] mb-[20px]"
        >
          <BackArrow className="w-[30px] h-[16px] ml-[8px]" />
          <span className="relative before:absolute before:content-[''] before:w-full before:h-[2px] before:bg-black before:bottom-[2px] right-[0px]">
            الرجوع
          </span>
        </Link>
        <h3 className="text-primary-one text-3xl font-bold mb-[20px]">
          إعادة تعيين كلمة المرور
        </h3>
        <Formik
          initialValues={{
            password1: "",
            passwordConfirmation: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            changePass({
              email: "eve.holt@reqres.in",
              password: "testpassforapi",
            })
              .then((res) => setSuccess(true))
              .catch(() => alert("حدث خطأ , الرجاء اعادة المحاولة"));
            setSubmitting(false);
          }}
        >
          {({
            isSubmitting,
            /* and other goodies */
          }) => (
            <Form>
              <div className="flex flex-col">
                <div className="mb-[20px]">
                  <p className="text-[16px] font-bold text-black mb-[8px]">
                    كلمة المرور الجديدة
                  </p>
                  <Field
                    className="px-6 w-full h-[50px] bg-[#F8F8F8] focus:bg-white outline-none focus:border-[1px] focus:border-[#203B3E]"
                    placeholder="أدخل كلمة المرور الجديدة.."
                    name="password1"
                    type="password"
                  />
                  <ErrorMessage
                    className="text-[#cc0000] text-[14px]"
                    name="password1"
                    component="div"
                  />
                </div>
                <div className="mb-[64px] mediamax-767:mb-[40px]">
                  <p className="text-[16px] font-bold text-black mb-[8px]">
                    تأكيد كلمة المرور الجديدة
                  </p>
                  <Field
                    className="px-6 w-full h-[50px] bg-[#F8F8F8] focus:bg-white outline-none focus:border-[1px] focus:border-[#203B3E]"
                    placeholder="أدخل كلمة المرور الجديدة مره أخرى.."
                    type="password"
                    name="passwordConfirmation"
                  />
                  <ErrorMessage
                    className="text-[#cc0000] text-[14px]"
                    name="passwordConfirmation"
                    component="div"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-[50px] font-bold text-center text-[20px] bg-green text-black outline-none border-none"
                >
                  <span>تحديث كلمة المرور</span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
        {success && (
          <div className="text-[16px] font-bold p-[24px] mt-[16px] bg-green/10 flex flex-row items-center">
            <CheckCircle className="ml-[16px]" />

            <p>
              تم تعديل كلمة المرور بنجاح! يمكنك القيام{" "}
              <span className="text-green underline">بتسجيل دخولك</span> الآن
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewPassword;
