import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { SendVerifyMessage } from "../../core/services/api/forgetpassworld/restpassworld";
import signin from '../../assets/register/Image 6.png';
import academylogo from '../../assets/register/ac-Logo.png';
import { setItem } from "../../core/services/common/storage.services";
import { Link } from "react-router";


const Resetpasswordlevel1 = () => {


  const validationSchema = Yup.object({
    email: Yup.string().email("ایمیل معتبر نیست").required("وارد کردن ایمیل الزامی است"),
  });

  const handleSubmit = async (values) => {
    try {
      const sendData = {
        email: values.email,
        baseUrl: "http://localhost:5173/rest2"
      };
      console.log(sendData);

      const response = await SendVerifyMessage(sendData);

      if (response) {
        alert("کد با موفقیت ارسال شد");
        setItem("id", response.id);
        console.log(response.id); 
      } else {
        console.error("ارسال ناموفق");
      }
    } catch (error) {
      console.error("API Response Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex flex-wrap w-8/10 h-170 bg-white rounded-[30px] ml-50 mt-10 font-iransans dark:bg-gray-500">

      <div className="w-10/10 flex-wrap flex justify-center gap-20">
      
        <div className="w-4/10 h-138 mt-15 ml-10">
          <img className="h-120 w-8/10" src={signin} />
        </div>

        <div className="w-4/10 h-138 mt-15  pt-25">

          <div className="flex flex-row-reverse gap-5 pr-20">
            <img
              src={academylogo}
              alt="logo"
              className=""
            />
            
            <div className="text-4xl mt-3 "> آکادمی سپهر</div>
            
          </div>

          <div className=" text-right pr-22 ">
            <div className="text-[30px] mt-[20px] ml-[330px]"> بازیابی</div>
          </div>

          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="flex flex-col items-end mt-10 gap-5 pr-22 mx-auto w-10/10 h-auto] ">
                <Field
                  type="email"
                  name="email"
                  placeholder="ایمیل را وارد کنید"
                  className="w-8/11 h-12 bg-gray-200 outline-none border-none rounded-[5px] text-end pr-3 dark:text-black"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm text-end pr-4" />

                <button
                  type="submit"
                  className="w-8/11 h-12 text-center bg-[#436E8E] text-white py-2 rounded font-bold"
                >
                  ارسال کد
                </button>
              </Form>
            )}
          </Formik>
            <div className=" flex flex-row pl-35 ">
            <Link to='/login'>
              <p className="text-blue-500 border-b-2 border-blue-500 w-35 mt-5 font-bold">  بازگشت به صفحه ورود  </p>
            </Link>
            </div>
        </div>

      </div>
    </div>
  );
};

export { Resetpasswordlevel1 };
