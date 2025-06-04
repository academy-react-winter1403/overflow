import React, { useEffect, useState } from 'react';
import { Getprofile } from '../../core/services/api/userpanelapi/panelapis';
import { Link } from 'react-router';




const Personalinfo = () => {


    const [profile, setProfile] = useState(null);

    const profileInfo = async () => {
        try {
            const response = await Getprofile();
            setProfile(response);
            console.log("Profile response:", response);
        } catch (error) {
            console.log('Error from profileInfo:', error);
        }
    };

    useEffect(() => {
        profileInfo();
    }, []);

    return (

            <div className='flex flex-row-reverse flex-wrap m-auto mt-6 w-9/10'>
                <div className='flex flex-row-reverse flex-wrap w-full h-auto justify-center max-sm:overflow-auto  max-lg:h-150 max-lg:overflow-auto max-sm:h-full'>
                    <div className='bg-white w-10/11 rounded-2xl  p-6 dark:bg-gray-700 shadow-[2px_2px_10px_1px_gray] border'>
                        <div className='w-9/10 m-auto mt-10 flex flex-wrap justify-between gap-4 font-iransans max-lg:h-100 max-sm:border max-lg:overflow-auto transition-all duration-300'>


                            <div className='transition-all duration-300 max-lg:w-[100%] w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm  dark:text-white shadow-sm  dark:bg-gray-800 dark:border-gray-400/50'>
                                نام و نام خانوادگی: {profile?.fName || 'وارد نشده'} 
                            </div>

                            <div className='transition-all duration-300 max-lg:w-[100%] w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium dark:text-white shadow-sm  dark:bg-gray-800 dark:border-gray-400/50'>
                                شماره همراه: {profile?.phoneNumber || 'وارد نشده'} 
                            </div> 
 
                            <div className='transition-all duration-300 max-lg:w-[100%]  w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium dark:text-white shadow-sm  dark:bg-gray-800 dark:border-gray-400/50'>
                                کد ملی: {profile?.nationalCode || 'وارد نشده'} 
                            </div> 
 
                            <div className='transition-all duration-300 max-lg:w-[100%] w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium dark:text-white shadow-sm  dark:bg-gray-800 dark:border-gray-400/50'>
                                تلگرام: {profile?.telegramLink || 'وارد نشده'} 
                            </div> 
 
                            <div className='transition-all duration-300 max-lg:w-[100%] w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium dark:text-white shadow-sm  dark:bg-gray-800 dark:border-gray-400/50'>
                                {profile?.email || 'وارد نشده'} 
                            </div> 
 
                            <div className='transition-all duration-300 max-lg:w-[100%] w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium dark:text-white shadow-sm  dark:bg-gray-800 dark:border-gray-400/50'>
                                لینکدین: {profile?.linkdinProfile || 'وارد نشده'} 
                            </div> 
 
                            <div className='transition-all duration-300 max-lg:w-[100%] w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium dark:text-white shadow-sm  dark:bg-gray-800 dark:border-gray-400/50'>
                                تاریخ تولد: {profile?.birthDay && profile?.birthDay !== "0001-01-01T00:00:00" 
                                    ? new Date(profile.birthDay).toLocaleDateString("fa-IR") 
                                    : 'وارد نشده'} 
                            </div> 
 
                            <div className='transition-all duration-300 max-lg:w-[100%] w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium dark:text-white shadow-sm  dark:bg-gray-800 dark:border-gray-400/50'>
                                آدرس: {profile?.homeAdderess || 'وارد نشده'} 
                            </div> 
 
                            <div className='transition-all duration-300 max-lg:w-[100%] w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium dark:text-white shadow-sm  dark:bg-gray-800 dark:border-gray-400/50'>
                                جنسیت: {profile?.gender === true ? 'زن' : profile?.gender === false ? 'مرد' : 'وارد نشده'} 
                            </div> 
 
                            <div className='transition-all duration-300 max-lg:w-[100%] w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium dark:text-white shadow-sm  dark:bg-gray-800 dark:border-gray-400/50'>
                                طول: {profile?.longitude || 'وارد نشده'} 
                            </div> 
 
                            <div className='transition-all duration-300 max-lg:w-[100%] w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium dark:text-white shadow-sm  dark:bg-gray-800 dark:border-gray-400/50'>
                                درباره من: {profile?.userAbout || 'وارد نشده'} 
                            </div> 
 
                            <div className='transition-all duration-300 max-lg:w-[100%] w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium dark:text-white shadow-sm  dark:bg-gray-800 dark:border-gray-400/50'>
                                عرض: {profile?.latitude || 'وارد نشده'}
                            </div>

                        </div>
                        <Link to="/panel/panelpersoninfoedit">
                            <div className="transition-all duration-300 max-sm:w-4/10 w-3/11 h-12 text-center bg-[#436E8E]  hover:bg-blue-800 text-gray-200 text-[20px] leading-0 p-7 m-auto mt-15 font-vazir shadow-sm rounded-xl">
                                ویرایش
                            </div>
                        </Link>
                    </div>

                </div>

            </div>

    );
};

export { Personalinfo };
