import React, { useEffect, useState } from 'react';  
import { getApi } from '../../core/services/api/getApi';
import Card from '../Common/Card';
import { useNavigate } from 'react-router';
import { getItem } from '../../core/services/common/storage.services';
import { Getmycourse } from '../../core/services/api/userpanelapi/panelapis';

const Panel3 = () => {
    const navigate = useNavigate();
    const token = (getItem("token"))
    console.log(token)

    if (token == "") {
        navigate("/Register-1")
    }  
    // const URL = "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=4&SortingCol=lastUpdate";  
    const [newCoursesData, setNewCoursesData] = useState([]);  

    useEffect(() => {  
        getNewCoursesData();  
    }, []);  

    const getNewCoursesData = async () => {  
        try {  
            const response = await Getmycourse();  
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
        <div className="flex flex-row-reverse flex-wrap w-9/10 ml-20 font-kalameh">
            <div className='flex flex-row-reverse flex-wrap w-7/10 '>  
                {/* top side */}  
 

                <div className='flex flex-row-reverse flex-wrap w-10/10 h-155 justify-center gap-8 mt-10 max-sm:overflow-auto max-sm:h-150 max-lg:h-150 max-lg:overflow-auto'>  
                    {/* map over newCoursesData */}  
                    {newCoursesData.length > 0 ? (                    
                        newCoursesData.map((course, index) => (  
                        <Card
                        
                        item={course}
                        index={index}
                        handleNavigation={handleNavigation}
                        key={index}
                      />
                    )) ) : (
                        <p className="text-center text-3xl mt-10 font-iransans">دوره ای وجود ندارد</p>
                    )}

                    {/* <GetMyCoursesReserve /> */}

                    {/* <Dashboard /> */}

                    {/* <Fave /> */}

                    {/* <Favenews />     */}

                    {/* <Personalinfo /> */}
                </div>  
                
            </div>  
        </div>  
    );  
};  

export { Panel3 };  