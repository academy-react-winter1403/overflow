import React, { useEffect, useState } from "react";
import { getApi } from "../../core/services/api/getApi";
function News() {
  const URL ="/News?PageNumber=1&RowsOfPage=4&SortingCol=InsertDate&SortType=DESC";

  const [newsData, setNewsData] = useState([""]);
  useEffect(() => {
    getNews();
  }, []);
  const getNews = async () => {
    const response = await getApi(URL,"news");
    setNewsData(response);
    // console.log(response);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">آخرین اخبار</h2>
        <div className="flex space-x-2">
          <button className="text-blue-500 hover:underline">
            مشاهده همه اخبار
          </button>
          <button className="text-gray-500 hover:underline">1 / 2</button>
        </div>
      </div>

      <div className="space-y-6">
        {newsData.map((newsItem,index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-between items-center">
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  {newsItem.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  {newsItem.miniDescribe}
                </p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                  مشاهده بیشتر
                </button>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={
                    newsItem.currentImageAddressTumb ||
                    "/path-to-your-default-image.jpeg"
                  } // Fallback to default image if no image URL
                  alt={newsItem.title}
                  className="h-auto w-50 rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
