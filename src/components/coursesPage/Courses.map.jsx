import { useEffect, useState } from 'react';
import productimg from '../../assets/Coursesimage/product-img.png';
import { getApi } from '../../core/services/api/getApi';

const Coursesmap = ({ data }) => {
  const courseData = data || {};
  const URL = "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=4&SortingCol=lastUpdate";

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
    <div className="rounded-4xl bg-white w-9/10 h-5/10 mr-13 overflow-auto transition-all duration-300 dark:bg-gray-700">
      <div className="flex text-right flex-col h-auto">
        <span className="mt-3 mr-6 text-deep-blue font-bold text-2xl dark:text-white">دوره های مشابه</span>
        <div className="flex flex-row flex-wrap justify-end">
          {newCoursesData.map((course, index) => (
            <div
              key={index}
              className="flex flex-row-reverse border border-gray-300 mt-5 mr-5 rounded-3xl h-13 w-9/10"
            >
              <img className="w-18 rounded-3xl m-2" src={course.tumbImageAddress || productimg} alt={`Course ${index + 1}`} />
              <p className="mt-3">{course.title || "No title available"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Coursesmap };