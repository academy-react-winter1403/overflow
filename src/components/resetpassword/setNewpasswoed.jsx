import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { newPasswordRequst } from "../../core/services/api/reset password/setNewPassword";


const Resetpasswordlevel2 = () => {
  const validationSchema = Yup.object({
    newpassword: Yup.string().required(" الزامی است"),

  });
  const handleSubmit = async (values) => {
    try {

  
      console.log( email);
  
      const response = await newPasswordRequst(newpassword);
  
      if (response) {
        alert("successfully sent");
gr
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

        <Formik initialValues={{ newpassword: ""}} onSubmit={handleSubmit}>
          {() => (
            <Form className="flex flex-col mt-[60px] mx-auto w-[327px] gap-[10px]">
              <Field type="text" name="newpassword" placeholder=" پسورد جدید " 
              className="w-[327px] h-[50px] bg-gray-200 outline-none border-none rounded-[5px] text-end pr-[10px] mt-[-30px] ml-[50px]" />
             
              <button type="submit" className="w-80 h-12 bg-blue-600 text-black rounded text-lg  ml-[100px]">
                تایید و ورود
              </button>
            </Form>
          )}
        </Formik>

        <div className="text-[14px] mt-[20px] ml-[160px] text-start">
          <label>
            قوانین را مطالعه کرده و با شرایط موافقم
            <input type="checkbox" required />
          </label>
        </div>
      </div>
    </div>
  );
};

export { Resetpasswordlevel2 };
