import React, { useState, useEffect } from "react";
import bgShape from "../../assets/landing/bubbleBack.png";
import { Techerscard } from "./teachercard";
import { getApi } from "../../core/services/api/getApi";

const AllTeacers = () => {
  const [teacherData, setTeacherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getTeacherDetails = async () => {
    try {
      const response = await getApi("/Home/GetTeachers");
      setTeacherData(response);
      // console.log(response);
    } catch (err) {
      console.error("Error fetching teacher details:", err.message);
      setError("Failed to load teacher details.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTeacherDetails();
  }, []); 

  return (
    <div className="w-9/10 h-200 m-auto relative">
      <div className="w-full h-20  mt-5 font-Kalameh text-4xl text-[#475466] text-right dark:text-white ">
        اساتید
      </div>
      <div className="w-full h-21 mb-18 text-right bg-white  rounded-3xl dark:bg-gray-400/95 "> 
        <div className="text-4xl text-black mr-5 leading-18">خانه</div>
      </div>
  
      <img
        src={bgShape}
        alt="Background Shape"
        className="absolute w-[1099px] h-[1099px] opacity-98 top-50 left-250"
      />
  
      {isLoading ? (
        <p className="text-center mt-10 text-gray-500">در حال بارگذاری...</p>
      ) : error ? (
        <p className="text-center mt-10 text-red-500">{error}</p>
      ) : (
        teacherData?.map((item, index) => (
          <Techerscard key={index} item={item} />
        ))
      )}
    </div>
  );
  
};

export { AllTeacers };
