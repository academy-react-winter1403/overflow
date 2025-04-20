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
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Post a Comment for a Course</h2>
      <Formik
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
          <Form className="space-y-4">
            <div>
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
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <Field
                type="text"
                id="title"
                name="title"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label htmlFor="describe" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <Field
                as="textarea"
                id="describe"
                name="describe"
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="describe"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-black font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Submit Comment
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { CommentSection };