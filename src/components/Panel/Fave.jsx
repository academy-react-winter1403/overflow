import React, { useEffect, useState } from 'react';
import profile from '../../assets/userpanel/Path 31.png';
import { favecourse } from '../../core/services/api/userpanelapi/panelapis';
    

const Fave = () => {

    const [fave, setFave] = useState([]); 
    const getFaveCourse = async () => {
        try {
            const response = await favecourse();
            setFave(response || []); 
        } catch (error) {
            console.error('Error fetching favorite courses:', error);
        }
    };

    useEffect(() => {
        getFaveCourse();
    }, []);

    return (

        <div className="w-full flex flex-col h-full font-kalameh font-bold text-2xl  pt-10">

            
            <div className="border-b-4 border-deep-blue flex flex-row-reverse justify-center gap-20 pr-10">
                <p>نام دوره</p>
                <p>مدرس دوره</p>
                <p>تاریخ شروع</p>
                <p>قیمت (تومان)</p>
                <p>وضعیت</p>
            </div>

            {fave.length > 0 ? (
                fave.map((reserve, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 rounded-2xl w-11/12 h-20 mt-5 flex flex-row-reverse justify-start pr-5 gap-2 items-center m-auto dark:bg-gray-500"
                    >
                        <img className="w-15 h-15" src={profile} alt="Course profile" />
                        <div className="w-2/10 h-full">{reserve.courseName || 'No Name'}</div>
                        <div className="w-2/10 h-full">{reserve.teacherName || 'No Teacher'}</div>
                        <div className="w-2/10 h-full">{reserve.startDate || 'No Date'}</div>
                        <div className="w-2/10 h-full">{reserve.price || 'No Price'}</div>
                        <div className="w-2/10 h-full">{reserve.status || 'No Status'}</div>
                    </div>
                ))
            ) : (
                <p className="text-center mt-10">دوره ای وجود ندارد</p> // Corrected JSX element syntax
            )}
        </div>
    );
};

export { Fave };