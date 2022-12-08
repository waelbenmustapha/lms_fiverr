import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import { sendForm } from "../../utils/apis/contactUs/SendContactForm";
import axios from "axios";
function ContactForm() {
  const navigate = useNavigate();

  const loginSchema = Yup.object().shape({
    name: Yup.string().required("حقل مطلوب"),
    email: Yup.string().email("بريد الكتروني خاطئ").required("حقل مطلوب"),
    title: Yup.string().required("حقل مطلوب").min(5, "العنوان قصير"),
    program: Yup.string().required("حقل مطلوب").min(5, "اسم البرنامج قصير"),
    body: Yup.string().required("حقل مطلوب").min(8, "الرسالة قصيرة"),
  });

  return (
    <div className="mx-auto max-w-[850px] px-[20px] pt-[60px] mb-[100px]">
      <p className="max-w-[550px] text-[40px] mediamax-1023:text-[28px] mediamax-860:text-[24px] font-bold mb-[40px]">
        لو عندك أسئلة تواصل معنا وراح نجاوبك بأسرع وقت..
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          title: "",
          program: "",
          body: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          //send form api here
          sendForm(values)
            .then(() => navigate("/form-sucess"))
            .catch(() => alert("حدث خطأ , الرجاء اعادة المحاولة"))
            .finally(() => setSubmitting(false));
        }}
      >
        {({
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form>
            <div className="w-full">
              <div className="flex flex-row mediamax-650:flex-col mediamax-650:gap-[15px] gap-[50px] mb-[20px]">
                <div className="flex-[1]">
                  <p className="text-[24px] text-black mb-[8px]">الاسم</p>
                  <Field
                    className="input-formit"
                    placeholder="أكتب اسمك.."
                    name="name"
                  />
                  <ErrorMessage
                    className="text-[#cc0000] text-[14px]"
                    name="name"
                    component="div"
                  />
                </div>
                <div className="flex-[1]">
                  <p className="text-[24px] text-black mb-[8px]">
                    البريد الالكتروني
                  </p>
                  <Field
                    className="input-formit"
                    placeholder="أكتب بريدك الالكتروني.."
                    name="email"
                    type="email"
                  />
                  <ErrorMessage
                    className="text-[#cc0000] text-[14px]"
                    name="email"
                    component="div"
                  />
                </div>
              </div>
              <div className="flex flex-row mediamax-650:flex-col mediamax-650:gap-[15px] gap-[50px] mb-[20px]">
                <div className="flex-[1]">
                  <p className="text-[24px] text-black mb-[8px]">
                    عنوان الرسالة
                  </p>
                  <Field
                    className="input-formit"
                    placeholder="أكتب عنوان الرسالة.."
                    name="title"
                  />
                  <ErrorMessage
                    className="text-[#cc0000] text-[14px]"
                    name="title"
                    component="div"
                  />
                </div>
                <div className="flex-[1]">
                  <p className="text-[24px] text-black mb-[8px]">
                    اسم البرنامج
                  </p>
                  <Field
                    className="input-formit"
                    placeholder="برنامج مركز سبل الأولى للابتكار المفتوح"
                    name="program"
                  />
                  <ErrorMessage
                    className="text-[#cc0000] text-[14px]"
                    name="program"
                    component="div"
                  />
                </div>
              </div>
              <div className=" w-full flex flex-col  ">
                <p className="text-[24px] text-black mb-[8px]">الرسالة</p>
                <Field
                  as="textarea"
                  className="input-formit w-full  h-[270px]  p-5"
                  placeholder="أكتب الرسالة.."
                  name="body"
                />
                <ErrorMessage
                  className="text-[#cc0000] text-[14px] "
                  name="body"
                  component="div"
                />
                <div className="w-full flex justify-end mt-[30px]">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#00EC8B] cursor-pointer self-end h-[50px] w-full max-w-[280px] mediamax-550:max-w-full flex justify-center items-center text-[20px] font-bold text-black"
                  >
                    submit
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
