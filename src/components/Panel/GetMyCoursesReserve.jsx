import { useEffect, useState } from "react";
import { Getmyreserveapi } from "../../core/services/api/userpanelapi/panelapis";

import profile from '../../assets/Coursesimage/IMG_6504.png';

const GetMyCoursesReserve = () => {
    const [Reservecourse, setReservecourse] = useState([]); 

    const getapi = async () => {
        try {
            const getresponse = await Getmyreserveapi();
            
            if (!getresponse || getresponse.length === 0) {

                return;
            }


            setReservecourse(getresponse);
            
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    useEffect(() => {
        getapi();
    }, []);

    return (
        <div className="w-full flex flex-col h-full font-kalameh font-bold text-2xl">
            <div className="border-b-4 border-deep-blue flex flex-row-reverse justify-center gap-20 pr-10 max-md:gap-8 max-md:text-xl max-md:justify-start w-10/10">
                <p className="w-5/10 text-right pr-25">نام دوره</p>
                {/* <p>مدرس دوره</p> */}
                <p className="w-5/10 text-right pr-35">تاریخ شروع</p>
                {/* <p className="max-md:hidden">قیمت (تومان)</p> */}
                {/* <p>وضعیت</p> */}
            </div>

            {Reservecourse.length > 0 ? (
                Reservecourse.map((reserve, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 rounded-2xl w-11/12 h-20 mt-5 flex flex-row-reverse justify-start pr-5 gap-2 items-center m-auto dark:bg-gray-500 hover:bg-gray-400"
                    >
                        <img className=" w-12 h-12" src={profile} alt="Course profile" />
                        <div className="pt-5 w-6/10 h-full text-right pr-3">{reserve.courseName || "No Name"}</div>
                        {/* <div className="pt-5 w-2/10 h-full">{reserve.teacherName || "No Teacher"}</div> */}
                        <div className="pt-5 w-5/10 h-full">{reserve.reserverDate || "No Date"}</div>
                        {/* <div className="pt-5 w-2/10 h-full">{reserve.price || "No Price"}</div> */}
                        {/* <div className="pt-5 w-2/10 h-full">{reserve.status || "No Status"}</div> */}
                    </div>
                ))
            ) : (
                <p className="text-center mt-10">"دوره‌ای رزرو نشده"

                </p>
            )}
        </div>
    );
};

export { GetMyCoursesReserve };