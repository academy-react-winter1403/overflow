import { Field, Formik } from "formik";
import React from "react";
import { Form } from "react-router"; // Verify correct import
import { PostComment } from "../../core/services/api/GetCourses/Comment";
import { getItem } from "../../core/services/common/storage.services";

const CommentSection = ({ CourseId, data }) => {
  // console.log("Course ID:", CourseId);
  // // console.log("Courseeeeeeeeeeeeeeeeeeeeeeeeeeeeee data:", data);

  // const handleSubmit = async (values, { resetForm }) => {
  //   const token = getItem("token");
  //   console.log("line 13", values);
  //   if (!token) {
  //     alert("لطفا وارد شوید تا بتوانید نظر ارسال کنید."); // Alert if token is missing
  //     return;
  //   }

  //   // Prepare data for API call
  //   const DataForSend = {
  //     CourseId: CourseId, // Pass course ID
  //     Title: values.title, // Ensure no extra spaces
  //     Describe: values.Describe, // Ensure no extra spaces
  //   };

  //   console.log("Data for API:", DataForSend);

  //   try {
  //     const response = await PostComment(DataForSend);

  //     if (response && response.success) {
  //       // Check if the response indicates success
  //       alert(response.message || "نظر شما با موفقیت ارسال شد!");
  //       resetForm(); // Clear the form fields after successful submission
  //     } else {
  //       alert(response.errors || "ارسال نظر ناموفق بود. لطفا مجدد تلاش کنید.");
  //     }
  //   } catch (error) {
  //     alert("مشکلی در ارسال نظر پیش آمد. لطفا دوباره تلاش کنید.");
  //     console.error("Submission error:", error);
  //   }
  // };

  return (
    <div>gelooo</div>
    // <div className="flex items-end flex-col w-7/11 h-88 bg-white rounded-3xl pr-10 overflow-hidden">
    //   <h5 className="mt-5 mb-5 text-3xl font-bold text-deep-blue">نظرات</h5>
    //   <Formik
    //     initialValues={{ Describe: "", title: "" }}
    //     onSubmit={handleSubmit}
    //   >
    //     {({ handleSubmit }) => (
    //       <Form onSubmit={handleSubmit}>
    //         <div className="flex flex-col gap-4 w-10/10 ">
    //           <Field
    //             type="text"
    //             name="title"
    //             className="w-10/10 h-12 border-2 rounded-2xl p-2 text-right"
    //             placeholder="موضوع"
    //           />
    //           <Field
    //             as="textarea"
    //             name="Describe"
    //             className="w-full h-20 border-2 rounded-2xl p-2 text-right"
    //             placeholder="نظر خود را بنویسید..."
    //           />
    //         </div>
    //         <button
    //           type="submit"
    //           className="ml-auto mt-5 border-2 rounded-2xl bg-deep-blue px-6 py-2 text-amber-50 font-bold"
    //         >
    //           ارسال نظر
    //         </button>
    //       </Form>
    //     )}
    //   </Formik>
    // </div>
  );
};

export { CommentSection };
