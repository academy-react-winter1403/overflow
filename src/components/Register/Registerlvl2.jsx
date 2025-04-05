import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { VerifyMessage } from "../../core/services/api/Register/RegisterPages.js";
import { useNavigate } from "react-router-dom"; 
import signin from '../../assets/register/Image 6.png';
import academylogo from '../../assets/register/ac-Logo.png';

const Registerlvl2 = () => {
  
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      let phoneNumber = localStorage.getItem("userPhone");

      try {
        phoneNumber = JSON.parse(phoneNumber);
      } catch {
        console.warn("phoneNumber is not in JSON format, converting to string.");
        phoneNumber = String(phoneNumber);
      }

      if (!phoneNumber) {
        console.error("Phone number not found or invalid in local storage.");
        return;
      }

      const payload = {
        phoneNumber: phoneNumber,
        verifyCode: values.verifyCode,
      };

      console.log("Payload being sent:", payload);

      const response = await VerifyMessage(payload);

      if (response) {
        alert("<<<Payload successfully sent>>>");
        console.log("Payload successfully sent:", response.data);

        navigate("/step3"); // Redirect to the next step
      } else {
        console.error("Failed to send payload.");
      }
    } catch (error) {
      console.error("API Response Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex flex-wrap justify-center w-[1136px] h-[679px] bg-white rounded-[30px] ">
      <div className="w-[540px] h-[550px] mt-[60px]">
        <img src={signin}/>
      </div>
      <div className="w-[540px] h-[550px] mt-[60px] ">

        <div className="flex justify-end">
          <img
            src={academylogo}
            alt="logo"
            className="w-[83px] h-[63px] mt-[33px] mr-[50px]"
          />
        </div>
        <div className="text-center text-[40px] mt-[-70px] mr-[-30px] "> آکادمی سپهر</div>
        <div className="flex flex-wrap justify-center mt-2 ">
          <div className="text-[30px] mt-[20px] ml-[330px] "> ثبت نام</div>
          <div className="w-[300px] text-end text-[20px] mt-[10px] ml-[125px]">کد ارسال شده را وارد کنید</div>
        </div>
        <Formik
          initialValues={{ verifyCode: "" }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="flex flex-col items-center space-y-4">
              <Field
                type="text"
                name="verifyCode"
                placeholder="کد تایید"
                className="w-80 h-12  rounded bg-gray-200 text-center mt-[30px] ml-[100px]"
              />
              <ErrorMessage name="verifyCode" component="div" className="text-red-500 text-sm" />
              <button
                type="submit"
                className="w-80 h-12 bg-blue-600 text-black rounded text-lg  ml-[100px]">تایید و ثبت نام</button>
            </Form>
          )}
        </Formik>

        <div className="mt-8 text-sm ml-[160px]">
          <label>قوانین را مطالعه کرده و با شرایط موافقم{" "}
            <input type="checkbox" required />
          </label>
        </div>
      </div>
    </div>
  );
};

export { Registerlvl2 };