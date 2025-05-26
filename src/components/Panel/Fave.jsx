import React, { useEffect, useState } from 'react';
import profile from '../../assets/userpanel/Path 31.png';
import { favecourse } from '../../core/services/api/userpanelapi/panelapis';

const Fave = () => {
    const [fave, setFave] = useState([]);

    const getFaveCourse = async () => {
        try {

            const response = await favecourse();
            
            console.log('api data from favecourse :',response)
            setFave(response.favoriteCourseDto || []);
        } catch (error) {
            console.error('Error fetching favorite courses:', error);
        }
    };

    useEffect(() => {
        getFaveCourse();
    }, []);


    return (
        <div className="w-full flex flex-col h-full font-kalameh font-bold text-2xl pt-10 ">
            <div className="border-b-4 border-deep-blue flex flex-row-reverse justify-center gap-32 pr-10 max-md:gap-8 max-md:text-xl max-md:justify-start">
                <p>نام دوره</p>
                <p>مدرس دوره</p>
                <p>تاریخ شروع</p>
                <p className="max-md:hidden">قیمت (تومان)</p>
                <p>وضعیت</p>
            </div>

            {fave.length > 0 ? (
                fave.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 rounded-2xl w-11/12 h-20 flex flex-row-reverse justify-start pr-5 mt-5 items-center m-auto dark:bg-gray-500  "
                    >
                        <img className=" w-15 h-15 rounded-[50px]" src={item.tumbImageAddress || profile} alt="Course profile" />
                        <div className="pt-5 w-2/10 h-full">{item.courseTitle || 'No Name'}</div>
                        <div className="pt-5 w-2/10 h-full">{item.teacheName || 'No Teacher'}</div>
                        <div className="pt-5 w-2/10 h-full">{item.lastUpdate.slice(0,10) || 'No Date'}</div>
                        <div className="pt-5 w-2/10 h-full">{item.price || 'No Price'}</div>
                        <div className="pt-5 w-2/10 h-full">{item.typeName || 'No Status'}</div>
                    </div>
                ))
            ) : (
                <p className="text-center mt-10">دوره ای وجود ندارد</p>
            )}
        </div>
    );
};

export { Fave };