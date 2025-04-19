import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../../core/services/api/getApi";

const NewsDetails = () => {
  const [newsData, setNewsData] = useState(null);
  const { id } = useParams(); // Get the news ID from URL
  const URL = `/News/${id}`;

  useEffect(() => {
    const getNewsDetails = async () => {
      const response = await getApi(URL, "detailsNewsDto");
      console.log(response);
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
  } = newsData;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          {googleTitle || title}
        </h1>
        {miniDescribe && (
          <p className="mt-2 text-lg text-gray-600">{miniDescribe}</p>
        )}
      </header>

      <div className="mb-6">
        {currentImageAddress && (
          <img
            src={currentImageAddress}
            alt={googleTitle || title}
            className="w-full h-80 object-cover rounded-xl shadow-lg mb-4"
          />
        )}
        <p className="text-lg text-gray-700 whitespace-pre-line">
          {describe || googleDescribe}
        </p>
      </div>
    </div>
  );
};

export default NewsDetails;
