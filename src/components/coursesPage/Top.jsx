import { Link } from 'react-router';
import productimg from '../../assets/Coursesimage/product-img.png';



const Top = ({data}) => {
  const courseData = data || {};

  return (
    
    <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-6 bg-gray-900 rounded-2xl p-6 flex-wrap">

        <h2 className="text-amber-50 text-3xl text-center lg:text-right lg:w-1/2">
          {courseData.title}
         
        </h2>

        <p className="text-amber-50 text-xs text-right lg:w-1/2">
          {courseData.describe}
        </p>

        <div className="w-full lg:w-[40%] h-[]">
        <img
          src={courseData.imageAddress || productimg }
          alt="Course Banner"
          className="w-full h-96 object-cover"
        />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-4">
          <div className="text-amber-50 font-bold text-2xl bg-cyan-800 rounded-3xl px-6 py-3 text-center">
            <Link to='/'>خرید نقدی دوره</Link>
          </div>
          <span className="text-amber-50 font-bold text-2xl"> {courseData.cost} </span>
        </div>

    </div>
  )
}

export  {Top};