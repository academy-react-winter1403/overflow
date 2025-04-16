import React, { useEffect, useState } from "react";
import { getApi } from "../../core/services/api/getApi";
import NewsCard from "../../components/Common/NewsCard";

function NewsPage() {
  const [newsList, setNewsList] = useState([]);

  const getNewsData = async () => {
    const response = await getApi(
      "/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC",
      "news"
    );
    setNewsList(response);
    console.log(response);
  };

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <div className=" container text-gray-600 mx-auto px-4 py-10">
      {/* Search */}
      <div className="my-6 mb-17 h-20  rounded-3xl bg-white">
        <div className="flex h-full flex-row-reverse items-center ">
          <input
            type="text"
            placeholder="جستجو"
            className="w-3/10 text-right text-4xl font-kalameh font-black h-full pr-8  focus:w-5/10 border-gray-300 rounded-md focus:outline-none transition-all duration-300"
          />
          {/* <button className="mt-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            جستجو
          </button> */}
          {/* Sort */}
          <div>
            <select className="m-3  border-l-2 h-full font-black font-kalameh text-4xl  border-gray-300 focus:outline-none  ">
              <option value="">مرتب سازی</option>
              <option value="date">تاریخ</option>
              <option value="popularity">محبوبیت</option>
              <option value="alphabetical">الفبایی</option>
            </select>
          </div>
        
        </div>
      </div>

      {/* Title */}
      <div className="flex flex-nowrap justify-center items-center mb-10">
        <div className="border-b-4 border-gray-500 w-full"></div>
        <h1 className="text-5xl max-w-7/10 min-w-3/10 font-kalameh font-black mb-8 text-center">
          روزنامه سپهر
        </h1>
        <div className="border-b-4 border-gray-600 w-full"></div>
      </div>
      {/* News List */}
      <div className="grid grid-cols-4 max-sm:grid-cols-2 max-md:grid-cols-3 gap-6">
        {newsList.map((news) => (
          <NewsCard item={news} />
        ))}
      </div>
    </div>
  );
}

export default NewsPage;
