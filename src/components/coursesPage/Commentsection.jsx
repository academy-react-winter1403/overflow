import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import http from "../../core/services/interceptor"; // Assuming you are using an interceptor for http requests

const CommentSection = ({ CourseId, data }) => {
  const handleSubmit = async (values) => {
    const { courseId, title, describe } = values;

    const formData = new FormData();
    formData.append("CourseId", courseId);
    formData.append("Title", title);
    formData.append("Describe", describe);

    // Log FormData entries
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      // Make the API request
      const responseData = await http.post(
        "/Course/AddCommentCourse",
        formData,
      );

      // Log the response data
      console.log(responseData);

      if (responseData.data.success) {
        alert("Comment posted successfully!");
      } else {
        alert("Failed to post comment");
      }

      return responseData.data;
    } catch (error) {
      // Handle error if the API request fails
      alert(
        "Error: " +
          (error.response ? error.response.data.message : error.message),
      );
    }
  };

  return (
    <div className="flex w-7/11 flex-col justify-end rounded-lg bg-white p-4 shadow-md transition-all duration-300 max-lg:w-10/10">
      <h5 className="text-deep-blue mb-5 text-right text-3xl font-bold">
        نظرات
      </h5>
      <Formik
        className=""
        initialValues={{
          courseId: CourseId || "", // Set the courseId to the prop value
          title: "",
          describe: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.courseId) errors.courseId = "Course ID is required";
          if (!values.title) errors.title = "Title is required";
          if (!values.describe) errors.describe = "Description is required";
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="flex flex-col justify-end space-y-4">
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

            <div className="">
              <Field
                type="text"
                id="title"
                name="title"
                placeholder="موضوع"
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-right shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            <div>
              <Field
                as="textarea"
                id="describe"
                name="describe"
                rows="4"
                placeholder="نظر خود را بنویسید"
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-right shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="describe"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            <button
              type="submit"
              className="bg-deep-blue focus:ring-opacity-50 w-2/10 rounded-md p-2 font-semibold text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
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
