import { useEffect, useState } from 'react';
import productimg from '../../assets/Coursesimage/product-img.png';
import { getApi } from '../../core/services/api/getApi';
import SmartImage from '../Common/SmartImage';
import { Link } from 'react-router';

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
    <div className="rounded-4xl bg-white w-9/10 h-5/10 mr-13 overflow-hidden transition-all duration-300 dark:bg-gray-700">
      <div className="flex text-right flex-col h-auto">
        <span className="mt-3 mr-6 text-deep-blue font-bold text-2xl dark:text-white">دوره های مشابه</span>
        <div className="flex flex-row flex-wrap justify-end">
          {newCoursesData&&newCoursesData.map((course, index) => (

              <Link
              to={`/AllCourses/Courses/${course.courseId}`}
              key={index}
              className="flex flex-row-reverse border border-gray-300 mt-5 mr-5 rounded-3xl h-13 w-9/10 hover:scale-105 transition-transform duration-300 overflow-hidden"
            >
              <SmartImage className="w-10 h-10 rounded-3xl mr-3 mt-1"  src={course.tumbImageAddress || productimg} alt={`Course ${index + 1}`}/>
              {/* <img className="w-18 rounded-3xl m-2"  src={course.tumbImageAddress || productimg} alt={`Course ${index + 1}`} /> */}
              <div className='flex flex-row-reverse  w-10/10 font-iransans font-bold'>              
                <p className="mt-3 mr-3 w-40 text-right truncate ">{course.title || "No title available"}</p>
                <p className="mt-3 mr-3 w-2/10 text-right truncate ">{course.levelName || "No title available"}</p>
                <p className="mt-3 mr-3 w-3/10 text-right">{course.teacherName || "No title available"}</p>
              </div>
            </Link>

          ))}
        </div>
      </div>
    </div>
  );
};

export { Coursesmap };