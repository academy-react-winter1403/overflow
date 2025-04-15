import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SendVerifyMessage } from "../../core/services/api/Register/RegisterPages.js";
import { setItem } from "../../core/services/common/storage.services";
import { useNavigate } from "react-router-dom";
import '../../app/App.css';
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

        navigate("/step2"); 
      } else {
        console.log("Failed to send phone number.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex flex-wrap  w-8/10 h-170 bg-white rounded-[30px] ml-50 mt-10">

    <div className=" w-10/10 flex-wrap flex justify-center gap-20">
    <div className="w-4/10 h-138 mt-15 ml-10 ">
        <img className="h-120 w-8/10" src={signin} />
        
      </div>

      <div className="w-4/10 h-138 mt-15 ">

        <div className="flex justify-end  pr-9">
          <img
            src={academylogo}
            alt="logo"
            className="w-[83px] h-[63px] mt-[33px] mr-[50px]"
          />
        </div>

        <div className="text-center text-[40px] mt-[-70px] mr-[-30px] "> آکادمی سپهر</div>
        
        <div className="flex flex-wrap item-center mt-2 pl-20 ">

          <div className="text-[30px] mt-[20px] ml-[330px] "> ثبت نام</div>
          <div className="w-[300px] text-end text-[20px] mt-[10px] ml-[125px]">حساب کاربری دارید؟
          <a className=" text-[15px] w-[90px] mt-[-25px] ml-[40px]"> وارد شوید.</a>
          </div>

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
                className="w-8/11 h-12 bg-gray-200 outline-none border-none rounded-[5px] text-end "
              />
              <ErrorMessage name="phone" component="div" className="error" />
              <button
                type="submit"
                className="w-8/11 h-12 text-center bg-[#436E8E] text-black py-2 rounded">ادامه</button>
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