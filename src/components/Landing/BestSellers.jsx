import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import Card from "../Common/Card";
import { getApi } from "../../core/services/api/getApi";

function BestSellers() {
  const URL = "/Home/GetCoursesTop?Count=4";

  const [coursesData, setCoursesData] = useState([]);
  useEffect(() => {
    getCoursesData();
  }, []);

  const getCoursesData = async () => {
    const response = await getApi(URL);
    setCoursesData(response);
    console.log("bestsellll", response);
  };

  const navigate = useNavigate();
  const handleNavigation = (id) => {
    navigate(`/Courses/${id}`);
  };

  return (
    <div className="z-10 my-24 flex max-w-[1641px] flex-col self-center py-8 text-center">
      <h2 className="font-peyda mb-13 text-5xl font-black text-[#267dff]">
        پرفروش‌ترین دوره‌ها
      </h2>

      {/* Grid Layout for Cards */}
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4">
        {coursesData&&coursesData.map((item, index) => (
          <Card
            item={item}
            index={index}
            handleNavigation={handleNavigation}
            key={index}
          />
        ))}
      </div>

      <a href="#" className="mt-6 inline-block text-blue-500 hover:underline">
        مشاهده همه
      </a>
    </div>
  );
}

export default BestSellers;
