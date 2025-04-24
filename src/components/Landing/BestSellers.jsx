import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
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
    console.log("bestsellll", response)
  };
  const navigate = useNavigate();
  const handleNavigation = (id) => {

    // console.log(id)
    navigate(`/Courses/${id}`); 
  };

  return (
    <div className="relative z-10 text-center py-48">
      <h2 className="text-6xl font-peyda font-black text-deep-blue mb-13">
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
      <div className="z-10 w-full pl-20 pt-10 text-left">
        <NavLink to={"/AllCourses"}
         className="font-vazir self-start text-2xl font-bold text-gray-700 hover:cursor-pointer">
          مشاهده همه
        </NavLink>
      </div>
    </div>
  );
}

export default BestSellers;
