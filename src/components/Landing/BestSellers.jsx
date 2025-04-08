import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getApi } from "../../core/services/api/getApi";
function BestSellers() {
  const URL="/Home/GetCoursesTop?Count=4"

  const [newCoursesData, setNewCoursesData] = useState([]);
  useEffect(() => {
    getNewCoursesData();

  }, []);
  const getNewCoursesData = async () => {
    const response = await getApi(
      URL)
    setNewCoursesData(response);
    // console.log(response)
  };
  const navigate = useNavigate();
  const handleNavigation = (id) => {
    console.log(id)
    navigate(`/Courses/${id}`); 
  };

  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold text-blue-500 mb-6">
        پرفروش‌ترین دوره‌ها
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {newCoursesData.map((item, index) => (
          <div onClick={()=>handleNavigation(item.courseId)}
            className="bg-white rounded-lg shadow-lg w-64 p-4 text-right"
            key={index}
          >
            <img
              src={item.tumbImageAddress}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{item.describe}</p>
            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
              <span>{item.teacherName}</span>
              <span>{item.duration}</span>
            </div>
            <span className="text-green-600 font-bold">{item.cost}</span>
          </div>
        ))}
      </div>
      <a href="#" className="inline-block mt-6 text-blue-500 hover:underline">
        مشاهده همه
      </a>
    </div>
  );
}

export default BestSellers;
