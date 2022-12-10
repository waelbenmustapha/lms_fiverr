import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import { sendForm } from "../../utils/apis/contactUs/SendContactForm";
import axios from "axios";
function ContactForm() {
  const navigate = useNavigate();

  const loginSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Please enter valid email address")
      .required("Email is required"),
    title: Yup.string()
      .required("Title is required")
      .min(5, "Title is too short"),
    program: Yup.string()
      .required("Title of course is required")
      .min(5, "Title of course is too short"),
    body: Yup.string()
      .required("Message is required")
      .min(8, "Message is too short"),
  });

  return (
    <div className="p-horizontal p-vertical bg-header bg-cover bg-no-repeat">
      <div className="bg-white rounded-[4px]">
        <div className="mx-auto max-w-[850px] px-[20px] pt-[60px] pb-[100px]">
          <p className="max-w-[550px] text-blue font-bold mb-[8px] text-[40px] mediamax-1023:text-[28px] mediamax-860:text-[24px]">
            Contact Us:
          </p>
          <p className="text-[20px] mb-[32px]">
            If you have any questions, Please contact us, and we will get back
            to you shortly.
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
                .catch(() => alert("Something went wrong, please try again"))
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
                      <p className="text-[16px] text-black mb-[8px]">Name</p>
                      <Field
                        className="input-formit"
                        placeholder="Your full name"
                        name="name"
                      />
                      <ErrorMessage
                        className="text-[#cc0000] text-[14px]"
                        name="name"
                        component="div"
                      />
                    </div>
                    <div className="flex-[1]">
                      <p className="text-[16px] text-black mb-[8px]">Email</p>
                      <Field
                        className="input-formit"
                        placeholder="example@email.com"
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
                      <p className="text-[16px] text-black mb-[8px]">Subject</p>
                      <Field
                        className="input-formit"
                        placeholder="Subject of your message"
                        name="title"
                      />
                      <ErrorMessage
                        className="text-[#cc0000] text-[14px]"
                        name="title"
                        component="div"
                      />
                    </div>
                    <div className="flex-[1]">
                      <p className="text-[16px] text-black mb-[8px]">Course</p>
                      <Field
                        className="input-formit"
                        placeholder="Title of course"
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
                    <p className="text-[16px] text-black mb-[8px]">Message</p>
                    <Field
                      as="textarea"
                      className="input-formit w-full  h-[100px]  p-5"
                      placeholder="Please write you message"
                      name="body"
                    />
                    <ErrorMessage
                      className="text-[#cc0000] text-[14px] "
                      name="body"
                      component="div"
                    />
                    <div className="w-full flex justify-center items-center mt-[30px]">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-[50px] w-full flex justify-center items-center text-[16px] font-bold text-white bg-blue-gradient rounded-[4px] cursor-pointer"
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
      </div>
    </div>
  );
}

export default ContactForm;
