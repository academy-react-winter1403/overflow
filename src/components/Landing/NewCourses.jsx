import React, {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getApi } from "../../core/services/api/getApi";
import Card from "../Common/Card";
function NewCourses() {
  // console.log(params)
  const URL = "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=4&SortingCol=lastUpdate";

  const [newCoursesData, setNewCoursesData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getNewCoursesData();
  }, []);

  const getNewCoursesData = async () => {
    const response = await getApi(URL, "courseFilterDtos");
    setNewCoursesData(response);
    // console.log("NewCourse",response);
  };

  const handleNavigation = (id) => {
    console.log(id)
    navigate(`AllCourses/Courses/${id}`); 
  };

  return (
    <div className="flex self-center flex-col max-w-[1641px] z-10  text-center my-24 py-8  ">
      <h2 className="text-5xl font-peyda font-black text-[#267dff] mb-13">جدید ترین دوره ها</h2>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4  max-lg:flex max-lg:flex-row max-lg:flex-wrap max-lg:justify-center">
      {newCoursesData&&newCoursesData.map((item, index) => (

          <Card
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

export default NewCourses;