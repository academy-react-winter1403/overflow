import React from "react";
import  cardImg  from "../../assets/common/cardImg.png";
function Card({ item, index, handleNavigation }) {
  return (
    <div
      className="bg-white rounded-lg shadow-lg w-64 p-4 text-right cursor-pointer"
      key={index}
      onClick={() => handleNavigation(item.courseId)}
    >
      <img
        src={
          item?.tumbImageAddress && item?.tumbImageAddress !== "Not-set" ? item?.tumbImageAddress : cardImg
        }
        alt={item.title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{item.describe}</p>
      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
        <span>{item.teacherName}</span>
        <span>{item.duration}</span>
      </div>
      <span className="text-green-600 font-bold">{item.cost}</span>
    </div>
  );
}

export default Card;
