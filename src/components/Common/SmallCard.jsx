import React from "react";
import cardImg from "../../assets/common/cardImg.png";
// import clock from "../../assets/common/clock.png";
function SmallCard({ item, index, handleNavigation }) {
  return (
    <div
      className="flex flex-col shrink-0  items-center dark:bg-gray-400/95 bg-white rounded-[29px] shadow-lg w-[328px] h-[328PX] px-6  cursor-pointer"
      key={index}
      onClick={() => handleNavigation(`/AllCourses/Courses/${item.courseId}`)}
    >
      <div className="mt-8 flex items-center h-[150px] ">
        <img
          src={
            item?.tumbImageAddress && item?.tumbImageAddress !== "Not-set"
              ? item?.tumbImageAddress
              : cardImg
          }
          alt="cardImg"
          className="w-[209px]  object-cover rounded-3xl"
        />
      </div>
      <div>
        <h3 className="font-bold mt-6 font-peyda text-2xl dark:text-gray-200 text-gray-600 ">
          {item.techName}
        </h3>

        <h5 className="text-[20px] font-vazir  font-semibold dark:text-gray-100 text-gray-400 ">
          {item.describe}
        </h5>
      </div>
    </div>
  );
}

export default SmallCard;
