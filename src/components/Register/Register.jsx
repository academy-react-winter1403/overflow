import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SendVerifyMessage } from "../../core/services/api/Register/RegisterPages.js";
import { setItem } from "../../core/services/common/storage.services";
import { useNavigate } from "react-router-dom";
import signin from "../../assets/register/Image 6.png";
import academylogo from "../../assets/register/ac-Logo.png";

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
    <div className="max-sm:scale-90 font-kalameh mt-10 ml-50 flex h-170 w-8/10 flex-row rounded-[30px] bg-white transition-all duration-300 max-2xl:w-7/10 max-xl:m-auto max-xl:w-6/10 max-lg:mt-20 max-sm:w-full dark:bg-gray-500">
      <div className="flex w-10/10 flex-row justify-center gap-20 transition-all duration-300">
        <div className="mt-15 ml-10 h-138 w-4/10 max-xl:hidden">
          <img className="h-120 w-8/10" src={signin} />
        </div>

        <div className="mt-25 flex h-138 w-4/10 flex-col gap-5 transition-all duration-300 max-xl:w-9/10 max-xl:justify-center max-lg:w-full">
          <div className="flex flex-row-reverse justify-start gap-10 pr-22 max-sm:pr-12">
            <div className="">
              <img src={academylogo} alt="logo" />
            </div>

            <div className="mt-3 text-4xl max-md:text-2xl"> آکادمی سپهر</div>
          </div>

          <div className="flex flex-col items-end justify-start gap-5 pr-22 max-sm:pr-12">
            <div className="text-4xl"> ثبت نام</div>
          </div>

          <div className="flex w-10/10 flex-row-reverse gap-2 pr-22 max-sm:pr-12">
            <div className="text-2xl">حساب کاربری دارید؟ </div>
            <a
              href="/login"
              className="mt-1 text-[18px] font-bold text-blue-500"
            >
              {" "}
              وارد شوید
            </a>
          </div>

          <Formik
            initialValues={{ phone: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="mx-auto mt-10 flex h-auto w-10/10 flex-col items-end gap-5 pr-22 max-sm:pr-10 ">
                <Field
                  type="text"
                  name="phone"
                  placeholder="شماره تماس"
                  className="h-12 w-8/11 rounded-[5px] border-none bg-gray-200 pr-3 text-end outline-none max-xl:w-9/10 max-lg:w-7/10  max-sm:w-9/10 dark:text-black"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="pr-2 text-sm text-red-500"
                />
                <button
                  type="submit"
                  className="h-12 w-8/11 rounded bg-[#436E8E] py-2 text-center text-black max-xl:w-9/10 max-lg:w-7/10 max-sm:w-9/10"
                >
                  ادامه
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export { Register };
