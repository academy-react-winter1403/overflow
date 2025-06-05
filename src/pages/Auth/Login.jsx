import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Sendloginrequest } from "../../core/services/api/login/login acrion";
import { setItem } from "../../core/services/common/storage.services";
import signin from '../../assets/register/Image 6.png';
import academylogo from '../../assets/register/ac-Logo.png';
import { handletoken } from "../../redux/token";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Loginlevel1 = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    user: Yup.string().required("ایمیل یا شماره موبایل الزامی است"),
    password: Yup.string().required("پسورد الزامی است"),
  });

  const handleSubmit = async (values) => {
    try {
      const loginDataForSend = {
        phoneOrGmail: values.user,
        password: values.password, 
        rememberMe: true,
      };

    const response = await Sendloginrequest(loginDataForSend);

      if (response) {
        toast.success("ورود موفقیت‌آمیز بود");
        setItem("token", response.token);
        setTimeout(() => {
          navigate("/panel")
        }, 2000);
        dispatch(handletoken(response.token));
        if(response.message==="ارسال پیامک انجام شد."){
          setItem("email",loginDataForSend.phoneOrGmail)
          setItem("password",loginDataForSend.password)
          navigate("/twostep")
        }


        console.log(response.token)
      } else {
        console.error("Failed");
      }
    } catch (error) {
      console.error("API Response Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="max-sm:scale-90 font-kalameh mt-10 ml-50 flex h-170 w-8/10 flex-row rounded-[30px] bg-white transition-all duration-300 max-2xl:w-7/10 max-xl:m-auto max-xl:w-6/10 max-lg:mt-20 max-sm:w-full dark:bg-gray-500">
      <div className="w-10/10 flex-wrap flex justify-center gap-20">
        <div className="w-4/10 h-138 mt-15 ml-10 max-xl:hidden">
          <img className="h-120 w-8/10" src={signin} />
        </div>

        <div className="mt-25 flex h-138 w-4/10 flex-col gap-5 transition-all duration-300 max-xl:w-9/10 max-xl:justify-center max-lg:w-full ">

         <div className=" flex flex-col items-end pr-22 max-sm:pr-10">

           <div className="flex flex-row-reverse  gap-5">
            <img
              src={academylogo}
              alt="logo"
              className=""
            />
            
          <div className="text-right text-4xl mt-5">آکادمی سپهر</div>
          </div>

          <div className="flex flex-col  mt-5 gap-3  ">
            <div className="text-right  text-4xl ">ورود</div>
            <div className=" text-right text-2xl">رمز خود را فراموش کردید؟
              <a href="/rest1" className=" text-[20px] w-[90px] mt-[-25px] ml-[40px] text-blue-500 font-bold"> بازیابی</a>
            </div>
          </div>

         </div>
          <Formik
            initialValues={{ user: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="mx-auto mt-10 flex h-auto w-10/10 flex-col items-end gap-5 pr-22 max-sm:pr-10 ">

                <Field
                  type="text"
                  name="user"
                  placeholder="ایمیل یا شماره موبایل"
                  className="h-12 w-8/11 rounded-[5px] border-none bg-gray-200 pr-3 text-end outline-none max-xl:w-9/10 max-lg:w-7/10  max-sm:w-9/10 dark:text-black"
                />
                <ErrorMessage name="user" component="div" className="text-red-500 text-sm pr-2" />

                <Field
                  type="password"
                  name="password"
                  placeholder="پسورد"
                  className="h-12 w-8/11 rounded-[5px] border-none bg-gray-200 pr-3 text-end outline-none max-xl:w-9/10 max-lg:w-7/10  max-sm:w-9/10 dark:text-black"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm pr-2" />

                <button onClick={Sendloginrequest} type="submit" className="h-12 w-8/11 rounded bg-[#436E8E] py-2 text-center text-black max-xl:w-9/10 max-lg:w-7/10 max-sm:w-9/10">
                  تایید و ورود
                  <ToastContainer />
                </button>
                <Link className=" w-95 text-left"  to="/Register-1"><p className="font-bold pt-5 text-blue-500 border-b-2 w-20  max-sm:ml-18">ثبت نام کنید</p></Link>
              </Form>
            )}
          </Formik>
        </div>

      </div>
    </div>
  );
};

export { Loginlevel1 };
