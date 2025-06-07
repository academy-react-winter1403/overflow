import frame1 from "../../assets/userpanel/Frame.png";
import frame2 from "../../assets/userpanel/Frame2.png";
import courseimg from "../../assets/userpanel/word.png";
// import teach from '../../assets/userpanel/tech.png';

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Getprofile } from "../../core/services/api/userpanelapi/panelapis";
import { ExistingCourseMap } from "./existingcoursemap";
// import { getApi } from '../../core/services/api/getApi';
import { getItem } from "../../core/services/common/storage.services";
import {
  getcoursecountApi,
  getnewscountApi,
} from "../../core/services/api/gettotal";
import { Ongoingcourses } from "./Ongoing courses";

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
      // console.log("Profile response:", response);
    } catch (error) {
      console.log("Error from profileInfo:", error);
    }
  };

  const getInfo = async () => {
    try {
      const response = await getnewscountApi();

      // getItem(id);

      setProfileinfo(response.totalCount);

      console.log("Profile info :", response);
    } catch (error) {
      console.log("Error from profileInfo:", error);
    }
  };
  const getcourseInfo = async () => {
    try {
      const response = await getcoursecountApi();

      // getItem(id);

      setcoursecount(response.totalCount);

      // console.log("Profile info :", response);
    } catch (error) {
      console.log("Error from profileInfo:", error);
    }
  };

  const handleNavigation = (id) => {
    // console.log(id)
    navigate(`AllCourses/Courses/${id}`);
  };

  useEffect(() => {
    profileInfo();
    getInfo();
    getcourseInfo();
  }, []);

  return (
    <div className="font-kalameh flex h-full w-10/10 flex-row-reverse flex-wrap pt-10 max-sm:w-full">
      <div className="flex w-10/10 flex-row-reverse flex-wrap">
        <div className="flex w-10/10 flex-row-reverse flex-wrap justify-center gap-8 max-lg:h-150 max-lg:overflow-auto max-sm:h-150 max-sm:overflow-auto">
          {/* Dashboard main content */}
          <div className="mr-5 flex h-full w-10/10 flex-col gap-10 transition-all duration-300 dark:bg-gray-700">
            <div className="flex flex-row-reverse transition-all duration-300 max-lg:flex-col max-md:items-end">
              <div className="flex h-60 w-5/10 flex-row transition-all duration-300 max-2xl:w-8/10 max-xl:w-6/10 max-lg:w-full">
                <div className="flex w-10/10 flex-row-reverse items-center justify-center gap-10 max-lg:h-auto max-lg:w-full max-sm:hidden dark:bg-gray-700">
                  <Link
                    to="/panel/Favenews"
                    className="flex h-30 w-4/10 flex-col rounded-2xl shadow-[5px_5px_10px_1px_gray] transition-all duration-300 hover:scale-110 hover:cursor-pointer max-lg:h-25"
                  >
                    <div className="bg-deep-blue mt-[-35px] ml-5 flex h-6/10 w-3/10 items-center justify-center rounded-[50px] max-lg:h-15 max-lg:w-15">
                      <img src={frame2} alt="Frame 2" />
                    </div>
                    <span className="font-iransans mt-4 mr-5 flex flex-row justify-end text-center text-xl font-bold text-gray-500 max-xl:text-sm max-lg:text-xs dark:text-white">
                      {Profileinfo} {"اخبار مورد علاقه"}{" "}
                    </span>
                  </Link>

                  <Link
                    to="/panel/favecourse"
                    className="flex h-30 w-4/10 flex-col rounded-2xl shadow-[5px_5px_10px_1px_gray] transition-all duration-300 hover:scale-110 hover:cursor-pointer max-lg:h-25"
                  >
                    <div className="bg-deep-blue mt-[-35px] ml-5 flex h-6/10 w-3/10 items-center justify-center rounded-[50px] max-lg:h-15 max-lg:w-15">
                      <img src={frame1} alt="Frame 1" />
                    </div>
                    <span className="font-iransans mt-4 mr-5 flex flex-row justify-end text-center text-xl font-bold text-gray-500 max-xl:text-sm max-lg:text-xs dark:text-white">
                      {coursecount} کورس های موردعلاقه{" "}
                    </span>
                  </Link>
                </div>

                {/* mobile mode */}

                <div className="font-iransans flex h-auto w-10/10 flex-row-reverse flex-wrap items-center justify-center pl-5 text-right font-bold sm:hidden dark:bg-gray-700">
                  <Link
                    to="/panel/Favenews"
                    className="w-10/10 rounded-2xl bg-gray-400 p-3 text-white"
                  >
                    {/* <div className="bg-deep-blue mt-[-35px] ml-5 flex h-6/10 w-3/10 items-center justify-center rounded-[50px] max-lg:h-15 max-lg:w-15">
                      <img src={frame2} alt="Frame 2" />
                    </div> */}
                    <span className="">
                      {Profileinfo} {"اخبار مورد علاقه"}
                    </span>
                  </Link>

                  <Link
                    to="/panel/favecourse"
                    className="w-10/10 rounded-2xl bg-gray-600 p-3 text-white"
                  >
                    {/* <div className="bg-deep-blue mt-[-35px] ml-5 flex h-6/10 w-3/10 items-center justify-center rounded-[50px] max-lg:h-15 max-lg:w-15">
                      <img src={frame1} alt="Frame 1" />
                    </div> */}
                    <span className="">
                      {coursecount} {"کورس های موردعلاقه "}
                    </span>
                  </Link>
                  <Link
                    to="/panel/coursereserve"
                    className="w-10/10 rounded-2xl bg-gray-400 p-3 text-white"
                  >
                    {/* <div className="bg-deep-blue mt-[-35px] ml-5 flex h-6/10 w-3/10 items-center justify-center rounded-[50px] max-lg:h-15 max-lg:w-15">
                      <img src={frame2} alt="Frame 2" />
                    </div> */}
                    <span className="">
                      {Profileinfo} {" دوره های رزرو شده  "}
                    </span>
                  </Link>

                  <Link
                    to="/panel/mycourse"
                    className="w-10/10 rounded-2xl bg-gray-600 p-3 text-white"
                  >
                    {/* <div className="bg-deep-blue mt-[-35px] ml-5 flex h-6/10 w-3/10 items-center justify-center rounded-[50px] max-lg:h-15 max-lg:w-15">
                      <img src={frame1} alt="Frame 1" />
                    </div> */}
                    <span className="">
                      {coursecount} {"  دوره های من "}
                    </span>
                  </Link>
                </div>
              </div>

              <div className="flex h-60 w-5/10 flex-row-reverse justify-center transition-all duration-100 max-xl:w-4/10 max-lg:h-auto max-lg:w-full max-lg:flex-row-reverse max-sm:hidden dark:bg-gray-700">
                <div
                  className="w-5/10 pt-20 font-bold max-2xl:hidden max-lg:mb-20 max-lg:flex max-lg:h-full max-lg:w-10/10 max-lg:flex-wrap max-lg:pt-0"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  برای شرکت در دوره ها باید حداقل ٪ ۸۰ از پروفایل خود را تکمیل
                  کنید.
                  <a
                    href="/panel/panelpersoninfo "
                    className="text-blue-600 max-lg:ml-15"
                  >
                    {" "}
                    (برای تکمیل حساب کاربری کلیک کنید ){" "}
                  </a>
                </div>

                <div className="mt-10 flex h-40 w-5/10 flex-row transition-all duration-300 hover:scale-110 max-xl:h-30 max-xl:w-4/10 max-lg:m-auto max-lg:w-5/10">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
              </div>
            </div>

            <div className="flex h-full w-10/10 flex-row-reverse max-lg:flex-col">
              <div className="flex h-full w-5/10 flex-col gap-5 max-lg:w-10/10">
                <span
                  className="flex flex-row-reverse pt-2 pr-10 text-2xl font-bold transition-all duration-300 max-lg:text-2xl"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  دوره های در حال برگزاری
                </span>

                <ExistingCourseMap handleNavigation={handleNavigation} />
              </div>

              <Link  to="/allcourses/" className="flex h-full w-5/10 flex-col gap-5 transition-all duration-300 max-lg:hidden ">
                <span
                  className="flex flex-row-reverse pt-2 pr-10 text-2xl font-bold transition-all duration-300 max-lg:text-sm"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  {" "}
                  دوره های پیشنهادی{" "}
                </span>
                    <Ongoingcourses />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
