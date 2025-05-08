import React, {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getApi } from "../../core/services/api/getApi";
import SmallCard from "../Common/SmallCard.jsx";

function CourseCategories() {
  // console.log(params)
  const URL = "/Home/GetTechnologies";

  const [newCoursesData, setNewCoursesData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getNewCoursesData();
  }, []);

  const getNewCoursesData = async () => {
    const response = await getApi(URL);
    setNewCoursesData(response);
    console.log("NewCourse",response);
  };

  const handleNavigation = (id) => {
    console.log(id)
    navigate(`Courses/${id}`); 
  };

  return (
    <div className="max-w-[1641px] z-10 flex flex-col mx-auto py-8 mb-80">
      <h2 className="text-5xl font-peyda font-black text-deep-blue mb-28"> دسته بندی </h2>

      <div className="flex flex-wrap justify-center gap-12">
        {newCoursesData&&newCoursesData.slice(0,4).map((item, index) => (
          <SmallCard
            item={item}
            index={index}
            handleNavigation={handleNavigation}
            key={index}
          />
        ))}
      </div>

      <a href="#" className="inline-block mt-6 text-blue-500 hover:underline">مشاهده همه</a>
    </div>
  );
}

export default CourseCategories;