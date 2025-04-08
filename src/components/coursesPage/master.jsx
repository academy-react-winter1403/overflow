import { Link } from 'react-router';
import profile from '../../assets/Coursesimage/IMG_6504.png';
import layout from '../../assets/Coursesimage/logout.png';



const Masters = ({data}) => {

const courseData = data || {};

  return (
    <div className="rounded-4xl  bg-white w-9/10 h-7/15  mr-12" >
          <div className="flex text-right flex-col h-[320px] border-sky-900">

            {/* Profile */}
            <div className='w-full h-3/10 flex flex-row-reverse justify-center'>

                <img className=' w-3/20 h-12/20 mt-2 ml-2 mr-5' src={profile} />

                <div className='w-8/10'>
                  <h2 className='text-sky-800 font-bold text-2xl w-full h-2/10 mt-2 '>
                    {courseData.teacherName}
                  </h2>
                  <p className=" text-xs b w-full mt-3">مدرس دوره</p>
                </div>

            </div>
            <span className=" right-[30px] top-[120px] w-[410px] text-right text-xs">
              {courseData.description }
              </span>

            {/* miniddesc */}

            <div>
    
              <div className=' ml-5 flex justify-center border-t border-b w-9/10 border-gray-300 h-25 pt-5'>
                <span className='text-xs'>
                  {courseData.techs}
                </span>
              </div>

            </div>

            <Link to="/">
              <div className='mt-5 w-7/10 ml-20 flex justify-center'>
              <div className="  text-xs">
                مشاهده سایر آموزش های این استاد
              </div>
              <img
                className="w-3 h-3 mt-1 ml-2"
                src={layout}
                alt="layout icon"
              />
              </div>
            </Link>
          </div>
    </div>
  );
};

export { Masters };  