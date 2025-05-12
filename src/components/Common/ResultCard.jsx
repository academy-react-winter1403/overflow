import React from "react";
import { Link, useNavigate } from "react-router-dom";
import fallbackNews from "../../assets/News/newspaper.png";
import cardImg from "../../assets/common/cardImg.png";
import clock from "../../assets/common/clock.png";
import like from "../../assets/Coursesimage/like.png";
import dislike from "../../assets/Coursesimage/dislike.png";
import SmartImage from "./SmartImage";

function ResultCard({
  item,
  index,
  type = "Course",
  className = "",
}) {
  const isNews = type === "News";
  const imageSrc = isNews
    ? item?.currentImageAddressTumb
    : item?.tumbImageAddress;

  const title = item?.title;
  const fallback = isNews ? fallbackNews : cardImg;
  const describe = isNews ? item?.miniDescribe : item?.describe;
  const to = isNews
    ? `/News/NewsDetails/${item.id}`
    : `/AllCourses/Courses/${item.courseId}`;

  return (
    <div className={`${className} rounded-2xl overflow-hidden h-30 w-full`}>
      <Link to={to}> 
        <div
          className="relative flex p-2 h-full cursor-pointer flex-row-reverse items-center text-right shadow-lg transition-all hover:scale-102 hover:shadow-xl dark:bg-gray-400/95"
          key={index}
        >
          <div className="relative h-full w-40">
            <SmartImage
              src={imageSrc}
              alt={title}
              fallback={fallback}
              className="shadow-deep-blue object-fit h-full w-full rounded-2xl shadow-lg"
            />
          </div>

          <div className="my-2 w-full overflow-hidden p-6 text-right">
            <h3 className="font-peyda truncate text-2xl font-bold text-gray-600 dark:text-gray-100">
              {title}
            </h3>
            <div className="relative h-15 w-full pt-1">
              <h5 className="font-vazir h-full overflow-hidden text-[20px] font-semibold text-ellipsis whitespace-normal text-gray-400 dark:text-gray-200">
                {describe}
              </h5>
            </div>

            {isNews ? (
              <div>
               <div className="font-vazir text-lg font-semibold overflow-hidden text-deep-blue/90">
                  {`${item.addUserFullName} `}
                </div>
              </div>
            ) : (
              <div>
                <div className="font-vazir text-lg font-semibold overflow-hidden text-deep-blue/90">{`${item.teacherName}`}</div>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ResultCard;
