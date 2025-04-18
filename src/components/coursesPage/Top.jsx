import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import productimg from '../../assets/Coursesimage/product-img.png';
import commentcount from '../../assets/Coursesimage/Symbol(1).png';
import clock from '../../assets/Coursesimage/Vector.png';
import eye from '../../assets/Coursesimage/eye 1.png';
import calender from '../../assets/Coursesimage/List → Item.png';
// import { toJalaali } from 'jalaali-js';


const Top = ({ data }) => {
  const courseData = data || {};
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
   
    // const today = new Date();
    // const jalaaliDate = toJalaali(today.getFullYear(), today.getMonth() + 1, today.getDate());
    // const formattedDate = `${jalaaliDate.jy}/${jalaaliDate.jm}/${jalaaliDate.jd}`;
    // setCurrentDate(formattedDate);
    
  }, []);

  return (
    <div className="flex flex-row-reverse items-center bg-gray-900 rounded-2xl flex-wrap w-10/10 h-auto ">
      <div className='flex flex-col items-end w-5/10 h-50 mr-10 '>
        <h2 className="text-amber-50 text-3xl">
          {courseData.title}
        </h2>
        <p className="text-amber-50 text-xs text-right w-10/10 h-8/10 mt-10 ">
          {courseData.describe}
        </p>
      </div>

      <div className="text-amber-50 shadow-2xl shadow-amber-50 rounded-2xl w-3/10 h-4/10 mt-10 mr-45">
        <img
          src={courseData.imageAddress || productimg}
          alt="Course Banner"
          className="rounded-2xl "
        />
      </div>

      <div className="flex items-center justify-between w-6/10 mr-10 mb-5 pl-45">
        <span className="text-amber-50 font-bold text-2xl text-left"> {courseData.cost} T </span>
        <div className="text-amber-50 font-bold text-2xl bg-deep-blue rounded-3xl px-6 py-3 text-center">
          <Link to='/'>خرید نقدی دوره</Link>
        </div>
      </div>

      <div className=' flex flex-row w-5/10 justify-end pr-12 mb-5 gap-15'>

        <div className='text-white  flex flex-row-reverse gap-2 '>
          <img src={commentcount} />
          {courseData.commentCount}
        </div>

        <div className='flex flex-row-reverse text-white gap-2'>
          <img src={clock} />
          {courseData.courseStatusName}
        </div>         

        <div className='flex flex-row-reverse text-white gap-2'>
          <img className='rounded-[50px]' src={eye} />
          {courseData.capacity}
        </div>           

        <div className='flex flex-row-reverse text-white gap-2'>
          <img src={calender} />
          <p>{courseData.insertDate.slice(0,10)}</p> 
        </div>
      </div>
    </div>
  );
}

export { Top };