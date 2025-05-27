import frame1 from '../../assets/userpanel/Frame.png';
import frame2 from '../../assets/userpanel/Frame2.png';
import courseimg from '../../assets/userpanel/word.png';
// import teach from '../../assets/userpanel/tech.png';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { Getprofile } from '../../core/services/api/userpanelapi/panelapis';
import { ExistingCourseMap } from './existingcoursemap';
// import { getApi } from '../../core/services/api/getApi';
import { getItem } from '../../core/services/common/storage.services';
import { getcoursecountApi, getnewscountApi } from '../../core/services/api/gettotal';


const Dashboard = () => {
    const navigate = useNavigate();
    const token = getItem("token"); 
    // const id = getItem("id"); 
    
    useEffect(() => {
        if (!token) {
            navigate("/Register-1");
        }
    }, [navigate, token]); 


    const [profile, setProfile] = useState(null); 
    const [Profileinfo, setProfileinfo] = useState(null); 
    const [coursecount, setcoursecount] = useState(null); 

    const percentage = profile?.profileCompletionPercentage || 80; 

    const profileInfo = async () => {

        try {
            const response = await Getprofile();
            setProfile(response);
            console.log("Profile response:", response);
        } catch (error) {
            console.log('Error from profileInfo:', error);
        }

    };    
    
    const getInfo = async () => {

        try {
            const response = await getnewscountApi();

            // getItem(id);

            setProfileinfo(response.totalCount);

            console.log("Profile info :", response);

        } catch (error) {
            console.log('Error from profileInfo:', error);
        }

    };   
     const getcourseInfo = async () => {

        try {
            const response = await getcoursecountApi();

            // getItem(id);

            setcoursecount(response.totalCount);

            console.log("Profile info :", response);

        } catch (error) {
            console.log('Error from profileInfo:', error);
        }

    };

        const handleNavigation = (id) => {
            console.log(id)
            navigate(`AllCourses/Courses/${id}`); 
          };
    
    useEffect(() => {
        profileInfo();
        getInfo();
        getcourseInfo();
    }, []);

    return (
        <div className="flex flex-row-reverse flex-wrap w-10/10 font-kalameh  h-full pt-10 ">
            <div className='flex flex-row-reverse flex-wrap w-10/10 '>
                {/* top side */}
                {/* <div className='flex flex-row-reverse w-10/10 text-3xl h-15 pt-5'>
                    <div className='flex flex-row-reverse w-6/10 pr-5 max-lg:w-10/10 max-sm:text-2xl'>
                        خوش اومدی 🙌
                    </div>
                </div> */}

                <div className='flex flex-row-reverse flex-wrap w-10/10  justify-center gap-8  max-sm:overflow-auto max-sm:h-150 max-lg:h-150 max-lg:overflow-auto'>
                    {/* Dashboard main content */}
                    <div className="gap-10 w-10/10 h-full flex flex-col   mr-5  transition-all duration-300 dark:bg-gray-700">
                        <div className="flex flex-row-reverse transition-all duration-300 ">
                            <div className="flex flex-row w-5/10 h-60  max-xl:w-6/10  max-md:w-10/10">
                                <div className="flex flex-row-reverse  w-10/10 justify-center items-center gap-10 dark:bg-gray-700  ">
                                    <div className="flex flex-col w-4/10 h-30 shadow-[5px_5px_10px_1px_gray] rounded-2xl  max-md:w-8/10">
                                        
                                        <div className="w-3/10 h-6/10 rounded-[50px] mt-[-35px] ml-5 bg-deep-blue flex justify-center items-center max-lg:w-15 max-lg:h-15 ">
                                            <img src={frame2} alt="Frame 2" />
                                        </div>
                                        <span className='text-center mr-5 font-bold font-iransans max-lg:text-xs flex flex-row justify-end text-xl text-gray-500 mt-4 dark:text-white'>
                                             {Profileinfo}  {"اخبار مورد علاقه"} </span>
                                    </div>

                                    <div className="flex flex-col w-4/10 h-30 shadow-[5px_5px_10px_1px_gray] rounded-2xl  max-md:w-0/10 max-md:hidden">
                                        <div className="w-3/10 h-6/10 rounded-[50px] mt-[-35px] ml-5 bg-deep-blue flex justify-center items-center max-lg:w-15 max-lg:h-15">
                                            <img src={frame1} alt="Frame 1" />
                                        </div>
                                        <span className='text-center mr-5 font-bold  max-lg:text-xs flex flex-row justify-end text-xl text-gray-500 mt-4 font-iransans dark:text-white'>  
                                            {coursecount} کورس های موردعلاقه  </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row-reverse justify-center w-5/10 h-60   transition-all duration-300 max-xl:w-4/10  dark:bg-gray-700 max-md:w-6/10">
                                <span className="w-5/10 pt-20 font-bold max-xl:hidden">برای شرکت در دوره ها باید حداقل ٪ ۸۰ از پروفایل خود را تکمیل کنید.</span>
                                <div className="flex flex-row w-5/10 mt-10 h-40 max-xl:w-4-10 max-xl:h-30">
                                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row-reverse w-10/10 h-full">
                            <div className="flex flex-col gap-5 w-5/10 h-full">
                                <span className="flex flex-row-reverse text-2xl font-bold pt-2 pr-10 max-lg:text-sm transition-all duration-300">دوره های در حال برگزاری</span>

                                <ExistingCourseMap  handleNavigation={handleNavigation}/>

                            </div>

                            <div className="flex flex-col gap-5 w-5/10 h-full transition-all duration-300">
                                <span className="flex flex-row-reverse text-2xl font-bold pt-2 pr-10 transition-all duration-300 max-lg:text-sm"> دوره های پیشنهادی </span>
                                <div className="flex flex-row justify-center hover:scale-105 transition-transform duration-300 ">
                                    <div className="flex flex-row items-center bg-gray-100 rounded-2xl w-9/10 h-25 transition-all duration-300 dark:bg-gray-700 dark:border dark:border-white">
                                        <div className="flex flex-row-reverse items-end gap-5 w-5/10 max-lg:gap-2">
                                            <p className="text-gray-100 max-xl:heddin max-xl:w-5 max-lg:w-0">چهارشنبه ها . ۱۷:۳۰</p>
                                            <img className="ml-5 w-25 h-20 max-lg:mb-2 max-lg:w-20 transition-all duration-300" src={courseimg} alt="Course" />
                                        </div>

                                        <div className="flex flex-col w-5/10 text-right gap-10 pr-5  max-xl:gap-3 transition-all duration-300 max-lg:text-sm max-lg:w-6/10">
                                            <p>آموزش کامل کار با Figma</p>
                                            <Link to="/allcourses/Courses/:id" className="text-blue- flex flex-row gap-5 justify-end max-lg:hidden">
                                                مشاهده دوره
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export { Dashboard };