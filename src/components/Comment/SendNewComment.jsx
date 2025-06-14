import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { PostComment } from "../../core/services/api/GetCourses/Comment";

function SendNewComment({ id, onSubmit }) {
  const [focusedCommentId, setFocusedCommentId] = useState(null); 
  const CourseId = id; 
  const handleFocus = (id) => {
    setFocusedCommentId(id); 
  };

  const handleBlur = () => {
    setFocusedCommentId(null); 
  };
  const handleSubmit = (values) => {
    console.log("thsi is value of iuse post coommenr", values);

    onSubmit(values);
  };

  return (
    <div
      className={`dark:bg-deep-blue/75 mt-10 h-auto max-w-2/3 min-w-1/2 rounded-xl bg-white p-2 max-lg:w-10/10 dark:text-amber-50 ${
        focusedCommentId === id ? "w-full" : "w-1/2"
      } transition-all duration-300`}
    >
      <Formik
        initialValues={{
          courseId: CourseId || "", 
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
            <div className="mb-4 dark:bg-gray-800">
              <Field
                onFocus={() => handleFocus(id)} 
                onBlur={handleBlur}
                type="text"
                id="title"
                name="title"
                placeholder="موضوع"
                style={{ outline: "none", resize: "none" }} 
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
                onFocus={() => handleFocus(id)} 
                onBlur={handleBlur}
                as="textarea"
                id="describe"
                name="describe"
                rows="4"
                placeholder="نظر خود را بنویسید"
                style={{ outline: "none", resize: "none" }} 
                className={`w-full bg-gray-50 px-8 pl-2 text-right dark:bg-gray-800 ${
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
