import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { VerifyMessage } from "../../core/services/api/(step2)verifymessage";

const Registerlvl2 = () => {
  const handleSubmit = async (values) => {
    try {
      let phoneNumber = localStorage.getItem("userPhone");

      try {
        phoneNumber = JSON.parse(phoneNumber);
      } catch {
        console.warn("phoneNumber is not in JSON format, converting to string.");
        phoneNumber = String(phoneNumber);
      }

      if (!phoneNumber) {
        console.error("Phone number not found or invalid in local storage.");
        return;
      }

      const payload = {
        phoneNumber: phoneNumber,
        verifyCode: values.verifyCode,
      };

      console.log("Payload being sent:", payload);

      const response = await VerifyMessage(payload);

      if (response) {
        alert("<<<Payload successfully sent>>>");
        console.log("Payload successfully sent:", response.data);
      } else {
        console.error("Failed to send payload.");
      }
    } catch (error) {
      console.error("API Response Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6">
        <img src="../picture/Image 6.png" alt="background" />
      </div>

      <div className="flex flex-col items-center space-y-4">
        <div className="mb-2">
          <img src="../picture/ac-Logo.png" alt="logo" />
        </div>
        <div className="text-xl font-semibold">آکادمی سپهر</div>

        <div className="text-center">
          <div className="text-lg font-bold">ثبت نام</div>
          <div className="text-gray-700 mt-2">کد ارسال شده را وارد کنید</div>
        </div>

        <Formik
          initialValues={{ verifyCode: "" }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="flex flex-col items-center space-y-4">
              <Field
                type="text"
                name="verifyCode"
                placeholder="کد تایید"
                className="w-80 h-12 border rounded bg-gray-200 text-center"
              />
              <ErrorMessage name="verifyCode" component="div" className="text-red-500 text-sm" />
              <button
                type="submit"
                className="w-80 h-12 bg-blue-600 text-white rounded text-lg"
              >
                تایید و ثبت نام
              </button>
            </Form>
          )}
        </Formik>

        <div className="mt-8 text-sm">
          <label>
            قوانین را مطالعه کرده و با شرایط موافقم{" "}
            <input type="checkbox" required />
          </label>
        </div>
      </div>
    </div>
  );
};

export { Registerlvl2 };