import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { VerifyMessage } from "../../core/services/api/Register/RegisterPages.js";
import { Link, useNavigate } from "react-router-dom"; 
import signin from '../../assets/register/Image 6.png';
import academylogo from '../../assets/register/ac-Logo.png';
import * as Yup from "yup";

const Registerlvl2 = () => {
  
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
  verifyCode: Yup.string()
    .matches(/^\d{6}$/, "کد تایید باید شامل ۶ رقم باشد")
      .required("لطفا کد تایید را وارد کنید"),
  });

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
    <div className=" max-sm:scale-90 font-kalameh mt-10 ml-50 flex h-170 w-8/10 flex-row rounded-[30px] bg-white transition-all duration-300 max-2xl:w-7/10 max-xl:m-auto max-xl:w-6/10 max-lg:mt-20 max-sm:w-full dark:bg-gray-500">

      <div className="w-10/10 flex-row flex justify-center  transition-all duration-300">

      <div className="w-4/10 h-138 mt-15 ml-10 pl-10 max-xl:hidden">
        <img className="h-120 w-8/10" src={signin}/>
      </div>
      
      <div className="w-5/10 h-138 mt-25 gap-5 pr-10 flex flex-col max-xl:justify-center max-xl:w-9/10 transition-all duration-300  max-sm:w-full max-sm:pr-0">

        <div className="flex flex-row-reverse w-10/10 justify-start pr-22 gap-5 max-sm:pr-12 ">
          <img
            src={academylogo}
            alt="logo"
            className=""
          />
          
        <div className="text-4xl max-md:text-2xl  pt-3"> آکادمی سپهر</div>
        </div>


        <div className="flex flex-col items-end pr-22 gap-5 max-sm:pr-12">

          <div className=" text-4xl"> ثبت نام</div>
          <div className="text-2xl font-iransans mt-5">کد ارسال شده را وارد کنید</div>

        </div>

        <Formik
          initialValues={{ verifyCode: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {() => (

            <Form className="flex flex-col items-end  gap-5 pr-22 mx-auto w-10/10 h-auto font-kalameh max-sm:pr-10 max-sm:w-full">
              <Field
                type="text"
                name="verifyCode"
                placeholder="کد تایید"
                className="w-6/11 h-12 pr-3 bg-gray-200 outline-none border-none rounded-[5px] text-end max-xl:w-9/10 dark:text-black max-sm:w-9/10"
              />
              <ErrorMessage name="verifyCode" component="div" className="text-red-500 text-sm pr-2" />
              <button
                type="submit"
                className="w-6/11 h-12 text-center bg-[#436E8E] font-bold text-white py-2 rounded max-xl:w-9/10 max-sm:w-9/10">تایید و ثبت نام</button>
            </Form>
            
          )}
        </Formik>
       
        <div className=" flex flex-row pl-76 max-sm:pl-10">
          <Link to='/Register-1'>
            <p className="text-blue-500 border-b-2 border-blue-500 w-30 ">  بازگشت به صفحه اول </p>
          </Link>
        </div>
      </div>

      </div>

    </div>
  );
};

export { Registerlvl2 };