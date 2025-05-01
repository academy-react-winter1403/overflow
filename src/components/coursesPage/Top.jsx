import React, { useState } from "react";
import { Link } from "react-router-dom";
import productimg from "../../assets/Coursesimage/product-img.png";
import commentcount from "../../assets/Coursesimage/comment.png";
import clock from "../../assets/techers/clock.png";
import eye from "../../assets/Coursesimage/eye.png";
import calender from "../../assets/Coursesimage/cal.png";
import SmartImage from "../Common/SmartImage";
import { Addreserve } from "../../core/services/api/GetCourses/reserveapi";


const formatToPersianToman = (priceInRial) => {
  const priceInToman = priceInRial / 1; // Convert Rial to Toman
  return new Intl.NumberFormat("fa-IR", {
    style: "decimal",
  }).format(priceInToman) + " تومان"; // Add "تومان" suffix
};


const Top = ({ data }) => {
  const courseData = data || {};
  const [addreserve, setaddreserve] = useState([]);

  const postreserve = async () => {
    try {
      const response = await Addreserve();
      console.log("Reserve Response:", response);
      setaddreserve(response);
    } catch (error) {
      console.error("Error reserving course:", error);
    }
  };

  return (
    <div className="flex flex-row-reverse items-center bg-gray-800 rounded-2xl flex-wrap w-10/10 h-auto transition-all duration-300 max-lg:pt-5">
      <div className="flex flex-col items-end w-5/10 h-50 mr-10">
        <h2 className="text-amber-50 text-3xl">{courseData.title}</h2>
        <p className="text-amber-50 text-xs text-right w-10/10 h-8/10 mt-10">
          {courseData.describe}
        </p>
        <button
          onClick={postreserve}
          className="text-amber-50 font-bold text-2xl bg-deep-blue rounded-3xl px-6 py-3 text-center max-lg:text-sm"
        >
          رزرو دوره
        </button>
      </div>

      <div className="text-amber-50 shadow-2xl shadow-amber-50 rounded-2xl w-3/10 h-4/10 mt-10 mr-45 max-xl:mr-20">
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