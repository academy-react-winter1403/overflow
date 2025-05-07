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