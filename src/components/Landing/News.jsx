import React, { useEffect, useState } from "react";
import { getApi } from "../../core/services/api/getApi";
import bubbleBack from "../../assets/landing/bubbleBack.png";
import newsDef from "../../assets/News/NewsDef.png";
import SmartImage from "../Common/SmartImage";
import up from "../../assets/News/up.png";
import newsPath from "../../assets/landing/path2.png";

function News() {
  const URL =
    "/News?PageNumber=1&RowsOfPage=4&SortingCol=InsertDate&SortType=DESC";
  const [newsSlider, setNewsSlider] = useState(0);
  const [newsData, setNewsData] = useState([""]);
  useEffect(() => {
    getNews();
  }, []);
  const getNews = async () => {
    const response = await getApi(URL, "news");
    setNewsData(response);
    // console.log(response);
  };
  const nextNews = () => {
    setNewsSlider((prev) => prev + 1);
  };
  const prevNews = () => {
    setNewsSlider((prev) => Math.max(prev - 1, 0)); // Prevent going below 0
  };
  return (
    <div className="relative container mx-auto flex flex-col py-10">
      <div className="z-0">
        <img
          src={bubbleBack}
          alt=""
          className="absolute -top-168 -left-190 h-[1511px] w-[1511px] opacity-98"
        />
        <img
          src={newsPath}
          alt=""
          className="absolute -top-10 -left-65 h-[774px] w-[809px] opacity-98"
        />
      </div>
      <h2 className="font-peyda text-deep-blue relative z-10 mb-14 text-5xl font-black">
        آخرین اخبار
      </h2>
      <section className="relative z-10 flex justify-center overflow-hidde">
        <div className=" flex h-119 w-264 flex-col items-center space-y-6">
          <div className="absolute h-99 w-264 rounded-sm bg-white opacity-80 shadow-[0px_5px_27.5px_rgba(0,0,0,0.16)]"></div>

          {newsData &&
            newsData.map((newsItem, index) => (
              <div key={index} className={`-translate-y-${newsSlider*12}/10  z-10 mt-11 mr-16`}>
                <div className="flex h-99 w-264 flex-col gap-6 rounded-sm bg-white px-11 py-8 text-right shadow-[0px_5px_27.5px_rgba(0,0,0,0.16)] md:flex-row-reverse">
                  {/* Image */}
                  <div className="flex w-full justify-center md:w-1/3">
                    <SmartImage
                      src={newsItem.currentImageAddressTumb}
                      fallback={newsDef}
                      alt="News"
                      className="h-[328px] w-[328px] rounded-md object-cover"
                    />
                  </div>

                  {/* Text content */}
                  <div className="w-full space-y-4 md:w-2/3">
                    <h3 className="font-kalameh mt-16 text-5xl font-bold text-gray-700">
                      {newsItem.title}
                    </h3>
                    <p className="font-vazir text-2xl leading-relaxed text-gray-600">
                      {newsItem.miniDescribe}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="mb-6 flex items-center">
          <div className="ml-8 flex flex-col items-center space-x-2">
            <button onClick={nextNews}>
              <img src={up} className="w-4 hover:cursor-pointer" />
            </button>

            <div className="font-vazir my-2 text-2xl font-bold text-gray-700">
              {newsSlider + 1}/ 4
            </div>
            <button onClick={prevNews}>
              <img src={up} className="w-4 rotate-180 hover:cursor-pointer" />
            </button>
          </div>
        </div>
      </section>
      <div className="w-full text-left">
        <button className="font-vazir self-start text-2xl font-bold text-gray-700 hover:cursor-pointer">
          مشاهده همه اخبار
        </button>
      </div>
    </div>
  );
}

export default News;
