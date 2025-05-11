import React from "react";
import { Link, useNavigate } from "react-router-dom";
import fallbackNews from "../../assets/News/newspaper.png";
import cardImg from "../../assets/common/cardImg.png";
import clock from "../../assets/common/clock.png";
import like from '../../assets/Coursesimage/like.png';
import dislike from '../../assets/Coursesimage/dislike.png';
import SmartImage from "./SmartImage";

function ResultCard({ item, index, type = "Course", handleNavigation, className = "" }) {
  const isNews = type === "News";
  const navigate = useNavigate();
  const imageSrc = isNews
    ? item?.currentImageAddressTumb || fallbackNews
    : item?.tumbImageAddress !== "Not-set" ? item?.tumbImageAddress : cardImg;

  const title = item?.title;
  const describe = isNews ? item?.miniDescribe : item?.describe;
  const to = isNews ? `/News/NewsDetails/${item.id}` : `/AllCourses/Courses/${item.courseId}`;

  return (
    <div className={`${className} pt-15`}>
      <Link to={to}>
        <div
          className="relative h-140 w-96 cursor-pointer rounded-[29px] bg-white px-6 text-right shadow-lg transition-all max-2xl:h-126 max-2xl:w-80 max-lg:w-60 max-md:w-80 dark:bg-gray-400/95 hover:scale-105 hover:shadow-xl max-lg:h-80"
          key={index}
          onClick={() => {
            if (isNews) {
              navigate(`/News/NewsDetails/${item.id}`);
            } else {
              handleNavigation?.(item.courseId);
            }
          }}
        >
          <div className="relative h-[200px]">
            <img
              src={imageSrc}
              alt={title}
              className="shadow-deep-blue absolute -top-15 h-[223px] w-[340px] rounded-3xl object-cover shadow-lg max-lg:h-40"
            />
          </div>

          <div className="text-right overflow-hidden">
            <h3 className="font-peyda mb-2 truncate text-2xl font-bold text-gray-600 dark:text-gray-100">
              {title}
            </h3>
            <div className="relative mb-4 h-[160px] w-full pt-1">
              <h5 className="font-vazir h-full overflow-hidden text-[20px] font-semibold text-ellipsis whitespace-normal text-gray-400 dark:text-gray-200">
                {describe}
              </h5>
            </div>

            {isNews ? (
              <div className="text-right border-b-3 border-gray-300 h-1/9 items-center pb-7 mb-4">
                <div className="text-deep-blue font-vazir text-lg font-semibold">
                  {item.addUserFullName} ●
                </div>
              </div>
            ) : (
              <div className="flex flex-row-reverse mb-4 h-1/9 items-center border-b-3 border-gray-300 pb-7 text-right max-lg:hidden">
                <div className="w-5/10 font-vazir text-lg font-semibold text-blue-600">{`${item.teacherName} ●`}</div>
                <div className="w-5/10 flex flex-row">
                  <div className="flex flex-row items-center">
                    <img src={like} />
                    <span>{item.likeCount}</span>
                  </div>
                  <div className="flex flex-row items-center">
                    <img src={dislike} />
                    <span>{item.dissLikeCount}</span>
                  </div>
                </div>
              </div>
            )}

            <div className={`font-kalameh-num flex ${isNews ? 'justify-between' : 'flex-row-reverse justify-between'} max-lg:flex-col max-lg:items-end max-lg:gap-2`}>
              {item.lastUpdate && (
                <div className="flex h-6 w-26 justify-around rounded-4xl items-center bg-gray-400 px-1 text-left">
                  <span className="font-iransans text-white">
                    {new Date(item.lastUpdate).toLocaleTimeString("fa-IR")}
                  </span>
                  <img className="py-0.5 h-6" src={clock} alt="clock" />
                </div>
              )}
              <span className="text-deep-blue relative flex w-auto max-w-5/7 flex-wrap justify-center gap-1 truncate text-2xl font-bold max-lg:text-sm">
                {isNews
                  ? <>
                      👁 {item.currentView} &nbsp; 👍🏼 {item.currentLikeCount} &nbsp; 👎 {item.currentDissLikeCount}
                    </>
                  : `${Number(item.cost).toLocaleString("fa-IR")} تومان`}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ResultCard;
