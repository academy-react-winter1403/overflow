import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Sendresetpassrequest } from "../../core/services/api/reset password/resetpassword";


const   Resetpasswordlevel1 = () => {
  const validationSchema = Yup.object({
email: Yup.string().required(" الزامی است"),

  });
  const handleSubmit = async (values) => {
    try {

  
      console.log( email);
  
      const response = await Sendresetpassrequest(email);
  
      if (response) {
        alert("successfully sent");
      } else {
        console.error("Failed");
      }
    } catch (error) {
      console.error("API Response Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="Registerholder">
      <div className="image">
        <img src="/picture/Image 6.png" alt="background" />
      </div>

      <div className="Registerinputs">
        <div className="academylogo">
          <img src="/picture/ac-Logo.png" alt="logo" />
        </div>
        <div className="academyname">آکادمی سپهر</div>

        <div className="singupholder">
          <div className="singup">ثبت نام</div>
          <div className="insertcode">کد ارسال شده را وارد کنید</div>
        </div>

        <Formik initialValues={{ email: ""}} onSubmit={handleSubmit}>
          {() => (
            <Form className="inputholder2">
              <Field type="text" name="email" placeholder=" ایمیل را وارد کنید" className="input-field" />
            
              <button type="submit" className="inputs2">
                تایید و ورود
              </button>
            </Form>
          )}
        </Formik>

        <div className="rules2">
          <label>
            قوانین را مطالعه کرده و با شرایط موافقم
            <input type="checkbox" required />
          </label>
        </div>
      </div>
    </div>
  );
};

export { Resetpasswordlevel1 };
