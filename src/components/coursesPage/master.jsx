import { Link } from "react-router";
import profile from "../../assets/Coursesimage/IMG_6504.png";
import layout from "../../assets/Coursesimage/logout.png";

const Masters = ({ data }) => {
  const courseData = data || {};

  return (
    <div className="mr-12 h-7/15 w-9/10 rounded-4xl bg-white transition-all duration-300 dark:bg-gray-700">
      <div className="flex h-[320px] flex-col border-sky-900 text-right">
        {/* Profile */}
        <div className="flex h-3/10 w-full flex-row-reverse justify-center">
          <img className="mt-2 mr-5 ml-2 h-15/20 w-3/20" src={profile} />

          <div className="w-8/10">
            <h2 className="text-deep-blue mt-2 h-2/10 w-full text-2xl font-bold dark:text-white">
              {courseData.teacherName}
            </h2>
            <p className="b mt-3 w-full text-xs dark:text-white">مدرس دوره</p>
          </div>
        </div>
        {/* <span className="top-[120px] right-[30px] w-[410px] text-right text-xs">
          {courseData.description}
        </span> */}

        {/* miniddesc */}

        <div>
          <div className="ml-5 flex h-25 w-9/10 justify-center border-t border-b border-gray-300 pt-5">
            <span className="text-xs">{courseData.miniDescribe}</span>
          </div>
        </div>

        <Link to="/teachers">
          <div className="mt-5 ml-20 flex w-7/10 justify-center">
            <div className="text-xs">مشاهده سایر آموزش های این استاد</div>
            <img className="mt-1 ml-2 h-3 w-3" src={layout} alt="layout icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export { Masters };
