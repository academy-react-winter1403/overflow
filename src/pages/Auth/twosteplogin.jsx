import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Twostep } from "../../core/services/api/login/login acrion";
import { setItem, getItem } from "../../core/services/common/storage.services";
import signin from "../../assets/register/Image 6.png";
import academylogo from "../../assets/register/ac-Logo.png";
import { handletoken } from "../../redux/token";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";

const Loginlevel2 = () => {
  const email = getItem("email");
  const pass = getItem("password");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    verify: Yup.string().required("کد تایید الزامی است"),
  });

  const handleSubmit = async (values) => {
    try {
      const loginDataForSend = {
        phoneOrGmail: email,
        password: pass,
        rememberMe: true,
      };
      const verifycode = values.verify;

      console.log("Sending to API:", loginDataForSend, verifycode);

      const response = await Twostep(loginDataForSend, verifycode);

      if (response) {
        alert("ورود موفقیت‌آمیز بود");
        setItem("token", response.token);
        dispatch(handletoken(response.token));
        console.log(response.token);
        navigate("/");
      } else {
        console.error("Failed");
      }
    } catch (error) {
      console.error(
        "API Response Error:",
        error.response?.data || error.message,
      );
    }
  };

  return (
    <div className="font-kalameh mt-10 ml-50 flex h-170 w-8/10 flex-row rounded-[30px] bg-white transition-all duration-300 max-2xl:w-7/10 max-xl:m-auto max-xl:w-6/10 max-lg:mt-20 max-sm:w-full max-sm:scale-90 dark:bg-gray-500">
      <div className="flex w-10/10 flex-row justify-center gap-20 transition-all duration-300">
        <div className="mt-15 ml-10 h-138 w-4/10 max-xl:hidden">
          <img className="h-120 w-8/10" src={signin} />
        </div>

        <div className="mt-25 flex h-138 w-4/10 flex-col gap-5 transition-all duration-300 max-xl:w-9/10 max-xl:justify-center max-lg:w-full">
          <div className="flex flex-row-reverse justify-start gap-10 pr-22 max-sm:pr-12">
            <div className="">
              <img src={academylogo} alt="logo" className="" />
            </div>

            <div className="mt-3 text-right text-4xl">آکادمی سپهر</div>
          </div>

          <div className=" flex flex-col items-end gap-3 pt-5 pr-22 max-sm:pr-12">
            <div className="text-2xl">کد ارسال شد</div>
            <div className="text-2xl">
              رمز خود را فراموش کردید؟
              <a href="/rest1" className="text-[20px] font-bold text-blue-500">
                {" "}
                بازیابی
              </a>
            </div>
          </div>

          <Formik
            initialValues={{ verify: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="mx-auto mt-10 flex h-auto w-10/10 flex-col items-end gap-5 pr-22 max-sm:pr-10 ">
                <Field
                  type="text"
                  name="verify"
                  placeholder="کد ارسال شده را وارد کنید"
                  className="h-12 w-8/11 rounded-[5px] border-none bg-gray-200 pr-3 text-end outline-none max-xl:w-9/10 max-lg:w-7/10  max-sm:w-9/10 dark:text-black"
                />
                <ErrorMessage
                  name="verify"
                  component="div"
                  className="pr-2 text-sm text-red-500"
                />

                <button
                  type="submit"
                  className="h-12 w-8/11 rounded bg-[#436E8E] py-2 text-center text-white font-bold max-xl:w-9/10 max-lg:w-7/10 max-sm:w-9/10"
                >
                  تایید و ورود
                </button>
              </Form>
            )}
          </Formik>
          <div className="flex flex-row pl-35 max-sm:pl-10">
            <Link to="/Register-1">
              <p className="mt-5 w-30 border-b-2 border-blue-500 text-blue-500">
                {" "}
                بازگشت به صفحه اول{" "}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Loginlevel2 };
