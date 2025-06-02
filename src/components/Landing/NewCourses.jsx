import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../Common/Card";
import { useGetNewCourses } from "../../core/services/ReactQuery/useCourses";


function NewCourses() {
  const { data: courses = [], isLoading, error } = useGetNewCourses();
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`AllCourses/Courses/${id}`);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2 xl:grid-cols-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="h-48 rounded-t-lg bg-gray-200"></div>
            <div className="rounded-b-lg bg-white p-4">
              <div className="mb-2 h-4 w-3/4 rounded bg-gray-200"></div>
              <div className="h-4 w-1/2 rounded bg-gray-200"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center text-red-500">Error loading courses</div>
    );
  }

  return (
    <div className="z-10 my-24 flex max-w-[1641px] flex-col self-center py-8 text-center">
      <h2 className="font-peyda text-deep-blue mb-13 text-5xl font-black max-sm:text-2xl">
        جدید ترین دوره ها
      </h2>

      <div className="mt-4 grid grid-cols-1 gap-4 max-lg:flex max-lg:flex-row max-lg:flex-wrap max-lg:justify-center lg:grid-cols-2 xl:grid-cols-4 max-lg:h-98 max-lg:overflow-hidden">
        {courses.map((item) => (
          <Card
            item={item}
            handleNavigation={handleNavigation}
            key={item.courseId.toString()}
          />
        ))}
      </div>

      <Link
        to="/AllCourses"
        className="mt-6 flex flex-row justify-start font-bold text-blue-500 hover:underline max-sm:ml-10"
      >
        مشاهده همه
      </Link>
    </div>
  );
}

export default NewCourses;
