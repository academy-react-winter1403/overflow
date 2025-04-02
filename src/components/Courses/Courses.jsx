import { Link } from 'react-router';
import productimg from '../../assets/Coursesimage/product-img.png';


import { Field, Formik, Form } from 'formik';
import { Coursesmap } from './Courses.map';
import { Master } from './master';
import { CommentSection } from './CommentSection';
import { Commentdiv } from './Commentdiv';

const Courses = () => {
  return (
    <div className="flex justify-center relative">

                        {/* top */}

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

                        {/* about */}

      <div className='absolute top-[250px] right-[-675px] w-[830px] h-[680px] rounded-2xl bg-white'>
        <h1 className='absolute right-[100px] top-[40px] text-sky-800 font-bold text-3xl'>توضیحات</h1>

        <span className='absolute top-[150px] right-[100px] text-right w-[650px] h-[120px' >یکی از اصلی‌ترین شاخص‌های یک اپلیکیشن مدرن، استفاده آن از تکنولوژی REST API است. با استفاده از چنین تکنولوژی شما قابلیت ایجاد یک پل ارتباطی میان Back-End و Front-End را پیدا خواهید کرد و مستقل از اینکه از چه تکنولوژی‌هایی در هر دو سمت استفاده می‌کنید، می‌توانید محتوا بک-اند را به فرانت-اند ارسال کنید.
        </span>
        <span className='absolute top-[270px] right-[100px] text-right w-[650px] h-[90px] ' >در واقع با ظهور چنین تکنولوژی بود که معماری بسیاری از اپلیکیشن‌ها تغییر کرد و رویکرد تازه‌ای در فرایند توسعه اپلیکیشن ایجاد شد. اما برای اینکه چنین قابلیتی را پیاده‌سازی کنیم، نیاز است که از ابزارهای درست استفاده کنیم.
        </span>
        <span className='absolute top-[360px] right-[100px] text-right w-[650px] h-[150px' >لاراول یکی از آن ابزارهای درست است! در واقع لاراول بیشتر تمرکز خود را روی توسعه هر چه بهتر APIها گذاشته و ویژگی‌های بی‌شماری را در این زمینه توسعه داده است. اگر که پیشتر با لاراول کار کرده و دوره‌های مقدماتی را طی کرده‌اید، باید بگویم که شانس در خانه شما را زده، چرا که امروز می‌توانید با شرکت در این دوره آموزشی، به صورت کامل با تمام ویژگی‌های لاراول در زمینه توسعه API آشنا شوید.</span>
      </div>


                         {/* masters  */}

        <Master />

                        {/* coursesmap */}


        <Coursesmap />


      {/* Comments Section */}
        <CommentSection />


        {/* Commentmap */}

        <Commentdiv />

    </div>
  );
};

export { Courses };