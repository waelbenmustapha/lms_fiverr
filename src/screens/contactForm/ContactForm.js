import React from "react";
import { Formik } from "formik";
function ContactForm() {
  return (
    <div className="mx-auto max-w-[850px]  mediamax-1079:pt-[40px] mediamax-860:pt-[20px] pt-[60px] mb-[100px]">
      <p className="max-w-[550px] text-[40px] mediamax-1023:text-[28px] mediamax-860:text-[24px] font-bold mb-[40px]">
        لو عندك أسئلة تواصل معنا وراح نجاوبك بأسرع وقت..
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          title: "",
          program: "",
          message: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
          <form>
            <div className="w-fit mediamax-650:w-[80%]">
              <div className="flex flex-row mediamax-650:flex-col mediamax-650:gap-[15px] gap-[50px] mb-[20px]">
                <div>
                  <p className="text-[20px] text-primary-color mb-[8px]">
                    الاسم
                  </p>
                  <input
                    className="input-formit"
                    placeholder="أكتب اسمك.."
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </div>
                <div>
                  <p className="text-[20px] text-primary-color mb-[8px]">
                    البريد الالكتروني
                  </p>
                  <input
                    className="input-formit"
                    placeholder="أكتب بريدك الالكتروني.."
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
              </div>
              <div className="flex flex-row mediamax-650:flex-col mediamax-650:gap-[15px] gap-[50px] mb-[20px]">
                <div>
                  <p className="text-[20px] text-primary-color mb-[8px]">
                    عنوان الرسالة
                  </p>
                  <input
                    className="input-formit"
                    placeholder="أكتب عنوان الرسالة.."
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                </div>
                <div>
                  <p className="text-[20px] text-primary-color mb-[8px]">
                    اسم البرنامج{" "}
                  </p>
                  <input
                    className="input-formit"
                    placeholder="برنامج مركز سبل الأولى للابتكار المفتوح"
                    name="program"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.program}
                  />
                </div>
              </div>
              <div className=" w-full flex flex-col ">
                <p className="text-[20px] text-primary-color mb-[8px]">
                  الرسالة
                </p>
                <textarea
                  className="input-formit w-full  h-[270px] mb-[30px]  p-5"
                  placeholder="أكتب الرسالة.."
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
                <div
                  onClick={() => handleSubmit()}
                  className="bg-[#00EC8B] self-end h-[50px] w-[280px] flex justify-center items-center"
                >
                  <p className="text-[20px] font-[bold] text-primary-color">
                    submit
                  </p>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
