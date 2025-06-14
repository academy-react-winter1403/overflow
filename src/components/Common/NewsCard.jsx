import React from "react";
import fallbackNews from "../../assets/News/newspaper.png";
import SmartImage from "./SmartImage";
import { Link } from "react-router-dom";
import like from "../../assets/Coursesimage/like.png";
import dislike from "../../assets/Coursesimage/dislike.png";
import views from "../../assets/Coursesimage/icons8-view-24.png";

function NewsCard({ item, index }) {
  return (
    <div className="pt-15 max-sm:mt-10 max-sm:w-10/10 max-sm:pt-0 ">
      <Link to={`/News/NewsDetails/${item.id}`}>
        <div
          className="max-sm:hidden relative h-140 w-96 cursor-pointer rounded-[29px] bg-white px-6 text-right shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl max-2xl:w-80 max-lg:w-80 max-md:w-80 max-sm:h-auto max-sm:w-10/10 max-sm:scale-90 dark:bg-gray-400/95"
          key={index}
        >
          <div className="relative h-[200px] max-sm:absolute max-sm:top-1 max-sm:left-66 max-sm:h-[105px] max-sm:w-[105px]">
            {/* image */}
            <SmartImage
              src={item?.currentImageAddressTumb}
              fallback={fallbackNews}
              alt={item.title}
              className="shadow-deep-blue absolute -top-15 h-[223px] w-[340px] rounded-3xl object-cover shadow-lg max-sm:absolute max-sm:top-0 max-sm:h-[105px] max-sm:w-[105px]"
            />
          </div>

          <div className="overflow-hidden text-right overflow-ellipsis h-90 max-sm:flex max-sm:h-30 max-sm:w-7/10 max-sm:flex-col max-sm:items-end ">
            <h3 className="h-25 font-iransans mb-2 text-xl font-bold text-gray-600 max-sm:mt-4 max-sm:h-20 max-sm:w-10/10 max-sm:pr-2 max-sm:text-xl dark:text-gray-100 ">
              {item.title}
            </h3>
            <div className="relative  h-[160px] w-full pt-1 text-ellipsis max-sm:hidden">
              <h5 className="font-vazir text-[20px] font-semibold text-ellipsis text-gray-400 dark:text-gray-200  h-30">
                {item.miniDescribe}
              </h5>
            </div>
            <div className="mb-2 h-1/9 items-center border-b-3 border-gray-300 pb-7 text-right max-sm:border-none ">
              <div className="text-deep-blue font-vazir text-lg font-semibold max-sm:w-10/10 ">
                {item.addUserFullName} ●
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <span className="flex flex-row gap-1 max-sm:hidden">
                <img src={views} /> {item.currentView}
              </span>
              <span className="felx-row flex max-sm:hidden">
                <img src={like} /> {item.currentLikeCount}
              </span>
              <span className="flex flex-row max-sm:hidden">
                <img src={dislike} /> {item.currentDissLikeCount}
              </span>
            </div>
          </div>
        </div>
      </Link>

                               {/* mobile mode */}

      <Link to={`/News/NewsDetails/${item.id}`} className="max-sm:flex md:hidden sm:hidden">
        <div
          className=" relative flex flex-row-reverse w-full h-full bg-white rounded-2xl pr-2 shadow-lg dark:bg-gray-400 "
          key={index}
        >
          <div className="w-25 h-25 m-auto">
            {/* image */}
            <SmartImage
              src={item?.currentImageAddressTumb}
              fallback={fallbackNews}
              alt={item.title}
              className="rounded-2xl shadow-lg"
            />
          </div>

          <div className="overflow-hidden text-right overflow-ellipsis max-sm:flex max-sm:h-30 max-sm:w-7/10 max-sm:flex-col max-sm:items-end ">
            <h3 className="font-iransans mb-2 text-2xl font-bold text-gray-600 max-sm:mt-4 max-sm:h-20 max-sm:w-10/10 max-sm:pr-2 max-sm:text-xl dark:text-gray-100 dark:text-gray-700">
              {item.title}
            </h3>
            <div className="relative mb-4 h-[160px] w-full pt-1 text-ellipsis max-sm:hidden">
              <h5 className="font-vazir text-[20px] font-semibold text-ellipsis text-gray-400 dark:text-gray-200">
                {item.miniDescribe}
              </h5>
            </div>
            <div className="mb-2 h-1/9 items-center border-b-3 border-gray-300 pb-7 text-right max-sm:border-none">
              <div className="text-deep-blue font-vazir text-lg font-semibold max-sm:w-10/10">
                {item.addUserFullName} ●
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <span className="flex flex-row gap-1 max-sm:hidden">
                <img src={views} /> {item.currentView}
              </span>
              <span className="felx-row flex max-sm:hidden">
                <img src={like} /> {item.currentLikeCount}
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
