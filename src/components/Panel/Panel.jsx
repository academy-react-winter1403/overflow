import React, { useEffect, useState } from 'react';  
import logo from '../../assets/userpanel/Logo.png';  
import home from '../../assets/userpanel/home.png';  
import courses from '../../assets/userpanel/Path 29.png';  
import ticket from '../../assets/userpanel/Path 30.png';  
import profile from '../../assets/userpanel/Path 31.png';  
import exit from '../../assets/userpanel/Path 32.png';  
import userprofile from '../../assets/userpanel/profile-user.png';  
import moon from '../../assets/userpanel/moon.png';  
import word from '../../assets/userpanel/word.png';  
import DOT from '../../assets/userpanel/Ellipse 2.PNG';  
import clock from '../../assets/userpanel/clock.png';  
import { getApi } from '../../core/services/api/getApi';

const Panel = () => {  
    const URL = "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=4&SortingCol=lastUpdate";  
    const [newCoursesData, setNewCoursesData] = useState([]);  

    useEffect(() => {  
        getNewCoursesData();  
    }, []);  

    const getNewCoursesData = async () => {  
        try {  
            const response = await getApi(URL, "courseFilterDtos");  
            setNewCoursesData(response);  
            console.log("NewCoursemap:", response);  
        } catch (error) {  
            console.error("Error fetching courses data:", error);  
        }  
    };  

    return (  
        <div className="flex flex-row-reverse flex-wrap w-9/10 border-2 bg-gray-100 ml-20">  
            {/* right panel */}  
            <div className="w-3/10 bg-white h-180 rounded-2xl">  
                <div className='flex items-end flex-row-reverse w-10/10 h-20 pr-9'>  
                    <img className='w-2/10' src={logo} alt="Logo" />  
                    <span className='text-deep-blue text-2xl font-bold mr-5'>آکادمی سپهر</span>  
                </div>  

                <div className='flex flex-col items-end w-10/10 h-100 mt-10'>  
                    {[  
                        { icon: home, label: 'پیشخوان' },  
                        { icon: courses, label: 'دوره های من' },  
                        { icon: ticket, label: 'تیکت ها' },  
                        { icon: profile, label: 'جزییات حساب' },  
                        { icon: exit, label: 'خروج' }  
                    ].map(({ icon, label }) => (  
                        <div className='w-10/10 flex items-end flex-row-reverse pr-10 mt-5' key={label}>  
                            <img className='w-1/10' src={icon} alt={label} />  
                            <span className='mr-5 text-gray-500'>{label}</span>  
                        </div>  
                    ))}  
                </div>  
            </div>  

            <div className='flex flex-row-reverse flex-wrap w-7/10 border-2'>  
                {/* top side */}  
                <div className='flex flex-row-reverse w-10/10 text-3xl h-15 pt-5'>  
                    <div className='flex flex-row-reverse w-6/10 pr-5'>  
                        آرمان غنی زاده عزیز؛ خوش اومدی 🙌  
                    </div>  
                    <div className='pl-2 flex flex-row w-3/10 gap-2.5 mr-21'>  
                        <img src={userprofile} alt="User Profile" />  
                        <img src={moon} alt="Night Mode" />  
                    </div>  
                </div>  

                <div className='flex flex-row-reverse w-10/10 h-auto justify-center gap-8 mt-[-150px]'>  
                    {/* map over newCoursesData */}  
                    {newCoursesData.map((course, index) => (  
                        <div key={index} className='flex flex-row-reverse flex-wrap w-3/10 h-80 bg-white rounded-2xl justify-center'>  
                            <img className='w-9/10 h-40 mt-[-40px]' src={word} alt="Course Thumbnail" />  
                            <div className='flex flex-col text-right w-10/10 rounded-2xl mt-[-190px]'>  
                                <h1 className='w-10/10 pr-6 mt-45'>{course.title}</h1>  
                                <span className='pt-2 pr-6 text-xs'>{course.description}</span>  
                                <div className='flex flex-row text-right items-end justify-end pr-7 mt-5'>  
                                    <p className='text-xs text-deep-blue mr-1'>{course.instructor}</p>  
                                    <img className='w-1/30' src={DOT} alt="Dot" />  
                                </div>  
                                <div className='flex flex-row-reverse items-end justify-end mt-5 pt-2 border-t-2 border-gray-300 w-9/10 ml-3'>  
                                    <div className='text-white items-center justify-start flex bg-gray-400 rounded-2xl w-5/10 ml-20 pl-2'>  
                                        {course.time}  
                                        <img className='ml-5' src={clock} alt="Clock" />  
                                    </div>  
                                    <span className='text-deep-blue'>رایگان!</span>  
                                </div>  
                            </div>  
                        </div>  
                    ))}  
                </div>  
            </div>  
        </div>  
    );  
};  

export { Panel };  