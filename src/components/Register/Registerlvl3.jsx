import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { setItem } from "../../core/services/common/storage.services";
import '../../app/App.css';
import { Register } from "../../core/services/api/Register/RegisterPages.js"; 
import signin from '../../assets/register/Image 6.png';
import academylogo from '../../assets/register/ac-Logo.png';

const validationSchema = Yup.object({
  phone: Yup.string()
    .matches(/^\d{10,11}$/, "شماره تماس معتبر وارد کنید")
    .required("شماره تماس ضروری است"),
  gmail: Yup.string()
    .email("ایمیل معتبر وارد کنید")
    .required("ایمیل ضروری است"),
  password: Yup.string()
    .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد")
    .required("رمز عبور ضروری است"),
});

const Registerlvl3 = () => {
  
  const handleSubmit = async ({ phone, gmail, password }) => {
    try {
      
      const payload = {
        password: password,   
        gmail: gmail,         
        phoneNumber: phone,   
      };
  
     
      console.log("info format:", JSON.stringify(payload, null, 2));
  
     
      const response = await Register(payload);
  
      
      if (response) {
        console.log("Payload successfully sent:", response);
      } else {
        console.log("Failed to send payload.");
      }
  
      
      setItem("userPhone", phone);
      setItem("userGmail", gmail);
      setItem("userPassword", password);
  
      console.log("Data saved to local storage:", { phone, gmail, password });
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center w-[1136px] h-[679px] bg-white rounded-[30px] ">
    <div className="w-[540px] h-[550px] mt-[60px]">
      <img src={signin}  />
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
      </div>

        <Formik
          initialValues={{ phone: "", gmail: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className=" flex flex-col justify-center mt-[15px] mx-auto w-[350px] gap-[10px] ml-[160px]">
              <Field
                type="text"
                name="phone"
                placeholder="شماره تماس"
                className="w-[327px] h-[50px] bg-gray-200 outline-none border-none rounded-[5px] text-end pr-[10px]"
              />
              <ErrorMessage name="phone" component="div" className="error" />

              <Field
                type="text"
                name="gmail"
                placeholder="ایمیل"
                className="w-[327px] h-[50px] bg-gray-200 outline-none border-none rounded-[5px] text-end pr-[10px]"
              />
              <ErrorMessage name="gmail" component="div" className="error" />

              <Field
                type="password"
                name="password"
                placeholder="رمز عبور"
                className="w-[327px] h-[50px] bg-gray-200 outline-none border-none rounded-[5px] text-end pr-[10px]"
              />
              <ErrorMessage name="password" component="div" className="error" />

              <button
                type="submit"
                className="w-[327px] text-center bg-[#436E8E] text-black py-2 rounded">ادامه</button>
            </Form>
          )}
        </Formik>
        <div className="text-[14px] mt-[20px] ml-[160px] text-start">قوانین و شرایط</div>
      </div>
    </div>
  );
};

export { Registerlvl3 };