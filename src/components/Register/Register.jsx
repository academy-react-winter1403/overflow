import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SendVerifyMessage } from "../../core/services/api/(step1)sendverify";
import { setItem } from "../../core/services/common/storage.services";
import '../../app/App.css'
const validationSchema = Yup.object({
  phone: Yup.string()
    .matches(/^\d{10,11}$/, "شماره تماس معتبر وارد کنید")
    .required("شماره تماس ضروری است"),
});

const Register = () => {
  const handleSubmit = async ({ phone }) => {
    try {
      const payload = { phoneNumber: phone };

      const response = await SendVerifyMessage(payload);
      console.log("Submitting phone number:", payload);

      if (response) {
        console.log("Phone number successfully sent:", response);
      } else {
        console.log("Failed to send phone number.");
      }

      setItem("userPhone", phone);
      console.log("Phone number saved to local storage:", phone);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center w-[1136px] h-[679px] bg-white rounded-[30px]">
      <div className="w-[540px] h-[550px] mt-[60px]"></div>
      <div className="w-[540px] h-[550px] mt-[60px]">
        {/* Adding your logo */}
        <div className="flex justify-end">
          <img
            src="../../../picture/ac-Logo.png" 
            alt="logo"
            className="w-[83px] h-[63px] mt-[33px] mr-[13px]"
          />
        </div>
        <div className="text-center text-[40px] mt-[-77px]"> آکادمی سپهر</div>
        <div className="flex flex-wrap justify-center mt-2">
          <div className="text-[30px] mt-2 ml-5"> ثبت نام</div>
          <div className="absolute right-[250px] top-[233px] text-end text-[20px]">
          حساب کاربری دارید؟
          </div>
          <div className="absolute right-[418px] top-[237px] text-[15px]"> وارد شوید.</div>
        </div>
        <Formik
          initialValues={{ phone: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="flex flex-col mt-[60px] mx-auto w-[327px] gap-[10px]">
              <Field
                type="text"
                name="phone"
                placeholder="شماره تماس"
                className="w-[327px] h-[50px] bg-gray-200 outline-none border-none rounded-[5px] text-end pr-[10px]"
              />
              <ErrorMessage name="phone" component="div" className="error" />
              <button
                type="submit"
                className="w-[339px] text-center bg-[#436E8E] text-white py-2 rounded"
              >
                ادامه
              </button>
            </Form>
          )}
        </Formik>
        <div className="text-[14px] mt-[20px] text-start">
        قوانین و شرایط
        </div>
      </div>
    </div>
  );
};

export { Register };