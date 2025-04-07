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
    <div className=" top-[980px] right-[-674px] w-[830px] h-[350px] bg-white rounded-2xl">
      <h5 className=" top-[30px] right-[100px] text-3xl font-bold text-sky-800">
        نظرات
      </h5>
      <Formik
        initialValues={{ feedback: '' }}
        onSubmit={handleSubmit} 
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className=" top-[90px] right-[100px] w-[630px] h-[170px]">
              <Field
                as="textarea"
                name="feedback"
                className="w-full h-full border-2 rounded-2xl text-right p-2"
                placeholder="نظر خود را بنویسید..."
              />
            </div>
            <button
              type="submit"
              className=" top-[280px] right-[100px] border-2 rounded-2xl bg-sky-800 w-[147px] h-[52px] text-amber-50 leading-11"
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