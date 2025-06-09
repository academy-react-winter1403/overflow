import React, { useEffect, useState } from 'react';
import { getApi } from '../../core/services/api/getApi';
import teach from '../../assets/userpanel/icons8-user-30.png';
import courseimg from '../../assets/userpanel/word.png';
import SmartImage from '../Common/SmartImage';
import { Link } from 'react-router';


const ExistingCourseMap = () => {


    const URL = "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=2&SortingCol=lastUpdate";
    const [newCoursesData, setNewCoursesData] = useState([]);

    const getNewCoursesData = async () => {
        try {
            const response = await getApi(URL, "courseFilterDtos");
            setNewCoursesData(response); 
 
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    useEffect(() => {
        getNewCoursesData();
    }, []);

    return (
        <div  className="flex flex-col gap-5 ">
            {newCoursesData&&newCoursesData.map((course, index) => (
                <Link to={`/AllCourses/Courses/${course.courseId}`} key={index} className="flex flex-row justify-center">
                    <div className="  flex flex-row items-center bg-gray-100 rounded-2xl w-9/10 h-25 dark:bg-gray-700 dark:border dark:border-white hover:scale-105 transition-transform duration-300 ">
                        <div className="flex flex-row-reverse justify-end items-end gap-5 w-5/10 ">
                           
                            <p className="text-orange-400 max-xl:hidden  max-lg:flex max-sm:hidden">{course.lastUpdate.slice(0,10) || "چهارشنبه ها . ۱۷:۳۰"}</p>
                            <SmartImage className="ml-5 w-25 h-20 rounded-2xl max-lg:w-20 transition-all duration-300" src={course.tumbImageAddress || courseimg} alt="Course" />
                        </div>
                        <div className="  max-lg:pr-0 max-lg:h-20 max-lg:w-10/10 flex flex-col w-5/10 text-right gap-10 pr-5  max-xl:w-6/10 max-xl:gap-3 transition-all duration-300 max-lg:text-sm">
                           
                            <p className='pr-2 truncate  max-lg:w-10/10 max-lg:h-10 max-lg:pt-2'>{course.title || "آموزش Tailwind css"}</p>
                            <div className=" flex flex-row gap-5 justify-end max-xl:truncate">
                                {course.teacherName || "مهدی اصغری"}
                                <img className="w-5 h-5" src={teach} alt="Teacher" />
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export { ExistingCourseMap };