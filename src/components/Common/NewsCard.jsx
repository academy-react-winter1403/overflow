import React from "react";
import cardImg from "../../assets/common/cardImg.png";
import clock from "../../assets/common/clock.png";
import SmartImage from "./SmartImage";

function NewsCard({ item, index, handleNavigation }) {
  return (
   <div className=" pt-15">
     <div
      className="relative bg-white rounded-[29px] shadow-lg w-96 h-140 px-6 text-right cursor-pointer"
      key={index}
      onClick={() => handleNavigation(item.id)}
    >
      <div className="relative h-[200px]">
       {/* image */}
        <SmartImage src={item?.currentImageAddressTumb} fallback={cardImg} alt={item.title} className="absolute shadow-deep-blue shadow-lg -top-15 w-[340px] h-[223px] object-cover rounded-3xl" />
      </div>

      <div className="overflow-ellipsis text-right overflow-hidden">
        <h3 className="font-bold font-peyda text-2xl text-gray-600 mb-2">
          {item.title}
        </h3>
        <div className="w-full relative text-ellipsis h-[160px] mb-4 pt-1">
          <h5 className="text-[20px] text-ellipsis font-vazir font-semibold text-gray-400">
            {item.miniDescribe}
          </h5>
        </div>
        <div className="text-right border-b-3 border-gray-300 h-1/9 items-center pb-7 mb-4">
          <div className="text-deep-blue font-vazir text-lg font-semibold">
            {item.addUserFullName} ●
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>👁 {item.currentView}</span>
          <span>👍🏼 {item.currentLikeCount}</span>
          <span>👎 {item.currentDissLikeCount}</span>
        </div>
      </div>
    </div>
   </div>
  );
}

export default NewsCard;
