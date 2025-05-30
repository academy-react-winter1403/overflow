import React, { useEffect, useState } from 'react';
import profile from '../../assets/userpanel/Path 31.png';
import { favecourse } from '../../core/services/api/userpanelapi/panelapis';
import SmartImage from '../Common/SmartImage';

const Fave = () => {
    const [fave, setFave] = useState([]);

    const getFaveCourse = async () => {
        try {

            const response = await favecourse();
            

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
            <div className="border-b-4 border-deep-blue flex flex-row-reverse justify-center  pr-35 max-md:gap-8 max-md:text-xl max-md:justify-start ">
                <p className=' w-4/10 text-right'>نام دوره</p>
                <p className=' w-3/10 text-right'>مدرس دوره</p>
                <p className=' w-3/10 text-right pr-5'>سطح دوره</p>
                <p className=' w-3/10 text-right pr-6'>وضعیت</p>
            </div>

            {fave.length > 0 ? (
                fave.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 rounded-2xl w-11/12 h-20 flex flex-row-reverse justify-start pr-5 mt-3 items-center m-auto dark:bg-gray-500 hover:bg-gray-400 gap-3"
                    >
                        
                        <div className=' w-1/10 justify-end flex flex-row'>
                            <SmartImage src={item?.tumbImageAddress} fallback={profile} alt={item.title} className=" w-12 h-12 rounded-[50px] " />
                        </div>
                        <div className="pt-5 w-3/10 h-full text-right pr-5 truncate">{item.courseTitle || 'No Name'}</div>
                        <div className="pt-5 w-3/10 h-full text-right ">{item.teacheName || 'No Teacher'}</div>
                        <div className="pt-5 w-3/10 h-full  text-right">{item.lastUpdate.slice(0,10) || 'No Date'}</div>
                        {/* <div className="pt-5 w-2/10 h-full">{item.price || 'No Price'}</div> */}
                        <div className="pt-5 w-2/10 h-full text-right">{item.typeName || 'No Status'}</div>
                    </div>
                ))
            ) : (
                <p className="text-center mt-10">دوره ای وجود ندارد</p>
            )}
        </div>
    );
};

export { Fave };