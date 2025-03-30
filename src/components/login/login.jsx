import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Sendloginrequest } from "../../core/services/api/login/login action";
import { setItem } from "../../core/services/common/storage.services";

const Loginlevel1 = () => {
  const validationSchema = Yup.object({
    user: Yup.string().required("ایمیل یا شماره موبایل الزامی است"),
    password: Yup.string().required("پسورد الزامی است"),
  });
  const handleSubmit = async (values) => {
    try {
      const loginDataForSend = {
        phoneOrGmail: String(values.user), 
        password: String(values.password), 
        rememberMe: "true",
      };
  
      console.log( loginDataForSend);
  
      const response = await Sendloginrequest(loginDataForSend);
  
      if (response) {
        alert("successfully sent");
        setItem("token", response.token);
      } else {
        console.error("Failed");
      }
    } catch (error) {
      console.error("API Response Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex flex-wrap justify-center w-[1136px] h-[679px] bg-white rounded-[30px] ">
      <div className="w-[540px] h-[550px] mt-[60px]">
        <img src='../../../picture/Image 6.png' />
      </div>
      <div className="w-[540px] h-[550px] mt-[60px] ">

        <div className="flex justify-end">
          <img
            src="../../../picture/ac-Logo.png" 
            alt="logo"
            className="w-[83px] h-[63px] mt-[33px] mr-[50px]"
          />
        </div>
        <div className="text-center text-[40px] mt-[-70px] mr-[-30px] "> آکادمی سپهر</div>
        <div className="flex flex-wrap justify-center mt-2 ">
          <div className="text-[30px] mt-[20px] ml-[330px] "> ثبت نام</div>
          <div className="w-[300px] text-end text-[20px] mt-[10px] ml-[125px]">کد ارسال شده را وارد کنید</div>
        </div>
        <Formik initialValues={{ user: "", password: "" }} onSubmit={handleSubmit}>
          {() => (
            <Form className="inputholder2">
              <Field type="text" name="user" placeholder="ایمیل یا شماره موبایل"
               className="w-80 h-12  rounded bg-gray-200 text-center mt-[30px] ml-[100px]" />
              
              <Field type="password" name="password" placeholder="پسورد"
               className="w-80 h-12  rounded bg-gray-200 text-center mt-[30px] ml-[100px]" />
              <button type="submit" className="w-[327px] text-center bg-[#436E8E] text-black py-2 rounded ml-[50px]">
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

export { Loginlevel1 };
