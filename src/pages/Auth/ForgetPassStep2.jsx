import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Setnewpass } from "../../core/services/api/forgetpassworld/setnewpassword";
import signin from "../../assets/register/Image 6.png";
import academylogo from "../../assets/register/ac-Logo.png";
import { getItem } from "../../core/services/common/storage.services";
import { Link, Navigate, useParams } from "react-router";

const Resetpasswordlevel2 = () => {
  const { code } = useParams();

  const validationSchema = Yup.object({
    newpassword: Yup.string().required("وارد کردن پسورد الزامی است"),
  });

  const handleSubmit = async (values) => {
    try {
      const resetdata = {
        newPassword: values.newpassword,
        userId: getItem("id"),
        resetValue: code,
      };

      console.log(resetdata);

      const response = await Setnewpass(resetdata);

      if (response) {
        alert("رمز جدید با موفقیت ثبت شد");
        Navigate("/login");
      } else {
        console.error("ثبت رمز ناموفق");
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
        <div className="mt-15  h-138 w-4/10 max-xl:hidden ">
          <img className="h-120 w-8/10" src={signin} />
        </div>

        <div className="mt-15 h-138 w-4/10 pt-25 max-xl:w-full max-xl:pr-10 ">
          <div className="flex flex-row-reverse justify-start gap-10 pr-22 max-sm:pr-0 max-xl:pr-0">
            <img src={academylogo} alt="logo" className="" />

            <div className="mt-3 text-4xl max-2xl:text-2xl"> آکادمی سپهر</div>
          </div>

          <div className="pr-22 text-right  max-xl:pr-0">
            <div className="mt-[20px] ml-[330px] text-[30px] max-2xl:ml-[200px]"> بازیابی</div>
          </div>

          <Formik
            initialValues={{ newpassword: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="mx-auto mt-10 flex h-auto w-10/10 flex-col items-end gap-5 pr-22 max-sm:pr-0 max-xl:pr-0  max-sm:w-full">
                <Field
                  type="text"
                  name="newpassword"
                  placeholder="پسورد جدید"
                  className="h-12 w-8/11 rounded-[5px] border-none bg-gray-200 pr-3 text-end outline-none max-xl:w-9/10 max-lg:w-7/10  max-sm:w-9/10 dark:text-blacks"
                />
                <ErrorMessage
                  name="newpassword"
                  component="div"
                  className="pr-4 text-end text-sm text-red-500"
                />

                <button
                  type="submit"
                  className="h-12 w-8/11 rounded bg-[#436E8E] py-2 text-center text-black max-xl:w-9/10 max-lg:w-7/10 max-sm:w-9/10"
                >
                  ثبت رمز جدید
                </button>
              </Form>
            )}
          </Formik>

          <div className="flex flex-row pl-35 max-sm:pl-10">
            <Link to="/rest1">
              <p className="mt-5 w-40 border-b-2 border-blue-500 font-bold text-blue-500">
                {" "}
                بازگشت به صفحه قبلی{" "}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Resetpasswordlevel2 };
