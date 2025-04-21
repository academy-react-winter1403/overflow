import React, { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { getApi } from "../../core/services/api/getApi";
import SmartImage from "../../components/Common/SmartImage";
import fallbackNews from "../../assets/News/newspaper.png";
import Comment from "../../components/Comment/Comment";
const NewsDetails = () => {
  const [newsData, setNewsData] = useState(null);
  const [similarNews, setSimilarNews] = useState([]);
  const [newsComment, setNewsComment] = useState(null);

  const { id } = useParams(); // Get the news ID from URL
  const URL = `/News/${id}`;
  const navigate = useNavigate();
  useEffect(() => {
    const getNewsDetails = async () => {
      const response = await getApi(URL);
      setNewsData(response.detailsNewsDto);
      setNewsComment(response.commentDtos);
    };

    getNewsDetails();
  }, [id]);

  useEffect(() => {
    if (newsData) {
      const { newsCatregoryId } = newsData;
      const getSimilarNews = async () => {
        const similarNewsData = await getApi(
          `/News/GetNewsWithCategory/${newsCatregoryId}`
        );
        setSimilarNews(similarNewsData);
      };

      getSimilarNews();
    }
  }, [newsData]); // Add newsData as a dependency

  if (!newsData) {
    return (
      <div className="flex items-center justify-center w-full h-64">
        در حال بارگذاری...
      </div>
    );
  }

  const handleNavigation = (id) => {
    console.log(id);
    navigate(`NewsDetails/${id}`);
  };

  const {
    title,
    googleTitle,
    googleDescribe,
    miniDescribe,
    describe,
    currentImageAddress,
    currentImageAddressTumb,
    addUserFullName,
    commentsCount,
    currentLikeCount,
    currentDissLikeCount,
    newsCatregoryName,
    newsCatregoryId,
    insertDate,
  } = newsData;

  return (
    <>
      <div className="font-kalameh text-gray-700 font-semibold flex gap-10 justify-center px-6 py-8">
        <div className="flex-col flex items-center  max-w-6/10">
          <div className=" flex flex-col items-center  w-full space-y-6 lg:space-y-0">
            <div className="mb-8 relative flex justify-center w-3/3 h-[500px]">
              <div className=" absolute rounded-2xl w-full h-full bg-deep-blue opacity-25"></div>
              <SmartImage
                src={currentImageAddress || currentImageAddressTumb}
                fallback={fallbackNews}
                className=" w-full h-full  object-contain rounded-2xl shadow-lg shadow-deep-blue z-10 "
              />
            </div>
            <div className="flex items-center justify-between w-full">
              <p className="text-deep-blue  break-all text-sm">
                {addUserFullName}
              </p>
              <div className="flex items-center space-x-4 ">
                <p className="text-xs text-gray-400">
                  {new Date(insertDate).toLocaleDateString("fa-IR")}
                </p>
                <p className="text-xs text-gray-400">
                  {new Date(insertDate).toLocaleTimeString("fa-IR")}
                </p>
                <NavLink
                  to={`/News?NewsCategoryId=${newsCatregoryId}`}
                  className="text-deep-blue bg-gray-200 px-4 py-2 rounded-full hover:scale-105 transition"
                >
                  {newsCatregoryName}
                </NavLink>
              </div>
            </div>
            <header className="text-right text-gray-700 w-full p-8">
              <h1 className="text-3xl lg:text-4xl  break-all font-bold mb-4 ">
                {title || googleTitle}
              </h1>
              {miniDescribe && (
                <p className="mb-4 text-lg text-gray-600  break-all">
                  {miniDescribe}
                </p>
              )}
            </header>
          </div>

          <div className="flex mt-10 max-w-9/10 text-right w-full">
            <p className="text-lg font-iransans text-gray-700  break-all whitespace-pre-line">
              {describe || googleDescribe}
            </p>
          </div>
          <Comment
            commentData={newsComment}
            id={id}
            commentsCount={commentsCount}
          ></Comment>
        </div>

        <div className=" relative rounded-3xl shadow-lg shadow-deep-blue w-2/10 h-[500px]">
          <div className="absolute  w-full h-full bg-deep-blue opacity-25 rounded-3xl"></div>
          <div>
            <h3 className="py-3">اخبار مرتبط</h3>
            {similarNews.slice(0, 3).map((news, index) => (
              <div
                className="flex flex-col  px-2 mb-3 w-full items-center"
                key={index}
              >
                <div
                  className=" flex flex-row-reverse  relative w-full p-2 hover:scale-110 transition-all bg-white rounded-[29px] shadow-lg text-right cursor-pointer"
                  onClick={() => handleNavigation(news.id)}
                >
                  <div className="shrink-0 ">
                    {/* image */}
                    <SmartImage
                      src={news?.currentImageAddressTumb}
                      fallback={fallbackNews}
                      alt={news.title}
                      className=" h-30 w-30  shadow-deep-blue shadow-lg  object-cover rounded-3xl"
                    />
                  </div>

                  <div className=" flex  justify-center items-center flex-row-reverse  text-right px-2 ">
                    <h3 className="font-bold h-17 overflow-clip font-peyda text-2xl break-all px-2 text-gray-600">
                      {news.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
