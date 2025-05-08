import { useEffect, useState } from "react";
import { Getmyreserveapi } from "../../core/services/api/userpanelapi/panelapis";

import profile from '../../assets/Coursesimage/IMG_6504.png';

const GetMyCoursesReserve = () => {
    const [Reservecourse, setReservecourse] = useState([]); 

    const getapi = async () => {
        try {
            const getresponse = await Getmyreserveapi();
            
            if (!getresponse || getresponse.length === 0) {
                console.log(" reserved courses :",getresponse);
                return;
            }
            console.log("Reserve course:", getresponse);

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
            <div className="border-b-4 border-deep-blue flex flex-row-reverse justify-center gap-20 pr-10">
                <p>نام دوره</p>
                <p>مدرس دوره</p>
                <p>تاریخ شروع</p>
                <p>قیمت (تومان)</p>
                <p>وضعیت</p>
            </div>

            {Reservecourse.length > 0 ? (
                Reservecourse.map((reserve, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 rounded-2xl w-11/12 h-20 mt-5 flex flex-row-reverse justify-start pr-5 gap-2 items-center m-auto dark:bg-gray-500"
                    >
                        <img className="w-15 h-15" src={profile} alt="Course profile" />
                        <div className="w-2/10 h-full">{reserve.courseName || "No Name"}</div>
                        <div className="w-2/10 h-full">{reserve.teacherName || "No Teacher"}</div>
                        <div className="w-2/10 h-full">{reserve.startDate || "No Date"}</div>
                        <div className="w-2/10 h-full">{reserve.price || "No Price"}</div>
                        <div className="w-2/10 h-full">{reserve.status || "No Status"}</div>
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