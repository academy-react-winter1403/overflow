import React from "react";
import HeroImg from "../../assets/landing/heroimg.png";
import bgShape from "../../assets/landing/bubbleBack.png";
import search from "../../assets/landing/search.png";
function Hero() {
  return (
    <section className="px-30 py-16 dark:bg-gray-900">
      <img
        src={bgShape}
        alt="Background Shape"
        className="z-0 absolute w-[1099px] h-[1099px] opacity-98 top-0 -right-20 "
      />
      <div className="relative z-10 flex items-center justify-between w-full">
        {/*Hero Image Section */}
        <img
          src={HeroImg}
          alt="آموزش"
          className=" max-w-[900px] flex-shrink-3 w-full h-auto"
        />

        {/* right section */}
        <div className=" w-full flex-shrink-2 flex text-right flex-col justify-start items-end md:w-1/2  space-y-6">
          <h1 className=" text-[59px]  font-black font-peyda  text-deep-blue dark:text-white">
            دنبال چی می‌گردی؟
          </h1>
          <p className="text-gray-500 font-vazir text-2xl dark:text-gray-300">
            ... دیگه وقتشه یه تکونی به خودت بدی
          </p>

          {/* Search Input */}
          <div className=" flex flex-row-reverse w-6/7 max-w-[590px] bg-white justify-between p-2 items-center gap-4 border-2 border-deep-blue rounded-3xl ">
            <input
              type="text"
              placeholder="...تو فقط اسم ببر"
              className="font-vazir text-[21px] font-bold text-gray-500  w-full md:w-[300px] h-[55px] rounded-full border border-none px-6 text-right focus:outline-none"
            />
            <button className="w-[55px] h-[53px] flex-shrink-0 bg-deep-blue text-white rounded-2xl">
              <img src={search} className="w-[38px] h-[38px] mx-auto my-auto" />
            </button>
          </div>

          {/* Description */}

          <h1 className="font-peyda text-[40px] font-black text-gray-600">
            آکادمی سپهر
          </h1>
          <p className="font-iransans text-2xl text-[#a7a7a7] -mt-2 text-right ">
            آکادمی آموزشی سپهر مکانی برای پیشرفت <br /> تو با تمرین مهارت‌های
            موردنیاز برای طراحی وب رو <br />
            هرچه سریع‌تر با بهترین روش یاد بگیری
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
