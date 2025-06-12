import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
import { Getmycourse } from "../../core/services/api/userpanelapi/panelapis";
import MycourseCard from "../Common/MycourseCard";

const Panel3 = () => {
  // const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const [newCoursesData, setNewCoursesData] = useState([]);
  const getNewCoursesData = async () => {
    try {
      const response = await Getmycourse();
      if (Array.isArray(response.listOfMyCourses)) {
        const filteredCourses = response.listOfMyCourses.filter(
          (course) => course.paymentStatus !== "پرداخت شده",
        );
        setNewCoursesData(filteredCourses);
      } else {
        console.error("Unexpected response format:", response);
      }
    } catch (error) {
      console.error("Error fetching courses data:", error);
    }
  };

  useEffect(() => {
    getNewCoursesData();
  }, []);

  // const handleNavigation = (id) => {
  //   console.log(id);
  //   navigate(`/Courses/${id}`);
  // };

  const filtermycours = newCoursesData.filter(
    (mycourse) =>
      mycourse?.courseTitle
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      mycourse?.describe?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mycourse?.fullName?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="font-kalameh flex w-10/10 flex-row-reverse flex-wrap">
      <div className="flex w-10/10 flex-row-reverse flex-wrap">
        <div>
          <input
            type="text"
            placeholder="جستجو دوره..."
            className="mt-5 mr-5 w-90 rounded-lg border border-gray-400 p-2 text-right max-sm:w-50"
            value={searchQuery}
            onChange={(mycourse) => setSearchQuery(mycourse.target.value)}
          />
        </div>

        <div className="mt-10 flex h-155 w-10/10 flex-col items-end gap-8 overflow-auto max-lg:h-150 max-lg:overflow-auto max-sm:h-150 max-sm:gap-0 max-sm:overflow-auto">
          <div className="border-deep-blue flex w-10/10 flex-row-reverse justify-center border-b-4 pr-10 max-md:justify-start max-md:gap-8 max-md:text-xl">
            <p className="w-4/10 text-center text-xl font-bold transition-all duration-300 max-lg:mr-[-100px] max-lg:w-5/10 max-md:mr-[-1px]">
              نام دوره
            </p>
            <p className="w-3/10 pl-15 text-center text-xl font-bold transition-all duration-300 max-xl:mr-[-65px] max-xl:hidden max-lg:w-5/10 max-lg:text-center max-md:hidden">
              مدرس دوره
            </p>
            <p className="w-3/10 pr-15 text-right text-xl font-bold transition-all duration-300 max-lg:hidden">
              تاریخ شروع
            </p>
            <p className="w-3/10 pl-30 text-center text-xl font-bold transition-all duration-300 max-xl:pl-0">
              قیمت
            </p>
          </div>
          {filtermycours.length > 0 ? (
            filtermycours.map((course, index) => (
              <MycourseCard
                item={course}
                index={index}
                // handleNavigation={handleNavigation}
                key={index}
              />
            ))
          ) : (
            <p className="font-iransans m-auto text-center text-3xl">
              دوره ای وجود ندارد
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export { Panel3 };
