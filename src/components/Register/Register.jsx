import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { SendVerifyMessage } from '../../core/services/api/sendverify';

const validationSchema = Yup.object({

  name: Yup.string().required('نام ضروری است'),

  phone: Yup.string()
    .matches(/^\d{10,11}$/, 'شماره تماس معتبر وارد کنید')
    .required('شماره تماس ضروری است'),

  password: Yup.string()
    .min(6, 'رمز عبور باید حداقل 6 کاراکتر باشد')
    .required('رمز عبور ضروری است'),
});

const Register = () => {
  const handleSubmit = async (values) => {
    try {

      const response = await SendVerifyMessage(values);
            
      console.log("Submitting data:", values); 

      if (response) {
        console.log("User successfully registered:", response);
      } else {
        console.log("Registration failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="Registerholder">
      <Formik
        initialValues={{ name: "", phone: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="inputholder">
            <Field type="text" name="name" placeholder="نام" />
            <ErrorMessage name="name" component="div" className="error" />

            <Field type="text" name="phone" placeholder="شماره تماس" />
            <ErrorMessage name="phone" component="div" className="error" />

            <Field type="password" name="password" placeholder="رمز عبور" />
            <ErrorMessage name="password" component="div" className="error" />

            <button type="submit" className="inputs">ادامه</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export { Register };