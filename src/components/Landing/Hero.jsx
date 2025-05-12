import React, { useEffect, useState } from "react";
import HeroImg from "../../assets/landing/heroimg.png";
import bgShape from "../../assets/landing/bubbleBack.png";
import search from "../../assets/landing/search.png";
import { getApi } from "../../core/services/api/getApi";
import Card from "../Common/Card";
import NewsCard from "../Common/NewsCard";
import ResultCard from "../Common/ResultCard";
function Hero() {
  const [timer, setTimer] = useState(null);
  const [newsQuery, setNewsQuery] = useState("");
  const [courseQuery, setCourseQuery] = useState("");
  const [newsData, setNewsData] = useState("");
  const [courseData, setCourseData] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false); // Track search focus

  const URLNews = `/News?Query=${newsQuery}`;
  const URLCourse = `/Home/GetCoursesWithPagination?Query=${courseQuery}`;

  const handleSearchChange = (e) => {
    const value = e.target.value;

    setSearchTerm(value);
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(() => {
      setCourseQuery(searchTerm);
      setNewsQuery(searchTerm);
    }, 500);
    setTimer(newTimer);
  };

  const getSearchData = async () => {
    const newsResponse = await getApi(URLNews, "news");
    const courseResponse = await getApi(URLCourse, "courseFilterDtos");

    setNewsData(newsResponse);
    setCourseData(courseResponse);
  };

  useEffect(() => {
    if (searchTerm !== "") {
      getSearchData();
    }
  }, [newsQuery]);

  return (
    <section className="relative lg:px-30 px-10 py-16">
      {/* set onFocus */}
      {isSearchFocused && (
        <div
          onClick={() => setIsSearchFocused(false)} // Expand on focus
          className="absolute top-0 left-0 z-20 h-screen w-screen transition-all duration-300"
        ></div>
      )}{" "}
      {/* Background Shape */}
      <img
        src={bgShape}
        alt="Background Shape"
        className="absolute top-0 -right-20 z-0 h-[1099px] w-[1099px] opacity-98"
      />
      <div className="relative z-20 flex w-full items-center justify-between">
        {/* Hero Image Section */}
        <img
          src={HeroImg}
          alt="آموزش"
          className={`h-auto w-full max-w-[900px] flex-shrink-3 max-xl:hidden ${
            isSearchFocused ? "opacity-20" : ""
          }`}
        />

        {/* Right Section */}
        <div className="flex w-full flex-shrink-2 flex-col items-end justify-start space-y-6 text-right max-xl:mx-auto max-xl:items-center">
          <h1
            className={`  font-peyda text-deep-blue text-[59px] font-black tracking-widest dark:text-gray-200 ${
              isSearchFocused ? "opacity-20" : ""
            }`}
          >
            دنبال چی می‌گردی؟
          </h1>
          <p
            className={`max-md:hidden font-vazir text-2xl tracking-widest text-gray-500 dark:text-gray-300 ${
              isSearchFocused ? "opacity-20" : ""
            }`}
          >
            ... دیگه وقتشه یه تکونی به خودت بدی
          </p>

          {/* Search Input */}
          <div
            className={`ring-deep-blue z-50 flex flex-col gap-10 rounded-3xl bg-white p-2 tracking-widest ring-2 transition-all duration-300 hover:scale-103 hover:shadow-2xl max-xl:w-full dark:bg-gray-700 ${
              isSearchFocused ? "absolute w-10/10 p-4" : "w-6/7 max-w-[590px]"
            }`}
            onClick={() => setIsSearchFocused(true)} // Expand on focus
          >
            <div className="flex flex-row-reverse items-center justify-between gap-4">
              <input
                onChange={handleSearchChange}
                value={searchTerm}
                type="text"
                placeholder="...تو فقط اسم ببر"
                className="font-vazir z-50 h-[55px] w-full rounded-full border-b-2 border-none px-6 text-right text-[21px] font-bold text-gray-500 focus:outline-none dark:text-gray-200"
              />
              <button className="bg-deep-blue h-[53px] w-[55px] flex-shrink-0 rounded-2xl text-white">
                <img
                  src={search}
                  className="mx-auto my-auto h-[38px] w-[38px]"
                />
              </button>
            </div>

            {/* Search Results */}
            {isSearchFocused && (
              <div className="p-+-+ max-h-screen overflow-y-auto rounded-lg border-t-2 bg-white shadow-lg dark:bg-gray-800">
                {/* <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3"> */}
                <div className="flex gap-4 m-4 max-lg:flex-col">
                  {newsData.length > 0 && (
                    <div className="flex w-full flex-col  items-center gap-4">
                      <h1 className="font-peyda border-deep-blue text-deep-blue w-full border-b-2 text-center text-[30px] font-black tracking-widest shadow-2xl dark:text-gray-200">
                        اخبار
                      </h1>
                      {newsData?.map((item, index) => (
                        <ResultCard
                          type="News"
                          key={index}
                          item={item}
                        />
                      ))}
                    </div>
                  )}

                  {courseData.length > 0 && (
                    <div className="flex w-full flex-col items-center gap-4">
                      <h1 className="font-peyda border-deep-blue text-deep-blue w-full border-b-2 text-center text-[30px] font-black tracking-widest shadow-2xl dark:text-gray-200">
                        دوره‌ها
                      </h1>
                      {courseData?.map((item, index) => (
                        <ResultCard
                          key={index}
                          item={item}
                          handleNavigation={(id) =>
                            console.log(`Navigate to course ${id}`)
                          }
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          {/* Description */}
          <h1
            className={`font-peyda dark:text-deep-blue text-[40px] font-black text-gray-600 ${
              isSearchFocused ? "opacity-20" : ""
            }`}
          >
            آکادمی سپهر
          </h1>
          <p
            className={`font-iransans -mt-2 text-right text-2xl text-[#a7a7a7] max-md:hidden dark:text-gray-200 ${
              isSearchFocused ? "opacity-20" : ""
            }`}
          >
            آکادمی آموزشی سپهر مکانی برای پیشرفت <br /> تو با تمرین مهارت‌های
            موردنیاز برای طراحی وب رو <br />
            هرچه سریع‌تر با بهترین روش یاد بگیری
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
