import { Link } from 'react-router';
import productimg from '../../assets/Coursesimage/product-img.png';



const Top = ({data}) => {
  const courseData = data || {};

  return (
    
    <div className="flex flex-row-reverse items-center bg-gray-900 rounded-2xl flex-wrap w-10/10 h-auto">

      <div className='flex flex-col items-end w-5/10 h-50 mr-10 '>

        <h2 className="text-amber-50 text-3xl">
          {courseData.title}
        </h2>

        <p className="text-amber-50 text-xs text-right w-10/10 h-8/10 mt-10 ">
          {courseData.describe}
        </p>

      </div>

        <div className="w-3/10 h-4/10 mt-10 mr-45">
        <img
          src={courseData.imageAddress || productimg }
          alt="Course Banner"
          className="w-10/10 rounded-2xl "
        />
        </div>

        <div className="flex items-center justify-between w-6/10 mr-10 mb-15 ">

          <span className="text-amber-50 font-bold text-2xl text-left"> {courseData.cost} T </span>
          <div className="text-amber-50 font-bold text-2xl bg-cyan-800 rounded-3xl px-6 py-3 text-center">
            <Link to='/'>خرید نقدی دوره</Link>
          </div>

        </div>

    </div>
  )
}

export  {Top};