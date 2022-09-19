import React from "react";
import { Formik } from "formik";
function ContactForm() {
  return (
    <div className="pr-[200px] pt-[100px] mb-[120px]">
      <p className="w-[700px] text-[56px] font-[bold] mb-[65px]">
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
          <form >
            <div className="flex flex-row gap-[65px] mb-[30px]">
              <div>
                <p className="text-[24px] text-primary-color mb-[10px]">
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
                <p className="text-[24px] text-primary-color mb-[10px]">
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
            <div className="flex flex-row gap-[65px] mb-[30px]">
              <div>
                <p className="text-[24px] text-primary-color mb-[10px]">
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
                <p className="text-[24px] text-primary-color mb-[10px]">
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
            <div className=" w-[960px] flex flex-col ">
            <p className="text-[24px] text-primary-color mb-[10px]">الرسالة </p>
            <textarea
              className="input-formit w-full  h-[270px] mb-[30px]  p-5"
              placeholder="أكتب الرسالة.."
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            <div onClick={()=>handleSubmit()} className="bg-[#00EC8B] self-end w-[280px] flex justify-center items-center  h-[60px] ">
                <p className="text-[20px] font-[bold] text-primary-color">submit</p>
            </div>
            </div>

           
          </form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
