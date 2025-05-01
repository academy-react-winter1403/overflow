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
import { Link, NavLink, useNavigate } from 'react-router';
import { GetMyCoursesReserve } from './GetMyCoursesReserve';
import { Dashboard } from './Dashboard';
import { getItem } from '../../core/services/common/storage.services';
import { Personalinfo } from './personalinfo';
import fave from '../../assets/userpanel/fave.png'
import favenews from '../../assets/userpanel/favenews.png'
import { Fave } from './fave';
import { Favenews } from './Favenews';
const Panel3 = () => {
    const navigate = useNavigate();
    const token = (getItem("token"))
    console.log(token)

    if (token == "") {
        navigate("/Register-1")
    }  
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
    const handleNavigation = (id) => {
        console.log(id)
        navigate(`Courses/${id}`); 
      };
    return (  
        <div className="flex flex-row-reverse flex-wrap w-9/10  ml-20 font-kalameh ">  
            {/* right panel */}  

            <div className="w-3/11 bg-white h-180 rounded-2xl  max-sm:w-3/10 dark:bg-gray-800 ">
                <div className='flex items-end flex-row-reverse w-10/10 h-20 pr-9'>
                    <img className='w-2/10' src={logo} alt="Logo" />
                    <span className='text-deep-blue text-2xl font-bold mr-5 max-sm:text-xs max-sm:font-bold'>آکادمی سپهر</span>
                </div>

                <div className="flex flex-col items-end w-10/10 h-100 mt-10">

                    <div className="text-2xl w-10/10 flex items-end flex-row-reverse pr-10 mt-5 hover:text-3xl transition-all duration-300 cursor-pointer max-lg:text-sm">
                        <img className="w-1/10" src={home} alt="داشبورد" />

                        <NavLink to='/Panel'
                        className={({ isActive }) => 
                        isActive ? 'font-bold text-3xl':'text-gray-500'}
                        >
                            <span className="mr-5 text-gray-500 dark:text-white">داشبورد</span>
                        </NavLink>

                    </div>

                    <div className="text-2xl w-10/10 flex items-end flex-row-reverse pr-10 mt-5 hover:text-3xl transition-all duration-300 cursor-pointer max-lg:text-sm">
                        <img className="w-1/10" src={courses} alt="دوره های من" />

                        <NavLink to='/panel/mycourse'
                        className={({isActive}) => 
                        isActive ? 'font-bold text-3xl':'text-gray-500'}
                        >

                            <span className="mr-5 text-gray-500 dark:text-white">دوره های من</span>
                        </NavLink>

                    </div>

                    <div className="text-2xl w-10/10 flex items-end flex-row-reverse pr-10 mt-5 hover:text-3xl transition-all duration-300 cursor-pointer max-lg:text-sm">
                        <img className="w-1/10" src={ticket} alt="دوره های رزرو شده" />

                        <NavLink to='/panel/coursereserve'
                         className={({isActive}) => 
                        isActive ? 'font-bold text-3xl':'text-gray-500'}
                        >
                            <span className="mr-5 text-gray-500 dark:text-white">دوره های رزرو شده</span>
                        </NavLink>

                    </div>    

                    <div className="text-2xl w-10/10 flex items-end flex-row-reverse pr-10 mt-5 hover:text-3xl transition-all duration-300 cursor-pointer max-lg:text-sm">
                        <img className="w-1/10" src={fave} alt=" دوره های مورد علاقه  " />

                        <NavLink to='/panel/favecourse'
                        className={({isActive}) => 
                        isActive ? 'font-bold text-3xl':''}
                        >
                            <span className="mr-5 text-gray-500 dark:text-white">دوره های مورد علاقه</span>
                        </NavLink>
                        
                    </div>      

                    <div className="text-2xl w-10/10 flex items-end flex-row-reverse pr-10 mt-5 hover:text-3xl transition-all duration-300 cursor-pointer max-lg:text-sm">
                        <img className="w-1/10" src={favenews} alt="اخبار مورد علاقه " />

                        <NavLink to='/panel/Favenews'
                        className={({isActive}) => 
                        isActive ? 'font-bold text-3xl':''}>
                            <span className="mr-5 text-gray-500 dark:text-white"> اخبار مورد علاقه  </span>
                        </NavLink>

                    </div>

                    <div className="text-2xl w-10/10 flex items-end flex-row-reverse pr-10 mt-5 hover:text-3xl transition-all duration-300 cursor-pointer max-lg:text-sm">
                        <img className="w-1/10" src={profile} alt="جزییات حساب" />

                        <NavLink to='/panelpersoninfo'
                        className={({isActive}) => 
                        isActive ? 'font-bold text-3xl':''}>
                            <span className="mr-5 text-gray-500 dark:text-white">جزییات حساب</span>
                        </NavLink>
                    </div>

                    <button
                        // onClick={logout}
                        className="text-2xl w-10/10 flex items-end flex-row-reverse pr-10 mt-5 hover:text-3xl transition-all duration-300 cursor-pointer max-lg:text-sm bg-transparent border-none"
                    >
                        <img className="w-1/10" src={exit} alt="خروج" />
                        <span className="mr-5 text-gray-500 dark:text-white">خروج</span>
                    </button>

                </div>

            </div> 

            <div className='flex flex-row-reverse flex-wrap w-7/10 '>  
                {/* top side */}  
  

                <div className='flex flex-row-reverse flex-wrap w-10/10 h-155 justify-center gap-8  max-sm:overflow-auto max-sm:h-150 max-lg:h-150 max-lg:overflow-auto'>  
                    {/* map over newCoursesData */}
                    {/* {newCoursesData.length > 0 ? (                    
                        newCoursesData.map((course, index) => (  
                        <Card
                        
                        item={course}
                        index={index}
                        handleNavigation={handleNavigation}
                        key={index}
                      />
                    )) ) : (
                        <p className="text-center text-3xl mt-10 font-iransans">دوره ای وجود ندارد</p>
                    )} */}

                    {/* <GetMyCoursesReserve /> */}

                    {/* <Dashboard /> */}

                    <Fave />

                    {/* <Favenews />     */}

                    {/* <Personalinfo /> */}
                </div>  
                
            </div>  
        </div>  
    );  
};  

export { Panel3 };  