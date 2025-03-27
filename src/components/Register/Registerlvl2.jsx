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
    <div className="Registerholder">
      <div className="image">
        <img src="../picture/Image 6.png" alt="background" />
      </div>

      <div className="Registerinputs">
        <div className="academylogo">
          <img src="../picture/ac-Logo.png" alt="logo" />
        </div>
        <div className="academyname">آکادمی سپهر</div>

        <div className="singupholder">
          <div className="singup">ثبت نام</div>
          <div className="insertcode">کد ارسال شده را وارد کنید</div>
        </div>

        <Formik
          initialValues={{ verifyCode: "" }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="inputholder2">
              <Field
                type="text"
                name="verifyCode"
                placeholder="کد تایید"
                className="input-field"
              />
              <ErrorMessage name="verifyCode" component="div" className="error" />

              <button type="submit" className="inputs2">
                تایید و ثبت نام
              </button>
            </Form>
          )}
        </Formik>

        <div className="rules2">
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