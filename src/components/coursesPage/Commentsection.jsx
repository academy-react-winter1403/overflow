import { Field, Formik } from 'formik';
import React from 'react';
import { Form } from 'react-router';
import { PostComment } from '../../core/services/api/GetCourses/Comment';



const CommentSection = () => {

  const handleSubmit = async (values, { resetForm }) => {
    const response = await PostComment(values); 

    if (response) {
      alert('نظر شما با موفقیت ارسال شد!'); 

      resetForm(); 

    } else {

      alert('ارسال نظر ناموفق بود. لطفا مجدد تلاش کنید.');
    }
  };

  return (
    <div className="flex items-end flex-col w-9/10 h-[350px] bg-white rounded-2xl pr-10">
      <h5 className="mt-5  mb-5 text-3xl font-bold text-sky-800">
        نظرات
      </h5>
      <Formik
        initialValues={{ feedback: '' }}
        onSubmit={handleSubmit} 
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="flex items-end w-10/10 h-13/10 mr-50">
              <Field
                as="textarea"
                name="feedback"
                className="w-10/10 h-full border-2 rounded-2xl text-right "
                placeholder="نظر خود را بنویسید..."
              />
            </div>
            <button
              type="submit"
              className="ml-105 mt-5 border-2 rounded-2xl bg-sky-800 w-[147px] h-[52px] text-amber-50 leading-11"
            >
              ارسال نظر
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { CommentSection };