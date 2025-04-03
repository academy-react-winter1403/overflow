import { Link } from 'react-router';
import productimg from '../../assets/Coursesimage/product-img.png';


const Top = () => {
  return (
    
    <div className="absolute top-[-250px] w-[1350px] h-[450px] bg-gray-900 rounded-2xl">

        <h2 className="absolute top-[100px] right-[100px] text-amber-50 text-3xl">
          آموزش کاربردی RestFul API در لاراول
        </h2>

        <p className="absolute top-[170px] right-[100px] text-amber-50 w-[450px] h-[53px] text-right text-xs">
          در دوره آموزشی RESTful API در لاراول شیوه پیاده‌سازی REST API در پروژه‌های
          لاراولی را به صورت عملی و کاربردی (براساس نیاز بازار کار) یاد خواهید گرفت.
        </p>

        <div className="absolute left-[-35px] top-[50px] w-[580px] h-[307px]">
          <img src={productimg} alt="Product" />
        </div>

        <div className="absolute top-[300px] right-[100px] text-amber-50 w-[285px] h-[79px] font-bold text-2xl leading-17 rounded-3xl bg-cyan-800">

            <Link to='/'>
            خرید نقدی دوره
            </Link>

        </div>

        <span className="absolute top-[300px] right-[450px] text-left leading-17 font-bold text-2xl w-[285px] h-[79px] text-amber-50">
          ۷۹۰.۰۰۰ تومان
        </span>

    </div>
  )
}

export  {Top}