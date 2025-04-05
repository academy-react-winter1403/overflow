import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getApi } from "../../core/services/api/getApi";

function NewCourses() {

  const URL = "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=4&SortingCol=lastUpdate";

  const [newCoursesData, setNewCoursesData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getNewCoursesData();
  }, []);

  const getNewCoursesData = async () => {
    const response = await getApi(URL, "courseFilterDtos");
    setNewCoursesData(response);
    // console.log(response);
  };

  const handleNavigation = (courseId) => {
    navigate(`/courses/${courseId}`); 
  };

  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold text-blue-500 mb-6">جدید ترین دوره ها</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {newCoursesData.map((item, index) => (
          <div
            className="bg-white rounded-lg shadow-lg w-64 p-4 text-right cursor-pointer"
            key={index}
            onClick={() => handleNavigation(item.id)} 
          >
            <img
              src={item.tumbImageAddress}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{item.describe}</p>
            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
              <span>{item.teacherName}</span>
              <span>{item.duration}</span>
            </div>
            <span className="text-green-600 font-bold">{item.cost}</span>
          </div>
        ))}
      </div>

      <a href="#" className="inline-block mt-6 text-blue-500 hover:underline">مشاهده همه</a>
    </div>
  );
}

export default NewCourses;