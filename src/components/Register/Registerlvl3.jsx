import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { setItem } from "../../core/services/common/storage.services";
import { Register } from "../../core/services/api/Register/RegisterPages.js"; 
import signin from '../../assets/register/Image 6.png';
import academylogo from '../../assets/register/ac-Logo.png';
import { Link, useNavigate } from "react-router";

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

  const navigate = useNavigate();
  
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
        navigate('/login');
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
    
    <div className="flex flex-row  w-8/10 h-170 bg-white rounded-[30px] ml-50 mt-10 font-iransans max-2xl:w-7/10 max-xl:w-6/10 max-xl:m-auto transition-all duration-300 dark:bg-gray-800 max-lg:mt-10 max-sm:w-full max-sm:scale-90">

      <div className=" w-10/10 flex-row flex justify-center gap-20 transition-all duration-300">

        <div className="w-4/10 h-138 mt-15 ml-10  max-xl:hidden">
          <img className="h-120 w-8/10 " src={signin}  />
        </div>

        <div className="w-4/10 h-138 mt-25  gap-5 flex flex-col max-xl:justify-center max-xl:w-9/10 transition-all duration-300 ">

          <div className="w-10/10 flex flex-row flex-wrap gap-2 justify-end pr-20 max-sm:pr-5 ">

            <p className="w-5/10 h-full text-right text-4xl font-iransans pt-5 pr-3 max-2xl:text-2xl"> آکادمی سپهر</p>
            <img
            src={academylogo}
            alt="logo"
            className="w-2/10 h-full"
            />
        </div>

        <div className="flex flex-row justify-end  w-10/10 font-iransans ">
          <p className=" w-5/10 text-4xl text-right  mr-22 max-2xl:text-2xl max-sm:mr-10" > ثبت نام</p>
        </div>

        <Formik
          initialValues={{ phone: "", gmail: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className=" flex flex-col items-end gap-5 pr-22 mx-auto w-10/10 h-auto dark:text-black max-sm:pr-0 ">
              <Field
                type="text"
                name="phone"
                placeholder="شماره تماس"
                className="w-8/11 h-12 bg-gray-200 outline-none border-none rounded-[5px] text-end max-xl:w-10/10 pr-3 " 
              />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm pr-2" />

              <Field
                type="text"
                name="gmail"
                placeholder="ایمیل"
                className="w-8/11 h-12 bg-gray-200 outline-none border-none rounded-[5px] text-end max-xl:w-10/10 pr-3"
              />
              <ErrorMessage name="gmail" component="div" className="text-red-500 text-sm pr-2" />

              <Field
                type="password"
                name="password"
                placeholder="رمز عبور"
                className="w-8/11 h-12 bg-gray-200 outline-none border-none rounded-[5px] text-end max-xl:w-10/10 pr-3"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm pr-2" />

              <button
                type="submit"
                className="w-8/11 h-12 outline-none border-none rounded-[5px] font-bold text-white text-center bg-sky-800 max-xl:w-10/10">ادامه</button>
            </Form>
          )}
        </Formik>
          <div className=" flex flex-row pl-35 max-sm:pl-0 ">
            <Link to='/Register-1'>
              <p className="text-blue-500 border-b-2 border-blue-500 w-30">  بازگشت به صفحه اول </p>
            </Link>
          </div>
        </div>
        </div>

    </div>
  );
};

export { Registerlvl3 };