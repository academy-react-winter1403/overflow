import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
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
      <h2 className="font-peyda mb-13 text-5xl font-black text-deep-blue">
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

      <Link to="/AllCourses" className=" font-bold mt-6 flex flex-row justify-start text-blue-500 hover:underline">
        مشاهده همه
      </Link>
    </div>
  );
}

export default BestSellers;
