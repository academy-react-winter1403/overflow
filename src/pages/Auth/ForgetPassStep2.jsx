import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Setnewpass } from "../../core/services/api/forgetpassworld/setnewpassword";
import signin from '../../assets/register/Image 6.png';
import academylogo from '../../assets/register/ac-Logo.png';
import { getItem } from "../../core/services/common/storage.services";
import { useNavigate, useParams } from "react-router";


const Resetpasswordlevel2 = () => {
    const { code } = useParams(); // فقط code رو گرفتم
  
    const validationSchema = Yup.object({
      newpassword: Yup.string().required("وارد کردن پسورد الزامی است"),
    });
  
    const handleSubmit = async (values) => {
      try {
        const resetdata = {
          newPassword: values.newpassword,
          userId: getItem("id"),
          resetValue: code, // اینجا
        };
  
        console.log(resetdata);
  
        const response = await Setnewpass(resetdata);
  
        if (response) {
          alert("رمز جدید با موفقیت ثبت شد");
          navigate("/login");
        } else {
          console.error("ثبت رمز ناموفق");
        }
      } catch (error) {
        console.error("API Response Error:", error.response?.data || error.message);
      }
    };
  
    return (
      <div className="flex flex-wrap w-8/10 h-170 bg-white rounded-[30px] ml-50 mt-10">
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
              <div className="text-[30px] mt-[20px] ml-[330px]">بازیابی</div>
            </div>
  
            <Formik
              initialValues={{ newpassword: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="flex flex-col items-end mt-10 gap-2.5 pr-22 mx-auto w-10/10 h-auto]">
                  <Field
                    type="text"
                    name="newpassword"
                    placeholder="پسورد جدید"
                    className="w-8/11 h-12 bg-gray-200 outline-none border-none rounded-[5px] text-end"
                  />
                  <ErrorMessage name="newpassword" component="div" className="text-red-500 text-sm text-end pr-4" />
  
                  <button
                    type="submit"
                    className="w-8/11 h-12 text-center bg-[#436E8E] text-black py-2 rounded"
                  >
                    ثبت رمز جدید
                  </button>
                </Form>
              )}
            </Formik>
          </div>
  
          <div className="text-[14px] mt-[20px] ml-[160px] text-start">قوانین و شرایط</div>
        </div>
      </div>
    );
  };
export{Resetpasswordlevel2}  