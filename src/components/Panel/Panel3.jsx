import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getApi } from '../../core/services/api/getApi';
import Card from '../Common/Card';
import { getItem } from '../../core/services/common/storage.services';
import { Getmycourse } from '../../core/services/api/userpanelapi/panelapis';

const Panel3 = () => {
    const navigate = useNavigate();


    const [newCoursesData, setNewCoursesData] = useState([]);

    const getNewCoursesData = async () => {
        try {
            const response = await Getmycourse();
            if (Array.isArray(response)) {
                setNewCoursesData(response);
            } else {
                console.error("Unexpected response format:", response);
            }
        } catch (error) {
            console.error("Error fetching courses data:", error);
        }
    };


    useEffect(() => {

        getNewCoursesData();
    }, []);

    const handleNavigation = (id) => {
        console.log(id);
        navigate(`/Courses/${id}`);
    };

    return (
        <div className="flex flex-row-reverse flex-wrap w-10/10 font-kalameh">
            <div className='flex flex-row-reverse flex-wrap w-10/10'>
                <div className='flex flex-row-reverse flex-wrap w-10/10 h-155 justify-center gap-8 mt-10 max-sm:overflow-auto max-sm:h-150 max-lg:h-150 max-lg:overflow-auto'>
                    {newCoursesData.length > 0 ? (
                        newCoursesData.map((course, index) => (
                            <Card
                                item={course}
                                index={index}
                                handleNavigation={handleNavigation}
                                key={index}
                            />
                        ))
                    ) : (
                        <p className="text-center text-3xl m-auto font-iransans">
                            دوره ای وجود ندارد
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export { Panel3 };