import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import http from "../../core/services/interceptor"; // Assuming you are using an interceptor for http requests

function SendNewComment({ id }) {
  const [focusedCommentId, setFocusedCommentId] = useState(null); // Track focused comment by ID
const CourseId = id; // Assuming id is the course ID
  const handleFocus = (id) => {
    setFocusedCommentId(id); // Set the focused comment ID
  };

  const handleBlur = () => {
    setFocusedCommentId(null); // Reset focused comment when blur
  };

  const handleSubmit = async (values) => {
    const { courseId, title, describe } = values;

    const formData = new FormData();
    formData.append("CourseId", id);
    formData.append("Title", title);
    formData.append("Describe", describe);

    try {
      const responseData = await http.post(
        "/Course/AddCommentCourse",
        formData,
      );

      if (responseData.success) {
        alert("Comment posted successfully!");
      } else {
        alert("Failed to post comment");
      }

      return responseData;
    } catch (error) {
      alert(
        "Error: " +
          (error.response ? error.response.message : error.message),
      );
    }
  };

  return (
    <div
      className={`dark:bg-deep-blue/75 mt-10 h-auto max-w-2/3 min-w-1/2 rounded-xl bg-white p-2 dark:text-amber-50 ${
        focusedCommentId === id ? "w-full" : "w-1/2"
      } transition-all duration-300`}
    >
      <Formik
        initialValues={{
          courseId: CourseId || "", // Set the courseId to the prop value
          title: "",
          describe: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.title) errors.title = "Title is required";
          if (!values.describe) errors.describe = "Description is required";
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="rounded-lg bg-gray-50">
            {/* Title Field */}
            <div className="mb-4">
              <Field
                onFocus={() => handleFocus(id)} // On focus, set focused comment
                onBlur={handleBlur}
                type="text"
                id="title"
                name="title"
                placeholder="موضوع"
                style={{ outline: "none", resize: "none" }} // Add this inline style to remove the focus outline
                className={`bg-deep-blue/10 w-full rounded-lg px-4 pl-2 text-right ${
                  focusedCommentId === id ? "h-10 w-full" : "h-10 w-1/2"
                } transition-all duration-300`}
              />
              <ErrorMessage
                name="title"
                component="div"
                className="mt-1 text-right text-sm text-red-500"
              />
            </div>

            {/* Description Field */}
            <div className="mb-4">
              <Field
                onFocus={() => handleFocus(id)} // On focus, set focused comment
                onBlur={handleBlur}
                as="textarea"
                id="describe"
                name="describe"
                rows="4"
                placeholder="نظر خود را بنویسید"
                style={{ outline: "none", resize: "none" }} // Add this inline style to remove the focus outline
                className={`w-full bg-gray-50 px-8 pl-2 text-right ${
                  focusedCommentId === id ? "h-40 w-full" : "h-10 w-1/2"
                } transition-all duration-300`}
              />
              <ErrorMessage
                name="describe"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-deep-blue focus:ring-opacity-50 w-2/10 rounded-md p-2 font-semibold text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              disabled={isSubmitting}
            >
              ارسال نظر
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SendNewComment;
