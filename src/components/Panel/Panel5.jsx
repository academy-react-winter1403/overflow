import React, { useEffect, useState } from 'react';
import logo from '../../assets/userpanel/Logo.png';
import home from '../../assets/userpanel/home.png';
import courses from '../../assets/userpanel/Path 29.png';
import ticket from '../../assets/userpanel/Path 30.png';
import profileIcon from '../../assets/userpanel/Path 31.png';
import exit from '../../assets/userpanel/Path 32.png';
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
        <div className="flex flex-row-reverse flex-wrap w-9/10 ml-20 font-kalameh">
            <div className='flex flex-row-reverse flex-wrap w-7/10'>
                <div className='flex flex-row-reverse flex-wrap w-full h-auto justify-center max-sm:overflow-auto max-sm:h-150 max-lg:h-150 max-lg:overflow-auto'>
                    <div className='bg-white w-10/11 rounded-2xl shadow-lg p-6 dark:bg-gray-400/95'>
                        <div className='w-9/10 m-auto mt-10 flex flex-wrap justify-between gap-4'>


                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium text-gray-700 shadow-sm  dark:bg-gray-300/95'>
                                نام و نام خانوادگی: {profile?.fName || 'وارد نشده'} {profile?.lName || 'وارد نشده'}
                            </div>

                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium text-gray-700 shadow-sm  dark:bg-gray-300/95'>
                                شماره همراه: {profile?.phoneNumber || 'وارد نشده'}
                            </div>

                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium text-gray-700 shadow-sm  dark:bg-gray-300/95'>
                                کد ملی: {profile?.nationalCode || 'وارد نشده'}
                            </div>

                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium text-gray-700 shadow-sm  dark:bg-gray-300/95'>
                                تلگرام: {profile?.telegramLink || 'وارد نشده'}
                            </div>

                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium text-gray-700 shadow-sm  dark:bg-gray-300/95'>
                                {profile?.email || 'وارد نشده'}
                            </div>

                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium text-gray-700 shadow-sm  dark:bg-gray-300/95'>
                                لینکدین: {profile?.linkdinProfile || 'وارد نشده'}
                            </div>

                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium text-gray-700 shadow-sm  dark:bg-gray-300/95'>
                                تاریخ تولد: {profile?.birthDay && profile?.birthDay !== "0001-01-01T00:00:00"
                                    ? new Date(profile.birthDay).toLocaleDateString("fa-IR")
                                    : 'وارد نشده'}
                            </div>

                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium text-gray-700 shadow-sm  dark:bg-gray-300/95'>
                                آدرس: {profile?.homeAdderess || 'وارد نشده'}
                            </div>

                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium text-gray-700 shadow-sm  dark:bg-gray-300/95'>
                                جنسیت: {profile?.gender === true ? 'زن' : profile?.gender === false ? 'مرد' : 'وارد نشده'}
                            </div>

                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium text-gray-700 shadow-sm  dark:bg-gray-300/95'>
                                طول: {profile?.longitude || 'وارد نشده'}
                            </div>

                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium text-gray-700 shadow-sm  dark:bg-gray-300/95'>
                                درباره من: {profile?.userAbout || 'وارد نشده'}
                            </div>

                            <div className='w-[48%] min-h-16 border-2 border-gray-300 rounded-xl p-4 flex items-center justify-end text-right bg-gray-50 text-sm font-medium text-gray-700 shadow-sm  dark:bg-gray-300/95'>
                                عرض: {profile?.latitude || 'وارد نشده'}
                            </div>

                        </div>
                        <Link to="panel/panelpersoninfoedit">
                            <div className="w-3/11 h-12 text-center bg-[#436E8E] text-gray-200 text-[35px] leading-0 p-7 m-auto mt-15 shadow-sm rounded-xl">
                                ویرایش
                            </div>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export { Personalinfo };
