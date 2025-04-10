import logo from '../../assets/userpanel/Logo.png'
import home from '../../assets/userpanel/home.png'
import courses from '../../assets/userpanel/Path 29.png'
import ticket from '../../assets/userpanel/Path 30.png'
import profile from '../../assets/userpanel/Path 31.png'
import exit from '../../assets/userpanel/Path 32.png'
import userprofile from '../../assets/userpanel/profile-user.png'
import moon from '../../assets/userpanel/moon.png'
import word from '../../assets/userpanel/word.png'
import DOT from '../../assets/userpanel/Ellipse 2.PNG'
import clock from '../../assets/userpanel/clock.png'

const Panel = () => {
  return (
    <div className="flex flex-row-reverse flex-wrap w-9/10 border-2 bg-gray-100 ml-20">
                            {/* right panel */}
        <div className="w-3/10 bg-white h-180 rounded-2xl">

            <div className='flex items-end flex-row-reverse w-10/10 h-20 pr-9'>
                <img className='w-2/10' src={logo} />
                <span className='text-deep-blue text-2xl font-bold mr-5'>آکادمی سپهر</span>
            </div>

            <div className='flex flex-col items-end w-10/10 h-100 mt-10'>
                                {/* home */}
                <div className='w-10/10 flex items-end flex-row-reverse pr-10 mt-5'>
                    <img className='w-1/10' src={home} />
                    <span className='mr-5 text-gray-500'>پیشخوان</span>
                </div>
                                {/* courses */}
                <div className='w-10/10 flex items-end flex-row-reverse pr-10 mt-5'>
                    <img className='w-1/10' src={courses} />
                    <span className='mr-5 text-gray-500'>دوره های من</span>
                </div>
                                {/* ticket */}  
                <div className='w-10/10 flex items-end flex-row-reverse pr-10 mt-5'>
                    <img className='w-1/10' src={ticket} />
                    <span className='mr-5 text-gray-500'>تیکت ها</span>
                </div>
                                {/* profile */}
                <div className='w-10/10 flex items-end flex-row-reverse pr-10 mt-5'>
                    <img className='w-1/10' src={profile} />
                    <span className='mr-5 text-gray-500'>جزییات حساب</span>
                </div>
                                {/* exit */}    
                <div className='w-10/10 flex items-end flex-row-reverse pr-10 mt-5'>
                    <img className='w-1/10' src={exit} />
                    <span className='mr-5 text-gray-500'>خروج</span>
                </div>
                
            </div>
        </div>
                            
        <div className='flex flex-row-reverse flex-wrap w-7/10  border-2'>
                            {/* top side */}
            <div className='flex flex-row-reverse w-10/10 text-3xl h-15 pt-5'>
                            
                <div className='flex flex-row-reverse w-6/10 pr-5 '>آرمان غنی زاده عزیز؛ خوش اومدی 🙌</div>

                <div className='pl-2 flex flex-row w-3/10 gap-2.5  mr-21'>
                    <img src={userprofile} />
                    <img src={moon} />
                </div>

            </div>
                            {/* courses map */}
                            
            <div className='flex flex-row-reverse w-10/10 h-auto justify-center gap-8 mt-[-150px]'>

                            {/* cord courses */}

                <div className='flex flex-row-reverse flex-wrap w-3/10 h-80 bg-white rounded-2xl justify-center'>

                    <img className='w-9/10 h-40 mt-[-40px]' src={word} />

                    <div className='flex flex-col text-right w-10/10 rounded-2xl mt-[-190px]'>

                        <h1 className=' w-10/10 pr-6 mt-45'>آموزش پیشرفته وردپرس</h1>
                        <span className=' pt-2 pr-6 text-xs '>در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.</span>
                        
                        <div className='flex flex-row text-right items-end justify-end pr-7 mt-5'>
                            <p className='text-xs text-deep-blue mr-1 '>استاد موذن زاده</p>
                            <img className='w-1/30' src={DOT} />
                        </div>

                        <div className='flex flex-row-reverse items-end justify-end mt-5 pt-2 border-t-2 border-gray-300 w-9/10 ml-3'>

                            <div className='text-white items-center justify-start flex bg-gray-400 rounded-2xl w-5/10 ml-20 pl-2'>
                                10:10:00
                                <img className='ml-5' src={clock} />
                            </div>

                            <span className='text-deep-blue '>رایگان!</span>

                        </div>

                    </div>

                </div> 

                <div className='flex flex-row-reverse flex-wrap w-3/10 h-80 bg-white rounded-2xl justify-center'>

                    <img className='w-9/10 h-40 mt-[-40px]' src={word} />

                    <div className='flex flex-col text-right w-10/10 rounded-2xl mt-[-190px]'>

                        <h1 className=' w-10/10 pr-6 mt-45'>آموزش پیشرفته وردپرس</h1>
                        <span className=' pt-2 pr-6 text-xs '>در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.</span>
                        
                        <div className='flex flex-row text-right items-end justify-end pr-7 mt-5'>
                            <p className='text-xs text-deep-blue mr-1 '>استاد موذن زاده</p>
                            <img className='w-1/30' src={DOT} />
                        </div>

                        <div className='flex flex-row-reverse items-end justify-end mt-5 pt-2 border-t-2 border-gray-300 w-9/10 ml-3'>

                            <div className='text-white items-center justify-start flex bg-gray-400 rounded-2xl w-5/10 ml-20 pl-2'>
                                10:10:00
                                <img className='ml-5' src={clock} />
                            </div>

                            <span className='text-deep-blue '>رایگان!</span>

                        </div>

                    </div>

                </div> 

                <div className='flex flex-row-reverse flex-wrap w-3/10 h-80 bg-white rounded-2xl justify-center'>

                    <img className='w-9/10 h-40 mt-[-40px]' src={word} />

                    <div className='flex flex-col text-right w-10/10 rounded-2xl mt-[-190px]'>

                        <h1 className=' w-10/10 pr-6 mt-45'>آموزش پیشرفته وردپرس</h1>
                        <span className=' pt-2 pr-6 text-xs '>در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.</span>
                        
                        <div className='flex flex-row text-right items-end justify-end pr-7 mt-5'>
                            <p className='text-xs text-deep-blue mr-1 '>استاد موذن زاده</p>
                            <img className='w-1/30' src={DOT} />
                        </div>

                        <div className='flex flex-row-reverse items-end justify-end mt-5 pt-2 border-t-2 border-gray-300 w-9/10 ml-3'>

                            <div className='text-white items-center justify-start flex bg-gray-400 rounded-2xl w-5/10 ml-20 pl-2'>
                                10:10:00
                                <img className='ml-5' src={clock} />
                            </div>

                            <span className='text-deep-blue '>رایگان!</span>

                        </div>

                    </div>

                </div>




            </div>
            
        </div>


    </div>
  )
}

export  {Panel}