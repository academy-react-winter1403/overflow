import React, { useEffect, useState } from 'react';
import profile from '../../assets/userpanel/Path 31.png';
import { favecourse } from '../../core/services/api/userpanelapi/panelapis';
import SmartImage from '../Common/SmartImage';

const Fave = () => {
    
    const [fave, setFave] = useState([]);
    const [searchQuery, setsearchQuery ] = useState("")
    
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


    const filterfavoritecourse = fave.filter(favorite => 
        favorite?.courseTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        favorite?.describe?.toLowerCase().includes(searchQuery.toLowerCase()) 
    );

    return (
        
        <div className="w-full flex flex-col h-185  font-kalameh font-bold text-2xl pt-10 overflow-auto ">
           
           <div>

                <input 
                type="text"
                placeholder="جستجو دوره..."
                className='border border-gray-400 p-2 rounded-lg w-1/2 text-right'
                value={searchQuery}
                onChange={(search) => setsearchQuery(search.target.value)}
                />
           </div>
           
            <div className="border-b-4 border-deep-blue flex flex-row-reverse justify-center  pr-35 max-md:gap-8 max-md:text-xl max-md:justify-start ">
                <p className=' w-4/10 text-right max-xl:mr-[-65px]  max-lg:mr-[-185px] max-lg:w-5/10 transition-all duration-300 max-md:mr-[-80px]'>نام دوره</p>
                <p className=' w-3/10 text-right max-xl:mr-[-65px]  max-lg:w-5/10 max-lg:text-center max-md:hidden transition-all duration-300 '>مدرس دوره</p>
                <p className=' w-3/10 text-right pr-5 max-lg:hidden transition-all duration-300'>سطح دوره</p>
                <p className=' w-3/10 text-right pr-6 max-lg:hidden transition-all duration-300'>وضعیت</p>
            </div>

            {filterfavoritecourse.length > 0 ? (
                filterfavoritecourse.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 rounded-2xl w-11/12 h-30 flex flex-row-reverse justify-start pr-5 mt-3 items-center m-auto dark:bg-gray-500 hover:bg-gray-400 gap-3  "
                    >
                        
                        <div className=' w-1/10 justify-end flex flex-row max-xl:hidden transition-all duration-300'>
                            <SmartImage src={item?.tumbImageAddress} fallback={profile} alt={item.title} className=" w-12 h-12 rounded-[50px] " />
                        </div>
                        <div className="pt-5 w-3/10 h-17 text-right pr-5 truncate max-lg:w-5/10 transition-all duration-300 max-md:w-10/10">{item.courseTitle || 'No Name'}</div>
                        <div className="pt-5 w-3/10 h-full text-right truncate transition-all duration-300 max-md:hidden">{item.teacheName || 'No Teacher'}</div>
                        <div className="pt-5 w-3/10 h-full  text-right max-lg:hidden transition-all duration-300">{item.levelName.slice(0,10) || 'No Date'}</div>
                        {/* <div className="pt-5 w-2/10 h-full">{item.price || 'No Price'}</div> */}
                        <div className="pt-5 w-2/10 h-full text-right truncate max-lg:hidden transition-all duration-300">{item.typeName || 'No Status'}</div>
                    </div>
                ))
            ) : (
                <p className="text-center mt-10">دوره ای وجود ندارد</p>
            )}
        </div>
    );
};

export { Fave };