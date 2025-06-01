import React, {  useEffect, useState } from "react";
import { getApi } from "../../core/services/api/getApi";
import SmallCard from "../Common/SmallCard.jsx";

function CourseCategories() {
  // console.log(params)
  const URL = "/Home/GetTechnologies";

  const [newCoursesData, setNewCoursesData] = useState([]);

  useEffect(() => {
    getNewCoursesData();
  }, []);

  const getNewCoursesData = async () => {
    const response = await getApi(URL);
    setNewCoursesData(response);
    console.log("NewCourse",response);
  };


  return (
    <div className="max-w-[1641px] z-10 flex flex-col mx-auto py-8 mb-80">
      <h2 className="text-5xl font-peyda font-black text-deep-blue mb-28">  پر طرفدارترین ها </h2>

      <div className="flex flex-wrap justify-center gap-12">
        {newCoursesData&&newCoursesData.slice(0,4).map((item, index) => (
          <SmallCard
            item={item}
            index={index}
            key={index}
          />
        ))}
      </div>

      <a href="#" className="flex flex-row justify-start font-bold mt-6 text-blue-500 hover:underline ">مشاهده همه</a>
    </div>
  );
}

export default CourseCategories;