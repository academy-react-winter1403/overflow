import React, { useEffect, useState } from 'react';
import profile from '../../assets/userpanel/Path 31.png';
import { favecoursenew } from '../../core/services/api/userpanelapi/panelapis';
    

const Favenews = () => {

    const [favenews, setFavenews] = useState([]); 
    const getFaveCourse = async () => {
        try {
            const response = await favecoursenew();

            setFavenews(response.myFavoriteNews || []); 
        } catch (error) {
            console.error('Error fetching favorite courses:', error);
        }
    };

    useEffect(() => {
        getFaveCourse();
    }, []);

    return (

        <div className="w-full flex flex-col h-full font-iransans font-bold text-2xl pt-10 ">

            <div className='border-b-4 border-deep-blue flex flex-row w-10/10  '>
            
                <p className=' w-2/10  text-right pr-13'>تعداد لایک</p>
                <p className=' w-2/10  text-right pr-20'>بازدید</p>
                <p className=' w-2/10  text-right pr-13'>تاریخ</p>
                <p className=' w-4/11  text-right mr-36'>عنوان</p>

            </div>
            {favenews.length > 0 ? (
                favenews.map((reserve, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 rounded-2xl w-11/12 h-18 mt-5 flex flex-row-reverse justify-start pr-5 gap-2 items-center m-auto dark:bg-gray-500 hover:bg-gray-400 "
                    >
                        <img className="w-12 h-12 rounded-[50px]" src={reserve.currentImageAddressTumb || profile} alt="Course profile" />
                        <div className="w-4/10 h-full pt-5 text-right pr-2">{reserve.title || 'No Name'}</div>
                        {/* <div className="w-2/10 h-full">{reserve.currentRate || 'No Teacher'}</div> */}
                        <div className="w-2/10 h-full pt-5">{reserve.updateDate.slice(0,10) || 'No Date'}</div>
                        <div className="w-2/10 h-full pt-5">{reserve.currentView || 'No Price'}</div>
                        <div className="w-2/10 h-full pt-5">{reserve.currentLikeCount || 'No Status'}</div>
                    </div>
                ))
            ) : (
                <p className="text-center mt-10"> اخباری یافت نشد  </p> // Corrected JSX element syntax
            )}
        </div>
    );
};

export { Favenews };