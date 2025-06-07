import hat from "../../assets/techers/mortarboard.png"
import star from "../../assets/techers/starr.png"
import clock from "../../assets/techers/clock.png"
import fallbackteacher from "../../assets/techers/teacherbackup.webp"
import SmartImage from "../../components/Common/SmartImage";
const Techerscard = ({ item }) => {
    return (
        <div className="max-sm:hover:scale-110 max-sm:transition-transform max-sm:duration-300 relative max-sm:h-auto h-85 w-10/10 flex justify-center mt-10 m-auto hover:scale-105 transition-transform duration-300 max-sm:mt-0 max-lg:mt-0 max-lg:h-auto">
            <div className="w-10/10 flex relative  max-sm:h-auto ">
                <div className="relative w-10/10 h-70 float-left rounded-3xl bg-white dark:bg-gray-400/95 max-sm:h-27 ">
                    <div className="h-9/10 mt-4 ml-7 w-7/15  max-sm:w-7/10 max-sm:ml-0 max-sm:flex max-sm:flex-col max-sm:gap-5">
                        <div dir="rtl"
                        className="w-full text-4xl font-iransans text-gray-700 font-black mt-2 h-4/20 truncate dir-rtl  text-right max-sm:h-auto max-sm:text-2xl max-sm:mt-[-10px]">
                            {item.fullName}
                        </div>
                        <div className="w-full h-6/20 font-iransans text-xs text-[#a7a7a7] text-right dark:text-white max-sm:hidden">
                            {item.linkdinProfileLink}
                        </div>
                        <div className="w-full h-5/20 flex flex-wrap flex-row justify-center max-sm:justify-end gap-2  ">
                            <div className="w-6/14 h-4/12 font-vazir bg-gray-200 rounded-3xl mt-1 dark:text-black  max-sm:mt-0 max-sm:w-4/10 max-sm:h-auto max-sm:pt-2"> تعداد دوره   {item.courseCounts}
                                <img className="float-right mr-3 w-2/17 h-9/10 max-sm:hidden" src={hat} alt="" />
                            </div>
                            <div className="w-6/14 h-4/12 font-vazir bg-gray-200 rounded-3xl mt-1 dark:text-black max-sm:hidden"> 2 سال
                                <img className="float-right mr-3  w-2/17 h-9/10" src={clock} alt="" />
                            </div>
                            <div className="w-6/14 h-4/12 font-vazir bg-gray-200 rounded-3xl dark:text-black max-sm:mt-0 max-sm:w-5/10 max-sm:h-auto max-sm:hidden"> 10/10
                                <img className="float-right mr-3 w-2/17 h-9/10" src={star} alt="" />
                            </div>
                            <div className="w-6/14 h-4/12  font-vazir bg-gray-200 rounded-3xl dark:text-blackmax-sm:mt-0 max-sm:w-4/10 max-sm:h-auto max-sm:pt-2 dark:text-gray-700">تعداد اخبار   {item.newsCount}
                                <img className="float-right mr-3 w-2/17 h-9/10 max-sm:hidden" src={hat} alt="" />
                            </div>
                        </div>
                        <div className="w-full border-t border-gray-300 text-left leading-25 font-vazir text-[#436E8E] mt-1 h-5/20 max-sm:hidden">
                           مشاهده جزییات
                        </div>
                    </div>
                </div>
                <SmartImage src={item?.pictureAddress} fallback={fallbackteacher} alt={item.title} className="absolute shadow-[1px 1px 10px 1px black] rounded-3xl float-right w-3/7 h-60 top-1/20 right-[-17px] max-sm:h-25 max-sm:absolute max-sm:top-0 max-sm:p-3 max-sm:right-1 max-sm:w-3/10 " />
                
            </div>
        </div>
    );
};

export { Techerscard };

