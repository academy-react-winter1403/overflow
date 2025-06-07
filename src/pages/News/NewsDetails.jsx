import React, { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { getApi } from "../../core/services/api/getApi";
import SmartImage from "../../components/Common/SmartImage";
import fallbackNews from "../../assets/News/newspaper.png";
import { useQuery } from "@tanstack/react-query";
import CommentSection from "../../components/Comment/CommentSection";
import addtofave from "../../assets/Coursesimage/icons8-add-to-favorites-482.png";
import { Addnewstofave } from "../../core/services/api/news/Addnewsfavorite";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsDetails = () => {
  const [newsData, setNewsData] = useState(null);
  const [similarNews, setSimilarNews] = useState([]);
  const [newsComment, setNewsComment] = useState(null);

  const { id } = useParams(); // Get the news ID from URL
  const URL = `/News/${id}`;
  const navigate = useNavigate();

  const favoritenews = async () => {
    const response = await Addnewstofave(id);

    console.log("from nwesfave :", response);

    if (response) {
      toast.success(" به مورد علاقه ها اضافه شد");
    }
  };

  // useQuery
  const { data: response } = useQuery({
    queryKey: ["newscomments", id],
    queryFn: () => getApi(URL),
  });

  useEffect(() => {
    if (response) {
      setNewsData(response.detailsNewsDto);
      setNewsComment(response.commentDtos);
    }
  }, [response]);

  useEffect(() => {
    if (newsData) {
      const { newsCatregoryId } = newsData;
      const getSimilarNews = async () => {
        const similarNewsData = await getApi(
          `/News/GetNewsWithCategory/${newsCatregoryId}`,
        );
        setSimilarNews(similarNewsData.filter((news) => news.id !== id));
        // console.log("cm news", newsComment);
      };

      getSimilarNews();
    }
  }, [newsData, id, newsComment]); // Add all necessary dependencies

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
    // currentLikeCount,
    // currentDissLikeCount,
    newsCatregoryName,
    newsCatregoryId,
    insertDate,
  } = newsData;

  return (
    <>
      <div className="font-kalameh flex justify-center gap-10 px-6 py-8 font-semibold text-gray-700 dark:text-gray-300">
        <div
          className={`flex ${similarNews.length == 0 ? "max-w-8/10" : "max-w-6/10"} max-md: flex-col items-center`}
        >
          <div className="flex w-full flex-col items-center space-y-6 lg:space-y-0">
            <div className="relative mb-8 flex h-[500px] w-3/3 justify-center transition-all duration-300 max-sm:h-60 max-sm:w-100 max-sm:scale-90">
              <div className="bg-deep-blue/25 absolute h-full w-full rounded-2xl dark:bg-gray-700"></div>
              <SmartImage
                src={currentImageAddress || currentImageAddressTumb}
                fallback={fallbackNews}
                className="shadow-deep-blue z-10 h-full w-full rounded-2xl object-contain shadow-lg"
              />
            </div>
            <div className="flex w-full items-center justify-between  max-sm:w-100 max-sm:pl-5 max-sm:scale-90">
              <div className="flex gap-4">
                <p className="text-deep-blue pt-3 text-sm break-all dark:text-gray-400">
                  {addUserFullName}
                </p>

                <button onClick={() => favoritenews()}>
                  <img className="hover:cursor-pointer" src={addtofave} />
                  <ToastContainer />
                </button>
              </div>
              <div className="flex items-center space-x-4 ">
                <p className="text-xs text-gray-400 dark:text-gray-500 ">
                  {new Date(insertDate).toLocaleDateString("fa-IR")}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 max-sm:hidden">
                  {new Date(insertDate).toLocaleTimeString("fa-IR")}
                </p>
                <NavLink
                  to={`/News?NewsCategoryId=${newsCatregoryId}`}
                  className="text-deep-blue rounded-full bg-gray-200 px-4 py-2 transition hover:scale-105 dark:bg-gray-700 dark:text-gray-300"
                >
                  {newsCatregoryName}
                </NavLink>
              </div>
            </div>
            <header className="w-full p-8 text-right text-gray-700 dark:text-gray-300 max-sm:w-100 max-sm:scale-90 ">
              <h1 className="mb-4 text-3xl font-bold break-all lg:text-4xl dark:text-gray-100">
                {title || googleTitle}
              </h1>
              {miniDescribe && (
                <p className="mb-4 text-lg break-all text-gray-600 dark:text-gray-400 ">
                  {miniDescribe}
                </p>
              )}
            </header>
          </div>

          <div className="mt-10 flex w-full max-w-9/10 text-right max-sm:hidden">
            <p className="font-iransans text-lg break-all whitespace-pre-line text-gray-700 dark:text-gray-300">
              {describe || googleDescribe}
            </p>
          </div>
          <CommentSection
            commentData={newsComment}
            commentsCount={commentsCount}
            type={"News"}
          ></CommentSection>          
          
        </div>

        {similarNews.length > 0 ? (
          <div className="shadow-deep-blue relative h-[500px] w-2/10 rounded-3xl shadow-lg max-md:hidden dark:shadow-gray-700">
            <div className="bg-deep-blue/25 absolute h-full w-full rounded-3xl dark:bg-gray-700"></div>
            <div>
              <h3 className="py-3 dark:text-gray-300">اخبار مرتبط</h3>
              {similarNews &&
                similarNews.slice(0, 3).map((news, index) => (
                  <div
                    className="mb-3 flex w-full flex-col items-center px-2"
                    key={index}
                  >
                    <div
                      className="relative flex w-full cursor-pointer flex-row-reverse rounded-[29px] bg-white p-2 text-right shadow-lg transition-all hover:scale-110 dark:bg-gray-800 dark:text-gray-300"
                      onClick={() => handleNavigation(news.id)}
                    >
                      <div className="shrink-0">
                        {/* image */}
                        <SmartImage
                          src={news?.currentImageAddressTumb}
                          fallback={fallbackNews}
                          alt={news.title}
                          className="shadow-deep-blue h-30 w-30 rounded-3xl object-cover shadow-lg dark:shadow-gray-700"
                        />
                      </div>

                      <div className="flex flex-row-reverse items-center justify-center px-2 text-right">
                        <h3 className="font-peyda h-17 overflow-clip px-2 text-2xl font-bold break-all text-gray-600 max-xl:hidden dark:text-gray-300">
                          {news.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default NewsDetails;
