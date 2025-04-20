import React, { useEffect, useState } from "react";
import { useNavigate, useParams,NavLink } from "react-router-dom";
import { getApi } from "../../core/services/api/getApi";
import SmartImage from "../../components/Common/SmartImage";
import fallbackNews from "../../assets/News/newspaper.png";
const NewsDetails = () => {
  const [newsData, setNewsData] = useState(null);
  const { id } = useParams(); // Get the news ID from URL
  const URL = `/News/${id}`;
  const navigate = useNavigate();


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
const handelNavigate=()=>{

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

  // addUserFullName: "امیرررر-حسینی"

  // currentDissLikeCount: 189
  // currentLikeCount: 473
  // describe: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده ازلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده ازلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از"
  googleDescribe: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان ";
  insertDate: "2025-02-22T08:57:20.02";
  miniDescribe: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از";
  newsCatregoryId: 2;
  newsCatregoryName: "arasdasdda";
  title: "یک خبر تستی222";
  userId: 40322;
  return (
    <div className=" mx-auto p-6">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          {title || googleTitle}
        </h1>
        {miniDescribe && (
          <p className="mt-2 text-lg text-gray-600">{miniDescribe}</p>
        )}
      </header>

      <div className="mb-6">
          <SmartImage
            src={currentImageAddress||currentImageAddressTumb}
            fallback={fallbackNews}
            className="w- h-full object-cover rounded-lg shadow-lg"
          />
        
        <p className="text-lg text-gray-700 whitespace-pre-line">
          {describe || googleDescribe}
        </p>
        <p>{addUserFullName}</p>
        <p>{new Date(insertDate).toLocaleDateString("fa-IR")}</p>
        <p>{new Date(insertDate).toLocaleTimeString("fa-IR")}</p>
        <NavLink to={`/News?NewsCategoryId=${newsCatregoryId}`} className="w-[108px] bg-deep-blue text-white h-[27px] rounded-[50px] ">{newsCatregoryName}</NavLink>
      </div>
    </div>
  );
};

export default NewsDetails;
