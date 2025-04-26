import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Fixed import for Link
import productimg from "../../assets/Coursesimage/product-img.png";
import commentcount from "../../assets/Coursesimage/comment.png";
import clock from "../../assets/techers/clock.png";
import eye from "../../assets/Coursesimage/eye.png";
import calender from "../../assets/Coursesimage/cal.png";
// import { toJalaali } from 'jalaali-js';

const Top = ({ data }) => {
  const courseData = data || {};
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Uncomment and modify if using Jalaali dates
    // const today = new Date();
    // const jalaaliDate = toJalaali(today.getFullYear(), today.getMonth() + 1, today.getDate());
    // const formattedDate = `${jalaaliDate.jy}/${jalaaliDate.jm}/${jalaaliDate.jd}`;
    // setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="flex flex-row-reverse items-center bg-gray-900 rounded-2xl flex-wrap w-10/10 h-auto  transition-all duration-300">
      <div className="flex flex-col items-end w-5/10 h-50 mr-10">
        <h2 className="text-amber-50 text-3xl">{courseData.title}</h2>
        <p className="text-amber-50 text-xs text-right w-10/10 h-8/10 mt-10">
          {courseData.describe}
        </p>
      </div>

      <div className="text-amber-50 shadow-2xl shadow-amber-50 rounded-2xl w-3/10 h-4/10 mt-10 mr-45 max-xl:mr-20">
        <img
          src={courseData.imageAddress || productimg}
          alt="Course Banner"
          className="rounded-2xl w-10/10 h-75 max-xl:h-50 max-lg:h-40 transition-all duration-300"
        />
      </div>

      <div className="flex items-center justify-between w-6/10 mr-10 mb-5 pl-45 max-lg:flex-row max-lg:gap-30 max-lg:w-8/10 transition-all duration-300">
        <span className="text-amber-50 font-bold text-2xl text-left max-lg:text-sm">
          {courseData.cost} T
        </span>
        <div className="text-amber-50 font-bold text-2xl bg-deep-blue rounded-3xl px-6 py-3 text-center max-lg:text-sm">
          <Link to="/">خرید نقدی دوره</Link>
        </div>
      </div>

      <div className="flex flex-row w-5/10 justify-end pr-12 mb-5 gap-15 max-xl:w-10/10">
        <div className="text-white flex flex-row-reverse gap-2 h-6">
          <img src={commentcount} alt="Comment Count" />
          {courseData.commentCount}
        </div>

        <div className="flex flex-row-reverse text-white gap-2 w-50 max-xl:w-2/10">
          <img src={clock} alt="Clock Icon" />
          {courseData.courseStatusName}
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