import React, { useEffect, useState } from 'react';
import { getApi } from '../../core/services/api/getApi';
import teach from '../../assets/userpanel/tech.png';
import courseimg from '../../assets/userpanel/word.png';


const ExistingCourseMap = () => {


    const URL = "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=2&SortingCol=lastUpdate";
    const [newCoursesData, setNewCoursesData] = useState([]);

    const getNewCoursesData = async () => {
        try {
            const response = await getApi(URL, "courseFilterDtos");
            setNewCoursesData(response); 
            console.log("NewCourse:", response);
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    useEffect(() => {
        getNewCoursesData();
    }, []);

    return (
        <div className="flex flex-col gap-5">
            {newCoursesData&&newCoursesData.map((course, index) => (
                <div key={index} className="flex flex-row justify-center">
                    <div className="flex flex-row items-center bg-gray-100 rounded-2xl w-9/10 h-25 dark:bg-gray-700 dark:border dark:border-white">
                        <div className="flex flex-row-reverse justify-end items-end gap-5 w-5/10 ">
                           
                            <p className="text-orange-400 max-xl:hidden">{course.lastUpdate.slice(0,10) || "چهارشنبه ها . ۱۷:۳۰"}</p>
                            <img className="ml-5 w-25 h-20 rounded-2xl max-lg:w-20 transition-all duration-300" src={course.tumbImageAddress || courseimg} alt="Course" />
                        </div>
                        <div className="flex flex-col w-5/10 text-right gap-10 pr-5  max-xl:w-6/10 max-xl:gap-3 transition-all duration-300 max-lg:text-sm max-lg:w-4/10">
                           
                            <p>{course.title || "آموزش Tailwind css"}</p>
                            <div className="flex flex-row gap-5 justify-end max-lg:hidden">
                                {course.teacherName || "مهدی اصغری"}
                                <img className="w-5 h-5" src={teach} alt="Teacher" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export { ExistingCourseMap };