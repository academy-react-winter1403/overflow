import { useEffect, useState } from "react";
import { Getmyreserveapi } from "../../core/services/api/userpanelapi/panelapis";

import profile from '../../assets/Coursesimage/IMG_6504.png';

const GetMyCoursesReserve = () => {

    const [Reservecourse,setReservecourse] = useState();

    const getapi = async () => {

        const getrespone = await Getmyreserveapi();

        console.log("reserve course :",getrespone);

        setReservecourse(getrespone);
    }

    useEffect(() => {
        getapi();
    }, [])
    
  return (
    <div className=" w-10/10 flex flex-col h-full font-kalameh font-bold text-2xl ">

        <div className="border-b-3 border-b-deep-blue flex flex-row-reverse justify-center gap-25 pr-10 ">
            <p>نام دوره</p>
            <p>مدرس دوره</p>
            <p>تاریخ شروع</p>
            <p>قیمت (تومان)</p>
            <p>وضعیت</p>
        </div>

        <div className="bg-gray-200 rounded-2xl w-9/10 h-20 mt-5 flex flex-row-reverse justify-start pr-5 gap-2 items-center m-auto">
            
            <img className='w-15 h-15 ' src={profile} />
            
            <div className='w-2/10 border-2 h-full'></div>
            <div className='w-2/10 border-2 h-full'></div>
            <div className='w-2/10 border-2 h-full'></div>
            <div className='w-2/10 border-2 h-full'></div>
            <div className='w-2/10 border-2 h-full'></div>

        </div>
        
    </div>
  )
}

export  {GetMyCoursesReserve}