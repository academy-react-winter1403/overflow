import frame1 from '../../assets/userpanel/Frame.png';
import frame2 from '../../assets/userpanel/Frame2.png';
import courseimg from '../../assets/userpanel/word.png';
// import teach from '../../assets/userpanel/tech.png';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { Getprofile } from '../../core/services/api/userpanelapi/panelapis';
import { ExistingCourseMap } from './existingcoursemap';
// import { getApi } from '../../core/services/api/getApi';

const Dashboard = () => {

    const [profile, setProfile] = useState(null); 

    const percentage = profile?.profileCompletionPercentage || 60; 

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
        <div className="gap-10 w-10/10 h-full flex flex-col bg-white mr-5 rounded-2xl">
            <div className="flex flex-row-reverse">
                <div className="flex flex-row w-5/10 h-60">
                    <div className="flex flex-row-reverse bg-white w-10/10 justify-center items-center gap-10">
                        <div className="flex flex-row w-4/10 h-30 shadow-[5px_5px_10px_1px_gray] rounded-2xl">
                            <div className="w-3/10 h-6/10 rounded-[50px] mt-[-35px] ml-5 bg-deep-blue flex justify-center items-center">
                                <img src={frame2} alt="Frame 2" />
                            </div>
                        </div>

                        <div className="flex flex-row w-4/10 h-30 shadow-[5px_5px_10px_1px_gray] rounded-2xl">
                            <div className="w-3/10 h-6/10 rounded-[50px] mt-[-35px] ml-5 bg-deep-blue flex justify-center items-center">
                                <img src={frame1} alt="Frame 1" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row-reverse justify-center w-5/10 h-60 bg-white">
                    <span className="w-5/10 pt-20 font-bold">برای شرکت در دوره ها باید حداقل ٪ ۸۰ از پروفایل خود را تکمیل کنید.</span>
                    <div className="flex flex-row w-5/10 mt-10 h-40">
                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    </div>
                </div>
            </div>

            <div className="flex flex-row-reverse w-10/10 h-full">
                <div className="flex flex-col gap-5 w-5/10 h-full">
                    <span className="flex flex-row-reverse text-2xl font-bold pt-2 pr-10">دوره های در حال برگزاری</span>

                    <ExistingCourseMap />
                </div>

                <div className="flex flex-col gap-5 w-5/10 h-full">
                    <span className="flex flex-row-reverse text-2xl font-bold pt-2 pr-10"> دوره های پیشنهادی </span>
                    <div className="flex flex-row justify-center">
                        <div className="flex flex-row items-center bg-gray-100 rounded-2xl w-9/10 h-25">
                            <div className="flex flex-row-reverse items-end gap-5 w-5/10">
                                <p className="text-gray-100">چهارشنبه ها . ۱۷:۳۰</p>
                                <img className="ml-5 w-25 h-20" src={courseimg} alt="Course" />
                            </div>

                            <div className="flex flex-col w-5/10 text-right gap-10 pr-5">
                                <p>آموزش کامل کار با Figma</p>
                                <Link to="/allcourses/Courses/:id" className="text-blue- flex flex-row gap-5 justify-end">
                                    مشاهده دوره
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Dashboard };