import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import productimg from "../../assets/Coursesimage/product-img.png";
import commentcount from "../../assets/Coursesimage/Symbol(1).png";
import clock from "../../assets/Coursesimage/Vector.png";
import eye from "../../assets/Coursesimage/eye 1.png";
import calender from "../../assets/Coursesimage/List → Item.png";
// import { toJalaali } from 'jalaali-js';

const Top = ({ data }) => {
  const courseData = data || {};
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // const today = new Date();
    // const jalaaliDate = toJalaali(today.getFullYear(), today.getMonth() + 1, today.getDate());
    // const formattedDate = `${jalaaliDate.jy}/${jalaaliDate.jm}/${jalaaliDate.jd}`;
    // setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="flex h-auto w-10/10 flex-row-reverse flex-wrap items-center rounded-2xl bg-gray-900">
      <div className="mr-10 flex h-50 w-5/10 flex-col items-end">
        <h2 className="text-3xl text-amber-50">{courseData.title}</h2>
        <p className="mt-10 h-8/10 w-10/10 text-right text-xs text-amber-50">
          {courseData.describe}
        </p>
      </div>

      <div className="mt-10 mr-45 h-4/10 w-3/10 rounded-2xl text-amber-50 shadow-2xl shadow-amber-50">
        <img
          src={courseData.imageAddress || productimg}
          alt="Course Banner"

          className="rounded-2xl w-10/10 h-75"
        />
      </div>

      <div className="mr-10 mb-5 flex w-6/10 items-center justify-between pl-45">
        <span className="text-left text-2xl font-bold text-amber-50">
          {" "}
          {courseData.cost} T{" "}
        </span>
        <div className="bg-deep-blue rounded-3xl px-6 py-3 text-center text-2xl font-bold text-amber-50">
          <Link to="/">خرید نقدی دوره</Link>
        </div>
      </div>

      <div className="mb-5 flex w-5/10 flex-row justify-end gap-15 pr-12">
        <div className="flex flex-row-reverse gap-2 text-white">
          <img src={commentcount} />
          {courseData.commentCount}
        </div>

        <div className="flex flex-row-reverse gap-2 text-white">
          <img src={clock} />
          {courseData.courseStatusName}
        </div>

        <div className="flex flex-row-reverse gap-2 text-white">
          <img className="rounded-[50px]" src={eye} />
          {courseData.capacity}
        </div>

        <div className="flex flex-row-reverse gap-2 text-white">
          <img src={calender} />
          {courseData?.insertDate && (
            <p>{courseData?.insertDate.slice(0, 10)} </p>
          )}{" "}
        </div>
      </div>
    </div>
  );
};
export { Top };
