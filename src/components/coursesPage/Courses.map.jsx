import { useEffect, useState } from 'react';
import productimg from '../../assets/Coursesimage/product-img.png';
import {TopCourses} from '../../core/services/api/GetCourses/Getapi.js'; // Adjust the import path as necessary


const Coursesmap = () => {
  const [courses, setCourses] = useState([]); 

  const fetchCourses = async () => {
    try {
      const response = await TopCourses(); 
      if (response) {
        console.log('Courses data:', response);
        setCourses(response); 
      }
    } catch (error) {
      console.log('errorfromgetcourses:', error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="absolute top-[610px] left-[-675px] rounded-4xl bg-white w-[470px] h-[320px]">
      <div className="relative rounded-4xl bg-white w-[470px] h-[320px]">
        <span className="absolute right-[40px] top-[20px] text-sky-800 font-bold text-2xl">دوره های مشابه</span>
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <div
              key={index}
              className="absolute right-[40px] top-[70px] w-[390px] h-[60px] rounded-2xl border-2"
            >
              <img
                className="ml-[305px] mt-[8px] w-[70px] rounded-2xl"
                src={course.image || productimg}
                alt={course.title}
              />
              <p className="mt-[-35px] mr-[35px]">{course.title}</p>
            </div>
          ))
        ) : (
          <p className="absolute right-[40px] top-[70px] text-gray-500">هیچ دوره‌ای یافت نشد</p>
        )}
      </div>
    </div>
  );
};

export { Coursesmap };