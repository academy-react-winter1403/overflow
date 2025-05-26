import hat from "../../assets/techers/mortarboard.png"
import star from "../../assets/techers/starr.png"
import clock from "../../assets/techers/clock.png"
const Techerscard = ({ item }) => {
    return (
        <div className="relative h-85 w-10/10 flex justify-center mt-10 m-auto hover:scale-105 transition-transform duration-300">
            <div className="w-10/10 flex relative ">
                <div className="relative w-10/10 h-70 float-left rounded-3xl bg-white dark:bg-gray-400/95 ">
                    <div className="h-9/10 mt-4 ml-7 w-7/15">
                        <div dir="rtl"
                        className="w-full text-4xl font-peyda text-gray-700 font-black mt-2 h-4/20 truncate dir-rtl  text-right ">
                            {item.fullName}
                        </div>
                        <div className="w-full h-6/20 font-iransans text-xs text-[#a7a7a7] text-right dark:text-white ">
                            {item.linkdinProfileLink}
                        </div>
                        <div className="w-full h-5/20 flex flex-wrap row justify-center gap-2">
                            <div className="w-6/14 h-4/12 font-vazir bg-gray-200 rounded-3xl mt-1 dark:text-black  "> تعداد دوره   {item.courseCounts}
                                <img className="float-right mr-3 w-2/17 h-9/10" src={hat} alt="" />
                            </div>
                            <div className="w-6/14 h-4/12 font-vazir bg-gray-200 rounded-3xl mt-1 dark:text-black"> 2 سال
                                <img className="float-right mr-3  w-2/17 h-9/10" src={clock} alt="" />
                            </div>
                            <div className="w-6/14 h-4/12 font-vazir bg-gray-200 rounded-3xl dark:text-black"> 10/10
                                <img className="float-right mr-3 w-2/17 h-9/10" src={star} alt="" />
                            </div>
                            <div className="w-6/14 h-4/12  font-vazir bg-gray-200 rounded-3xl dark:text-black">تعداد اخبار   {item.newsCount}
                                <img className="float-right mr-3 w-2/17 h-9/10" src={hat} alt="" />
                            </div>
                        </div>
                        <div className="w-full border-t border-gray-300 text-left leading-25 font-vazir text-[#436E8E] mt-1 h-5/20">
                           مشاهده جزییات
                        </div>
                    </div>
                </div>
                <img src={item.pictureAddress} className="absolute shadow-[1px 1px 10px 1px black] rounded-3xl float-right w-3/7 h-60 top-1/20 right-[-17px]"/>
            </div>
        </div>
    );
};

export { Techerscard };

