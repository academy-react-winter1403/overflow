import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import http from "../../core/services/interceptor";  // Assuming you are using an interceptor for http requests

const CommentSection = ({ CourseId, data }) => {
  const handleSubmit = async (values) => {
    const { courseId, title, describe } = values;

    const formData = new FormData();
    formData.append('CourseId', courseId);
    formData.append('Title', title);
    formData.append('Describe', describe);

    // Log FormData entries
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      // Make the API request
      const responseData = await http.post("/Course/AddCommentCourse", formData);

      // Log the response data
      console.log(responseData);

      if (responseData.data.success) {
        alert('Comment posted successfully!');
      } else {
        alert('Failed to post comment');
      }

      return responseData.data;
    } catch (error) {
      // Handle error if the API request fails
      alert('Error: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <div className="w-7/11 p-4 bg-white shadow-md rounded-lg  flex flex-col justify-end transition-all duration-300 max-lg:w-10/10">
       <h5 className=" text-right text-3xl font-bold text-deep-blue mb-5">نظرات</h5>
      <Formik
      className=""
        initialValues={{
          courseId: CourseId || '',  // Set the courseId to the prop value
          title: '',
          describe: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.courseId) errors.courseId = 'Course ID is required';
          if (!values.title) errors.title = 'Title is required';
          if (!values.describe) errors.describe = 'Description is required';
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-4 flex flex-col justify-end ">
            {/* <div className="opacity-0 visited:hidden">
              <label htmlFor="courseId" className="block text-sm font-medium text-gray-700">
                Course ID
              </label>
              <Field
                type="text"
                id="courseId"
                name="courseId"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="courseId"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div> */}

            <div>
              <Field
                type="text"
                id="title"
                name="title"
                placeholder="موضوع"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-right"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                as="textarea"
                id="describe"
                name="describe"
                rows="4"
                placeholder="نظر خود را بنویسید"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-right"
              />
              <ErrorMessage
                name="describe"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-2/10 p-2 bg-deep-blue text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 "
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