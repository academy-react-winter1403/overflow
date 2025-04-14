import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Sendloginrequest } from "../../core/services/api/login/login acrion";
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
    <div className="flex flex-wrap  w-10/10 h-170 bg-white rounded-[30px] mt-10 mb-10">

    <div className="w-5/10 h-138 mt-15 ">
      <img src={signin} />
      
    </div>

    <div className="w-5/10 h-138 mt-15 ">

      <div className="flex justify-end  pr-9">
        <img
          src={academylogo}
          alt="logo"
          className="w-[83px] h-[63px] mt-[33px] mr-[50px]"
        />
      </div>

      <div className="text-center text-[40px] mt-[-70px] mr-[-30px] "> آکادمی سپهر</div>
      
      <div className="flex flex-wrap item-center mt-2 pl-20 ">

        <div className="text-[30px] mt-[20px] ml-[330px] ">  ورود</div>
        <div className="w-[300px] text-end text-[20px] mt-[10px] ml-[125px]">

        </div>

      </div>
        <Formik initialValues={{ user: "", password: "" }} onSubmit={handleSubmit}>
          {() => (
            <Form className="flex flex-col items-end mt-10 gap-2.5 pr-22 mx-auto w-10/10 h-auto ">
              <Field type="text" name="user" placeholder="ایمیل یا شماره موبایل"
               className="w-8/11 h-12 bg-gray-200 outline-none border-none rounded-[5px] text-end" />
              
              <Field type="password" name="password" placeholder="پسورد"
               className="w-8/11 h-12 bg-gray-200 outline-none border-none rounded-[5px] text-end" />
              <button type="submit" className="w-8/11 h-12 text-center bg-[#436E8E] text-black py-2 rounded">
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

export { Loginlevel1 };
