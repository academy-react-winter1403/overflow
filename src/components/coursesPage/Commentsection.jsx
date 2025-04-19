import { Field, Formik } from 'formik';
import React from 'react';
import { Form } from 'react-router';
import { PostComment } from '../../core/services/api/GetCourses/Comment';
import { getItem } from '../../core/services/common/storage.services';



const CommentSection = ({CourseId}) => {
  console.log("kkk ",CourseId);
  
  const handleSubmit = async (values, { resetForm }) => {
    const gettoken = getItem("token");
    console.log(gettoken);

    const DataForSend = {
      title: values.title,
      CourseId: CourseId,
      Describe: values.Describe,
    };
    console.log(DataForSend)
    const response = await PostComment(DataForSend); 

    if (response) {
      alert('نظر شما با موفقیت ارسال شد!'); 

      resetForm(); 

    } else {

      alert('ارسال نظر ناموفق بود. لطفا مجدد تلاش کنید.');
    }

  };

  return (
    <div className="flex items-end flex-col w-7/11 h-88 bg-white rounded-3xl pr-10  overflow-hidden border-2">
      <h5 className="mt-5  mb-5 text-3xl font-bold text-deep-blue">
        نظرات
      </h5>
      <Formik
        initialValues={{ Describe: '' , title:'' }}
        onSubmit={handleSubmit} 
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} >
            <div className="flex flex-row items-end w-10/10 h-13/10 mr-50 ">
              <Field
                type="text"
                name="title"
                className="w-10/10 h-full border-2 rounded-2xl text-right "
                placeholder="موضوع"
              /> 
              <Field
                type="text"
                name="Describe"
                className="w-10/10 h-full border-2 rounded-2xl text-right "
                placeholder="نظر خود را بنویسید..."
              />
            </div>
            <button
              type="submit"
              className="ml-105 mt-5 border-2 rounded-2xl bg-deep-blue w-[147px] h-[52px] text-amber-50 leading-11"
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