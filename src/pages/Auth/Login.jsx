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
    <div className="flex flex-wrap w-8/10 h-170 bg-white rounded-[30px] ml-50 mt-10 dark:bg-gray-500">
      <div className="w-10/10 flex-wrap flex justify-center gap-20">
        <div className="w-4/10 h-138 mt-15 ml-10">
          <img className="h-120 w-8/10" src={signin} />
        </div>

        <div className="w-4/10 h-138 mt-15">
          <div className="flex justify-end pr-9">
            <img
              src={academylogo}
              alt="logo"
              className="w-[83px] h-[63px] mt-[33px] mr-[50px]"
            />
          </div>

          <div className="text-center text-[40px] mt-[-70px] mr-[-30px]">آکادمی سپهر</div>

          <div className="flex flex-wrap item-center mt-2 pl-20">
            <div className="text-[30px] mt-[20px] ml-[330px]">ورود</div>
            <div className="w-[300px] text-end text-[20px] mt-[10px] ml-[125px]">رمز خود را فراموش کردید؟
              <a href="/rest1" className=" text-[15px] w-[90px] mt-[-25px] ml-[40px]"> بازیابی</a>
            </div>
          </div>
          <Formik
            initialValues={{ user: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="flex flex-col items-end mt-10 gap-2.5 pr-22 mx-auto w-10/10 h-auto">

                <Field
                  type="text"
                  name="user"
                  placeholder="ایمیل یا شماره موبایل"
                  className="w-8/11 h-12 bg-gray-200 outline-none border-none rounded-[5px] text-end "
                />
                <ErrorMessage name="user" component="div" className="text-red-500 text-sm pr-2" />

                <Field
                  type="password"
                  name="password"
                  placeholder="پسورد"
                  className="w-8/11 h-12 bg-gray-200 outline-none border-none rounded-[5px] text-end"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm pr-2" />

                <button onClick={Sendloginrequest} type="submit" className="w-8/11 h-12 text-center bg-[#436E8E] text-black py-2 rounded">
                  تایید و ورود
                  <ToastContainer />
                </button>
                <Link className=" w-95 text-left"  to="/Register-1"><p className="font-bold pt-5 text-blue-500 border-b-2 w-20">ثبت نام کنید</p></Link>
              </Form>
            )}
          </Formik>
        </div>

      </div>
    </div>
  );
};

export { Loginlevel1 };
