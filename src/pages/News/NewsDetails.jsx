import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getApi } from "../../core/services/api/getApi";
import SmartImage from "../../components/Common/SmartImage";
import fallbackNews from "../../assets/News/newspaper.png";

const NewsDetails = () => {
  const [newsData, setNewsData] = useState(null);
  const { id } = useParams(); // Get the news ID from URL
  const URL = `/News/${id}`;

  useEffect(() => {
    const getNewsDetails = async () => {
      const response = await getApi(URL, "detailsNewsDto");
      setNewsData(response);
    };

    getNewsDetails();
  }, [id]);

  if (!newsData) {
    return (
      <div className="flex items-center justify-center w-full h-64">
        در حال بارگذاری...
      </div>
    );
  }

  const {
    title,
    googleTitle,
    googleDescribe,
    miniDescribe,
    describe,
    currentImageAddress,
    currentImageAddressTumb,
    addUserFullName,
    currentLikeCount,
    currentDissLikeCount,
    newsCatregoryName,
    newsCatregoryId,
    insertDate,
  } = newsData;

  return (
    <div className="font-kalameh text-gray-700 font-semibold flex flex-col items-center justify-center px-6 py-8">
      
      <div className="flex flex-col lg:flex-row justify-center max-w-8/10 w-full space-y-6 lg:space-y-0">
        <header className="text-center lg:text-left lg:w-2/3 px-4">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
            {title || googleTitle}
          </h1>
          {miniDescribe && (
            <p className="mb-4 text-lg text-gray-600">{miniDescribe}</p>
          )}
          <div className="flex space-x-4 mb-6">
            <p className="text-deep-blue text-sm">{addUserFullName}</p>
            <p className="text-xs text-gray-400">{new Date(insertDate).toLocaleDateString("fa-IR")}</p>
            <p className="text-xs text-gray-400">{new Date(insertDate).toLocaleTimeString("fa-IR")}</p>
          </div>
          <NavLink
            to={`/News?NewsCategoryId=${newsCatregoryId}`}
            className="text-deep-blue bg-gray-200 px-4 py-2 rounded-full hover:scale-105 transition"
          >
            {newsCatregoryName}
          </NavLink>
        </header>
        
        <div className="flex justify-center lg:w-1/3">
          <SmartImage
            src={currentImageAddress || currentImageAddressTumb}
            fallback={fallbackNews}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      
      <div className="mt-10 max-w-8/10 w-full">
        <p className="text-lg text-gray-700 whitespace-pre-line">{describe || googleDescribe}</p>
      </div>

    </div>
  );
};

export default NewsDetails;