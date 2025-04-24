import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SendVerifyMessage } from "../../core/services/api/Register/RegisterPages.js";
import { setItem } from "../../core/services/common/storage.services";
import { useNavigate } from "react-router-dom";
import signin from '../../assets/register/Image 6.png';
import academylogo from '../../assets/register/ac-Logo.png';

const validationSchema = Yup.object({
  phone: Yup.string()
    .matches(/^\d{10,11}$/, "شماره تماس معتبر وارد کنید")
    .required("شماره تماس ضروری است"),
});

const Register = () => {
  const navigate = useNavigate(); 

  const handleSubmit = async ({ phone }) => {
    try {
      const payload = { phoneNumber: phone };

      const response = await SendVerifyMessage(payload);
      console.log("Submitting phone number:", payload);

      if (response) {
        console.log("Phone number successfully sent:", response);
        setItem("userPhone", phone);
        console.log("Phone number saved to local storage:", phone);

        navigate("/Register-2"); 
      } else {
        console.log("Failed to send phone number.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex flex-row  w-8/10 h-170 bg-white rounded-[30px] ml-50 mt-10 font-kalameh max-2xl:w-7/10 max-xl:w-6/10 max-xl:m-auto transition-all duration-300">

    <div className=" w-10/10 flex-row flex justify-center gap-20 transition-all duration-300">
    
    <div className="w-4/10 h-138 mt-15 ml-10  max-xl:w-0">
        <img className="h-120 w-8/10" src={signin} />
        
      </div>

      <div className="w-4/10 h-138 mt-25  gap-5 flex flex-col max-xl:justify-center max-xl:w-9/10 transition-all duration-300">

        <div className=" flex flex-row-reverse justify-start pr-22 gap-10 ">
          
        <div className="">
          <img src={academylogo} alt="logo"/>
        </div>

        <div className="text-4xl max-md:text-2xl"> آکادمی سپهر</div>
        
        </div>

        <div className="flex flex-col gap-5 justify-start items-end pr-22  ">

          <div className="text-4xl"> ثبت نام</div>
          </div>

          <div className=" flex flex-row-reverse w-10/10 pr-22">
              
            <div className="text-2xl">حساب کاربری دارید؟          </div>
            <a href="/login" className="mt-1"> وارد شوید.</a>



        </div>

        <Formik
          initialValues={{ phone: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (

            <Form className="flex flex-col items-end mt-10 gap-2.5 pr-22 mx-auto w-10/10 h-auto ">
              <Field
                type="text"
                name="phone"
                placeholder="شماره تماس"
                className="w-8/11 h-12 bg-gray-200 outline-none border-none rounded-[5px] text-end max-xl:w-10/10"
              />
              <ErrorMessage name="phone" component="div" className="error" />
              <button
                type="submit"
                className="w-8/11 h-12 text-center bg-[#436E8E] text-black py-2 rounded max-xl:w-10/10">ادامه</button>
            </Form>

          )}
        </Formik>
        <div className="text-[14px] mt-[20px] ml-[160px] text-start">قوانین و شرایط</div>
      </div>
    </div>

    </div>
  );
};

export { Register };