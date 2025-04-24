import React, { useEffect, useState } from 'react';  
import logo from '../../assets/userpanel/Logo.png';  
import home from '../../assets/userpanel/home.png';  
import courses from '../../assets/userpanel/Path 29.png';  
import ticket from '../../assets/userpanel/Path 30.png';  
import profile from '../../assets/userpanel/Path 31.png';  
import exit from '../../assets/userpanel/Path 32.png';  
// import userprofile from '../../assets/userpanel/profile-user.png';  
// import moon from '../../assets/userpanel/moon.png';  
import word from '../../assets/userpanel/word.png';  
import DOT from '../../assets/userpanel/Ellipse 2.PNG';  
import clock from '../../assets/userpanel/clock.png';  
import { getApi } from '../../core/services/api/getApi';
import Card from '../Common/Card';
import { useNavigate } from 'react-router';

const Panel = () => {  
    const URL = "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=4&SortingCol=lastUpdate";  
    const [newCoursesData, setNewCoursesData] = useState([]);  
    const navigate = useNavigate();
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
    const handleNavigation = (id) => {
        console.log(id)
        navigate(`Courses/${id}`); 
      };
    return (  
        <div className="flex flex-row-reverse flex-wrap w-9/10  ml-20 font-kalameh">  
            {/* right panel */}  
            <div className="w-3/11 bg-white h-180 rounded-2xl  max-sm:w-3/10">  
                <div className='flex items-end flex-row-reverse w-10/10 h-20 pr-9'>  
                    <img className='w-2/10' src={logo} alt="Logo" />  
                    <span className='text-deep-blue text-2xl font-bold mr-5 max-sm:text-xs max-sm:font-bold'>آکادمی سپهر</span>  
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

            <div className='flex flex-row-reverse flex-wrap w-7/10 '>  
                {/* top side */}  
                <div className='flex flex-row-reverse w-10/10 text-3xl h-15 pt-5'>  
                    <div className='flex flex-row-reverse w-6/10 pr-5 max-lg:w-10/10 max-sm:text-2xl'>  
                        آرمان غنی زاده عزیز؛ خوش اومدی 🙌  
                    </div>   
                </div>  

                <div className='flex flex-row-reverse flex-wrap w-10/10 h-auto justify-center gap-8 mt-10 max-sm:overflow-auto max-sm:h-150 max-lg:h-150 max-lg:overflow-auto '>  
                    {/* map over newCoursesData */}  
                    {newCoursesData.map((course, index) => (  
                        <Card
                        
                        item={course}
                        index={index}
                        handleNavigation={handleNavigation}
                        key={index}
                      />
                    ))}  
                </div>  
            </div>  
        </div>  
    );  
};  

export { Panel };  