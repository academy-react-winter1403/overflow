import React from "react";
import fallbackNews from "../../assets/News/newspaper.png";
import SmartImage from "./SmartImage";
import { Link } from "react-router-dom";
import like from '../../assets/Coursesimage/like.png';
import dislike from '../../assets/Coursesimage/dislike.png';
import views from '../../assets/Coursesimage/icons8-view-24.png';

function NewsCard({ item, index, }) {
  return (
   <div className=" pt-15  max-sm:w-10/10 max-sm:mt-10 max-sm:pt-0 ">
    <Link to={`/News/NewsDetails/${item.id}`}>
     <div
      className=" max-sm:w-10/10 max-sm:h-auto relative bg-white dark:bg-gray-400/95 rounded-[29px] shadow-lg w-96 max-2xl:w-80 max-lg:w-100 max-md:w-80 h-140 px-6 text-right cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
      key={index}
    >
      <div className="relative h-[200px] max-sm:h-[105px] max-sm:w-[105px] max-sm:absolute max-sm:top-2 max-sm:left-66  ">
       {/* image */}
        <SmartImage src={item?.currentImageAddressTumb} fallback={fallbackNews} alt={item.title} className="absolute shadow-deep-blue shadow-lg -top-15 w-[340px] h-[223px] object-cover rounded-3xl max-sm:w-[105px] max-sm:h-[105px] max-sm:absolute max-sm:top-0 " />
      </div>

      <div className=" overflow-ellipsis text-right  overflow-hidden max-sm:h-30 max-sm:w-7/10 max-sm:flex  max-sm:flex-col max-sm:items-end ">
        <h3 className="font-bold font-iransans text-2xl dark:text-gray-100 text-gray-600 mb-2 max-sm:text-xl max-sm:mt-2 max-sm:pr-2   max-sm:h-20  max-sm:w-10/10 ">
          {item.title}
        </h3>
        <div className="w-full relative text-ellipsis h-[160px] mb-4 pt-1 max-sm:hidden">
          <h5 className="text-[20px] text-ellipsis font-vazir font-semibold dark:text-gray-200 text-gray-400 ">
            {item.miniDescribe}
          </h5>
        </div>
        <div className="text-right border-b-3 border-gray-300 h-1/9 items-center pb-7 mb-2 max-sm:border-none ">
          <div className="text-deep-blue font-vazir text-lg font-semibold  max-sm:w-10/10">
            {item.addUserFullName} ●
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 ">
          <span className="flex flex-row gap-1 max-sm:hidden ">
            <img src={views} /> {item.currentView}
            </span>
          <span className="flex felx-row max-sm:hidden">
            <img  src={like} /> {item.currentLikeCount}
            </span>
          <span className="flex flex-row max-sm:hidden">
            <img src={dislike} /> {item.currentDissLikeCount}
            </span>
        </div>
      </div>
    </div>
    </Link>
   </div>
  );
}

export default NewsCard;
