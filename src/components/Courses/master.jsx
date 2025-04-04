import { Link } from 'react-router';
import profile from '../../assets/Coursesimage/IMG_6504.png';
import bottomline from '../../assets/Coursesimage/Path 4.png';
import layout from '../../assets/Coursesimage/logout.png';
import { useEffect, useState } from 'react';
import { Getteachers } from '../../core/services/api/GetCourses/Getapi.js';

const Master = () => {
  const [teacher, setteacher] = useState([]);

  const Getmaster = async () => {
    try {
      // Retrieve the token from local storage  
      const token = localStorage.getItem('token');

      // Call the Getteachers function, passing the token to the API  
      const response = await Getteachers(token);

      if (response) {
        console.log('Teachers data:', response);
        setteacher(response);
      }
    } catch (error) {
      console.log('Error fetching teachers:', error);
    }
  };

  useEffect(() => {
    Getmaster();
  }, []);

  return (
    <div className="absolute top-[250px] left-[-675px] rounded-4xl bg-white w-[470px] h-auto">
      {teacher.length > 0 ? (
        teacher.map((teacherItem, index) => (
          <div key={index} className="relative h-[320px]">
            {/* Profile */}
            <div className="relative h-[80px]">
              <img
                className="absolute right-[30px] top-[30px]"
                src={teacherItem.profileImage || profile}
                alt={teacherItem.name}
              />
              <span className="absolute right-[100px] top-[30px] text-sky-800 font-bold text-2xl">
                {teacherItem.name || 'آرمان غنی زاده'}
              </span>
              <p className="absolute right-[100px] top-[60px] text-xs">
                {teacherItem.role || 'مدرس دوره'}
              </p>
              <img className="absolute right-[30px] top-[100px] w-[410px]" src={bottomline} alt="bottom line" />
            </div>

            {/* Description */}
            <span className="absolute right-[30px] top-[120px] w-[410px] text-right text-xs">
              {teacherItem.description ||
                'از سال 92 وارد حوزه نرم افزار و برنامه نویسی شدم… طی 10 سال گذشته تجربه کار با زبانها و پلتفرمهای مختلفی رو دارم ولی 4 سال اخیر به شکل متمرکز به عنوان فول استک وب مشغول به کار بودم و در حال حاضر استک اصلیم لاراول و ریکت هست اما خب میتونم بگم این روز…'}
            </span>

            <img className="absolute right-[30px] top-[230px] w-[410px]" src={bottomline} alt="bottom line" />

            <Link to="/">
              <div className="absolute right-[50px] top-[250px] w-[410px] text-xs">
                مشاهده سایر آموزش های این استاد
              </div>
              <img
                className="absolute right-[150px] top-[253px]"
                src={layout}
                alt="layout icon"
              />
            </Link>
          </div>
        ))
      ) : (
        <p className="absolute right-[50px] top-[150px] text-gray-500">
          هیچ استادی یافت نشد
        </p>
      )}
    </div>
  );
};

export { Master };  