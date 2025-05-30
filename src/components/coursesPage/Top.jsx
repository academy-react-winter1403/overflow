// import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import productimg from "../../assets/Coursesimage/product-img.png";
import commentcount from "../../assets/Coursesimage/comment.png";
import likecount from "../../assets/Coursesimage/likecount.png";
import dislikecount from "../../assets/Coursesimage/dislikecount.png";
import eye from "../../assets/Coursesimage/eye.png";
import calender from "../../assets/Coursesimage/cal.png";
import SmartImage from "../Common/SmartImage";
import { Addreserve } from "../../core/services/api/GetCourses/Reserveapi";
import addtofave from'../../assets/Coursesimage/add-removebg-preview.png'
import { Addtofave } from "../../core/services/api/GetCourses/addtofave";
// import { Addreserve } from "../../core/services/api/GetCourses/reserveapi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const formatToPersianToman = (priceInRial,) => {
  const priceInToman = priceInRial / 1; 
  return new Intl.NumberFormat("fa-IR", {
    style: "decimal",
  }).format(priceInToman) + " تومان"; 
};


const Top = ({ data,id}) => {
  const courseData = data || {};

  const postreserve = async () => {

    try {

      const response = await Addreserve(id);

      console.log("Reserve Response:", response);

      if (response){
        toast.success("  این دوره برای شما رزور شد");
        Navigate(`/AllCourses/Courses/${id}`)
      }
      
    } catch (error) {
      console.error("Error reserving course:", error);
    }

  };  
  const addtofavorite = async () => {

    try {
      const response = await Addtofave(id);
      if (response){
        toast.success("   به علاقمندی ها اضافه شد    ");
        Navigate(`/AllCourses/Courses/${id}`)
      }
      console.log("Reserve Response:", response);
      
    } catch (error) {
      console.error("Error reserving course:", error);
    }
  };

  return (
    <div className="flex flex-row-reverse items-center bg-gray-800 rounded-2xl flex-wrap w-10/10 h-auto transition-all duration-300 max-lg:pt-5">
      <div className="flex flex-col items-end w-5/10 h-50 mr-10">
        <h2 className="text-amber-50 text-3xl">{courseData.title}</h2>
        <p className="text-amber-50 text-xs text-right w-10/10 h-8/10 mt-10">
          {courseData.miniDescribe}
        </p>
      </div>

      <div className="text-amber-50 shadow-2xl shadow-amber-50 rounded-2xl w-3/10  mt-10 mr-45 max-xl:mr-20">
        <SmartImage
          src={courseData.imageAddress || productimg}
          alt="Course Banner"
          className="rounded-2xl w-10/10 h-75 max-xl:h-50 max-lg:h-40 transition-all duration-300"
        />
      </div>

      <div className="flex items-center justify-between w-6/10 mr-10 mb-5 pl-45 max-lg:flex-row max-lg:gap-30 max-lg:w-8/10 transition-all duration-300">
        <span className="text-amber-50 font-bold text-2xl text-left max-lg:text-sm">
          {formatToPersianToman(courseData.cost)}
        </span>
       
       <div className="w-5/10 flex  gap-10 justify-end">
         {/* <div className="text-amber-50 font-bold text-2xl bg-deep-blue rounded-3xl px-6 py-3 text-center max-lg:text-sm">
          <Link to="/">خرید نقدی دوره</Link>
        </div> */}
        <button
          onClick={() => postreserve(id)}
          className="text-amber-50 font-bold text-2xl bg-deep-blue rounded-3xl px-6 py-3 text-center max-lg:text-sm"
        >
          رزرو دوره
          <ToastContainer />
        </button>
       </div>
      </div>

      <div className="flex flex-row w-5/10 justify-end pr-12 mb-5 gap-15 max-xl:w-10/10 ">

        <button onClick={() => addtofavorite()} className="w-8 h-8">
          <img src={addtofave} />
          <ToastContainer />
        </button>

        <div className="text-white flex flex-row-reverse gap-2 h-6">
          <img className=" w-7 h-7 " src={commentcount} alt="Comment Count" />
          <div className="mt-1">{courseData.commentCount}</div>
        </div>

        <div className="flex flex-row-reverse text-white gap-2 w-10 max-xl:w-2/10 items-center ">
          <img className="w-8 h-8 mt-[-10px]" src={likecount} alt="Clock Icon" />
          <div className="">{courseData.likeCount}</div>
        </div>       
         <div className="flex flex-row-reverse text-white gap-2 w-10 max-xl:w-2/10 items-center ">
          <img className="w-7 h-7 mb-1" src={dislikecount} alt="Clock Icon" />
          <div className="mb-2">{courseData.dissLikeCount}</div>
        </div>

        <div className="flex flex-row-reverse gap-2 text-white h-6">
          <img className="rounded-[50px]" src={eye} alt="Eye Icon" />
          {courseData.capacity}
        </div>

        <div className="flex flex-row-reverse gap-2 text-white h-6">
          <img src={calender} alt="Calendar Icon" />
          {courseData?.insertDate && <p>{courseData?.insertDate.slice(0, 10)}</p>}
        </div>
      </div>
    </div>
  );
};

export { Top };