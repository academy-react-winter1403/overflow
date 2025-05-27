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

        navigate("/Register-3"); // Redirect to the next step
      } else {
        console.error("Failed to send payload.");
      }
    } catch (error) {
      console.error("API Response Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex flex-row  w-8/10 h-170 bg-white rounded-[30px] ml-50 mt-10 font-kalameh max-2xl:w-7/10 max-xl:w-6/10 max-xl:m-auto transition-all duration-300 dark:bg-gray-800">

      <div className="w-10/10 flex-row flex justify-center gap-20 transition-all duration-300">

      <div className="w-4/10 h-138 mt-15 ml-10  max-xl:w-0">
        <img className="h-120 w-8/10" src={signin}/>
      </div>
      
      <div className="w-5/10 h-138 mt-25  gap-5 flex flex-col max-xl:justify-center max-xl:w-9/10 transition-all duration-300  ">

        <div className="flex flex-row-reverse w-10/10 justify-start pr-22 gap-5 ">
          <img
            src={academylogo}
            alt="logo"
            className=""
          />
          
        <div className="text-4xl max-md:text-2xl"> آکادمی سپهر</div>
        </div>


        <div className="flex flex-col items-end pr-22 gap-5 ">

          <div className=" text-4xl"> ثبت نام</div>
          <div className="text-2xl">کد ارسال شده را وارد کنید</div>

        </div>

        <Formik
          initialValues={{ verifyCode: "" }}
          onSubmit={handleSubmit}
        >
          {() => (

            <Form className="flex flex-col items-end mt-10 gap-2.5 pr-22 mx-auto w-10/10 h-auto font-kalameh ">
              <Field
                type="text"
                name="verifyCode"
                placeholder="کد تایید"
                className="w-8/11 h-12 bg-gray-200 outline-none border-none rounded-[5px] text-end max-xl:w-10/10 dark:text-black"
              />
              <ErrorMessage name="verifyCode" component="div" className="text-red-500 text-sm pr-2" />
              <button
                type="submit"
                className="w-8/11 h-12 text-center bg-[#436E8E] text-black py-2 rounded max-xl:w-10/10">تایید و ثبت نام</button>
            </Form>
          )}
        </Formik>


      </div>

      </div>

    </div>
  );
};

export { Registerlvl2 };