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
          `/News/GetNewsWithCategory/${newsCatregoryId}`,
        );
        setSimilarNews(similarNewsData.filter((news) => news.id != id));
      };

      getSimilarNews();
    }
  }, [newsData]); // Add newsData as a dependency

  if (!newsData) {
    return (
      <div className="flex h-64 w-full items-center justify-center">
        در حال بارگذاری...
      </div>
    );
  }

  const handleNavigation = (id) => {
    console.log(id);
    navigate(`/News/NewsDetails/${id}`);
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
      <div className="font-kalameh flex justify-center gap-10 px-6 py-8 font-semibold text-gray-700">
        <div className="flex max-w-6/10 flex-col items-center">
          <div className="flex w-full flex-col items-center space-y-6 lg:space-y-0">
            <div className="relative mb-8 flex h-[500px] w-3/3 justify-center">
              <div className="bg-deep-blue absolute h-full w-full rounded-2xl opacity-25"></div>
              <SmartImage
                src={currentImageAddress || currentImageAddressTumb}
                fallback={fallbackNews}
                className="shadow-deep-blue z-10 h-full w-full rounded-2xl object-contain shadow-lg"
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-deep-blue text-sm break-all">
                {addUserFullName}
              </p>
              <div className="flex items-center space-x-4">
                <p className="text-xs text-gray-400">
                  {new Date(insertDate).toLocaleDateString("fa-IR")}
                </p>
                <p className="text-xs text-gray-400">
                  {new Date(insertDate).toLocaleTimeString("fa-IR")}
                </p>
                <NavLink
                  to={`/News?NewsCategoryId=${newsCatregoryId}`}
                  className="text-deep-blue rounded-full bg-gray-200 px-4 py-2 transition hover:scale-105"
                >
                  {newsCatregoryName}
                </NavLink>
              </div>
            </div>
            <header className="w-full p-8 text-right text-gray-700">
              <h1 className="mb-4 text-3xl font-bold break-all lg:text-4xl">
                {title || googleTitle}
              </h1>
              {miniDescribe && (
                <p className="mb-4 text-lg break-all text-gray-600">
                  {miniDescribe}
                </p>
              )}
            </header>
          </div>

          <div className="mt-10 flex w-full max-w-9/10 text-right">
            <p className="font-iransans text-lg break-all whitespace-pre-line text-gray-700">
              {describe || googleDescribe}
            </p>
          </div>
          <Comment
            commentData={newsComment}
            id={id}
            commentsCount={commentsCount}
          ></Comment>
        </div>

        <div className="shadow-deep-blue relative h-[500px] w-2/10 rounded-3xl shadow-lg">
          <div className="bg-deep-blue absolute h-full w-full rounded-3xl opacity-25"></div>
          <div>
            <h3 className="py-3">اخبار مرتبط</h3>
            {similarNews.slice(0, 3).map((news, index) => (
              <div
                className="mb-3 flex w-full flex-col items-center px-2"
                key={index}
              >
                <div
                  className="relative flex w-full cursor-pointer flex-row-reverse rounded-[29px] bg-white p-2 text-right shadow-lg transition-all hover:scale-110"
                  onClick={() => handleNavigation(news.id)}
                >
                  <div className="shrink-0">
                    {/* image */}
                    <SmartImage
                      src={news?.currentImageAddressTumb}
                      fallback={fallbackNews}
                      alt={news.title}
                      className="shadow-deep-blue h-30 w-30 rounded-3xl object-cover shadow-lg"
                    />
                  </div>

                  <div className="flex flex-row-reverse items-center justify-center px-2 text-right">
                    <h3 className="font-peyda h-17 overflow-clip px-2 text-2xl font-bold break-all text-gray-600">
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
