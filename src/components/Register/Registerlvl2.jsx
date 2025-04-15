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
    <div className="flex flex-wrap  w-8/10 h-170 bg-white rounded-[30px] ml-50 mt-10">

      <div className="w-10/10 flex-wrap flex justify-center gap-20">

        
      <div className="w-4/10 h-138 mt-15 ">
        <img className="h-120 " src={signin}/>
      </div>
      
      <div className="w-4/10 h-138 mt-15 ">

        <div className="flex justify-end  pr-9">
          <img
            src={academylogo}
            alt="logo"
            className="w-[83px] h-[63px] mt-[33px] mr-[50px]"
          />
        </div>

        <div className="text-center text-[40px] mt-[-70px] mr-[-30px] "> آکادمی سپهر</div>

        <div className="flex flex-wrap item-center mt-2 pl-20 ">

          <div className="text-[30px] mt-[20px] ml-[330px] "> ثبت نام</div>
          <div className="w-[300px] text-end text-[20px] mt-[10px] ml-[125px]">کد ارسال شده را وارد کنید</div>

        </div>

        <Formik
          initialValues={{ verifyCode: "" }}
          onSubmit={handleSubmit}
        >
          {() => (

            <Form className="flex flex-col items-end mt-10 gap-2.5 pr-22 mx-auto w-10/10 h-auto ">
              <Field
                type="text"
                name="verifyCode"
                placeholder="کد تایید"
                className="w-8/11 h-12 bg-gray-200 outline-none border-none rounded-[5px] text-end"
              />
              <ErrorMessage name="verifyCode" component="div" className="text-red-500 text-sm" />
              <button
                type="submit"
                className="w-8/11 h-12 text-center bg-[#436E8E] text-black py-2 rounded">تایید و ثبت نام</button>
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

    </div>
  );
};

export { Registerlvl2 };