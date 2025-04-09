import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Card from "../Common/Card";
import { getApi } from "../../core/services/api/getApi";
function BestSellers() {
  const URL="/Home/GetCoursesTop?Count=4"

  const [coursesData, setCoursesData] = useState([]);
  useEffect(() => {
    getCoursesData();

  }, []);
  const getCoursesData = async () => {
    const response = await getApi(
      URL)
    setCoursesData(response);
    // console.log(response)
  };
  const navigate = useNavigate();
  const handleNavigation = (id) => {
    // console.log(id)
    navigate(`/Courses/${id}`); 
  };

  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold text-blue-500 mb-6">
        پرفروش‌ترین دوره‌ها
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {coursesData.map((item, index) => (<  Card 
        item={item}
        index={index}
        handleNavigation={handleNavigation}
        key={index}     
        />
        ))}
      </div>
      <a href="#" className="inline-block mt-6 text-blue-500 hover:underline">
        مشاهده همه
      </a>
    </div>
  );
}

export default BestSellers;
