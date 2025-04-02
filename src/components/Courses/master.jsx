import { Link } from 'react-router';
import profile from '../../assets/Coursesimage/IMG_6504.png';
import bottomline from '../../assets/Coursesimage/Path 4.png';
import layout from '../../assets/Coursesimage/logout.png'

const Master = () => {
  return (

    <div className='absolute top-[250px] left-[-675px] rounded-4xl bg-white w-[470px] h-[320px]'>

                        {/* profile */}
        <div className='relative  h-[80px]'>
            <img className='absolute right-[30px] top-[30px]' src={profile}/>
            <span className='absolute right-[100px] top-[30px] text-sky-800 font-bold text-2xl '>آرمان غنی زاده</span>
            <p className='absolute right-[100px] top-[60px] text-xs'>مدرس دوره</p>
            <img className='absolute right-[30px] top-[100px] w-[410px]' src={bottomline}/>
        </div>

                        {/* span */}

        <span className='absolute right-[30px] top-[120px] w-[410px] text-right text-xs  '>از سال 92 وارد حوزه نرم افزار و برنامه نویسی شدم… طی 10 سال گذشته تجربه کار با زبانها و پلتفرمهای مختلفی رو دارم ولی4 سال اخیر به شکل متمرکز به عنوان فول استک وب مشغول به کار بودم و در حال حاضر استک اصلیم لاراول و ریکت هست اما خب میتونم بگم این روز…</span>

        <img className='absolute right-[30px] top-[230px] w-[410px]' src={bottomline} />

        <Link to='/'>
            <div className='absolute right-[50px] top-[250px] w-[410px] text-xs'>مشاهده سایر آموزش های این استاد</div>
            <img className='absolute right-[150px] top-[253px]' src={layout} />
        </Link>

    </div>

    )
}

export  {Master}