import { useEffect, useState } from "react";
import productimg from "../../assets/Coursesimage/product-img.png";
import { getApi } from "../../core/services/api/getApi";
import SmartImage from "../Common/SmartImage";
import { Link } from "react-router";

const Coursesmap = ({ data }) => {
  const courseData = data || {};

  const URL =
    "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=4&SortingCol=lastUpdate";

  const [newCoursesData, setNewCoursesData] = useState([]);

  useEffect(() => {
    getNewCoursesData();
  }, []);

  const getNewCoursesData = async () => {
    try {
      const response = await getApi(URL, "courseFilterDtos");
      setNewCoursesData(response);
      // console.log("NewCoursemap :", response);
    } catch (error) {
      console.error("Error fetching courses data:", error);
    }
  };

  // console.log("courseData", courseData);

  return (
    <div className="mr-13 h-5/10 w-9/10 overflow-hidden rounded-4xl bg-white transition-all duration-300 dark:bg-gray-700">
      <div className="flex h-auto flex-col text-right">
        <span className="text-deep-blue mt-3 mr-6 text-2xl font-bold dark:text-white">
          دوره های مشابه
        </span>
        <div className="flex flex-row flex-wrap justify-end">
          {newCoursesData &&
            newCoursesData.map((course, index) => (
              <Link
                to={`/AllCourses/Courses/${course.courseId}`}
                key={index}
                className="mt-5 mr-5 flex h-13 w-9/10 flex-row-reverse overflow-hidden rounded-3xl border border-gray-300 transition-transform duration-300 hover:scale-105"
              >
                <SmartImage
                  className="mt-1 mr-3 h-10 w-10 rounded-3xl"
                  src={course.tumbImageAddress || productimg}
                  alt={`Course ${index + 1}`}
                />
                {/* <img className="w-18 rounded-3xl m-2"  src={course.tumbImageAddress || productimg} alt={`Course ${index + 1}`} /> */}
                <div className="font-iransans flex w-10/10 flex-row-reverse font-bold">
                  <p className="mt-3 mr-3 w-40 truncate text-right">
                    {course.title || "No title available"}
                  </p>
                  <p className="mt-3 mr-3 w-2/10 truncate text-right max-xl:hidden">
                    {course.levelName || "No title available"}
                  </p>
                  <p className="mt-3 mr-3 w-3/10 text-right max-xl:w-5/10 transition-all duration-300">
                    {course.teacherName || "No title available"}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export { Coursesmap };
