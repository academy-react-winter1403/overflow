import React from "react";
import HeroImg from '../../assets/landing/heroimg.png'

function Hero() {
  return (
    <section className="flex flex-row-reverse items-center justify-between px-10 py-16 bg-white dark:bg-gray-900">
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-right space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          دنبال چی می‌گردی؟
        </h1>
        <p className="text-gray-500 dark:text-gray-300">
          دیگه وقتشه یه نقشه‌ای به خودت بدی...
        </p>

        {/* Search Input */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="...دوره فقط اسم ببر"
            className="w-full md:w-[300px] h-[50px] rounded-full border border-gray-300 px-4 text-right focus:outline-none"
          />
          <button className="w-[100px] h-[50px] bg-blue-500 text-white rounded-full">
            جستجو
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          آکادمی آموزشی سپهر مکانی برای پیشرفت تو با تمرین مهارت‌های موردنیاز
          برای طراحی وب و هرچه سریع‌تر با بهترین روش یاد بگیری
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={HeroImg}
          alt="آموزش"
          className="max-w-[400px] w-full h-auto"
        />
      </div>
    </section>
  );
}

export default Hero;
