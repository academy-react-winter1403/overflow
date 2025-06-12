import React, { useEffect, useState } from "react";
import { getApi } from "../../core/services/api/getApi";
import serviceImges from "../../assets/landing/services.png";
import bubbleBack from "../../assets/landing/bubbleBack.png";
import path3 from "../../assets/landing/path3.png";
import up from "../../assets/News/up.png";

function Services() {
  const [servicesData, setServicesData] = useState([
    {
      id: "1",
      title: "مدرک معتبر",
      description:
        "پس از پایان هر دوره، شما یک مدرک معتبر دریافت خواهید کرد که قابلیت ترجمه و استفاده در سراسر دنیا را دارد.",
      image: { serviceImges }, // می‌توانید آدرس تصویر خود را وارد کنید
    },
    {
      id: "2",
      title: "پشتیبانی 24 ساعته",
      description:
        "پشتیبانی آنلاین 24 ساعته برای رفع مشکلات و سوالات شما در طول دوره. تیم ما آماده کمک به شما در هر زمان است.",
      image: { serviceImges },
    },
    {
      id: "3",
      title: "دوره‌های تخصصی",
      description:
        "دوره‌های تخصصی برای افرادی که می‌خواهند در زمینه‌های خاصی مانند React، Node.js، و Python متخصص شوند.",
      image: { serviceImges },
    },
    {
      id: "4",
      title: "گواهی‌نامه قابل ترجمه",
      description:
        "گواهی‌نامه‌های صادر شده قابل ترجمه و استفاده در کشور‌های مختلف برای درخواست شغلی و مهاجرت هستند.",
      image: { serviceImges },
    },
    {
      id: "5",
      title: "دوره‌های پروژه محور",
      description:
        "در این دوره‌ها شما پروژه‌های واقعی را اجرا می‌کنید که به شما در تسلط به مهارت‌های برنامه‌نویسی کمک خواهد کرد.",
      image: { serviceImges }, // اضافه کردن تصویر برای این سرویس
    },
    {
      id: "6",
      title: "دوره‌های آنلاین با محتوای به‌روز",
      description:
        "دوره‌های آنلاین با محتوای به‌روز که بر اساس نیازهای بازار و تکنولوژی‌های جدید به‌روز می‌شوند.",
      image: { serviceImges }, // اضافه کردن تصویر برای این سرویس
    },
  ]);
  const [serviceSlider, setServiceSlider] = useState(0);

  const nextService = () => {
    if (serviceSlider < servicesData.length - 1) {
      setServiceSlider((prev) => prev + 1);
    } else {
      setServiceSlider(0);
    }
    console.log(serviceSlider);
  };
  const prevService = () => {
    if (serviceSlider == 0) {
      setServiceSlider(servicesData.length - 1);
    } else {
      setServiceSlider((prev) => prev - 1);
    }
  };
  //

  return (
    <div className="relative flex flex-col py-10">
      <div className="relative z-0">
        <img
          src={bubbleBack}
          alt=""
          className="absolute -top-130 -right-190 h-[1511px] w-[1511px] opacity-98"
        />
        <img
          src={bubbleBack}
          alt=""
          className="absolute top-90 -left-158 h-[1511px] w-[1511px] opacity-98"
        />
        <img
          src={path3}
          alt=""
          className="absolute top-70 -left-0 h-[548px] opacity-98"
        />
      </div>
      <h2 className="font-peyda text-deep-blue relative z-10 mb-14 text-5xl font-black">
        خدمات
      </h2>
      <section className="relative z-10 flex justify-center max-xl:flex-col max-xl:items-center overflow-hidden">

        {/* Mobile (vertical) slider navigation */}
        <div className="mb-6 flex items-center xl:hidden">
          <div className="ml-8 flex items-center space-x-2">
            <button onClick={nextService}>
              <img
                src={up}
                className="w-8 hover:scale-110 hover:cursor-pointer"
              />
            </button>
            <div className="font-vazir my-2 text-4xl font-bold text-gray-700 dark:text-gray-200">
              {serviceSlider + 1}/ 6
            </div>
            <button onClick={prevService}>
              <img
                src={up}
                className="w-8 rotate-180 hover:scale-110 hover:cursor-pointer"
              />
            </button>
          </div>
        </div>
        {/* Slider container */}
        <div className="flex h-119 w-264 flex-col items-center space-y-6 overflow-hidden">
          <div className="dark:bg-deep-blue/55 absolute h-99 w-264 rounded-sm bg-white opacity-80 shadow-[0px_5px_27.5px_rgba(0,0,0,0.16)] max-xl:hidden"></div>

          {servicesData &&
            servicesData.map((service, index) => (
              <div
                key={service.id}
                style={{ transform: `translateY(-${serviceSlider * 448}px)` }}
                className="z-10 mt-11 mr-16 transition-all duration-300 hover:scale-102 hover:shadow-2xl max-xl:ml-30 max-md:ml-15"
              >
                <div className="flex h-95 w-241 flex-row-reverse gap-6 rounded-sm bg-white px-11 py-8 text-right shadow-[0px_5px_27.5px_rgba(0,0,0,0.16)] dark:bg-deep-blue/55 max-xl:w-220 max-lg:w-175 max-md:w-150 max-md:px-5 max-sm:w-100">
                  <div className="flex w-full justify-center max-md:w-[120px] max-sm:hidden md:w-2/5 lg:w-1/3">
                    <img
                      src={serviceImges}
                      alt={service.title}
                      className="h-[328px] w-[328px] rounded-md object-cover"
                    />
                  </div>
                  <div className="w-full space-y-4 text-center md:w-2/3">
                    <h3 className="font-kalameh mt-16 text-5xl font-bold text-deep-blue dark:text-gray-200 max-md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="font-vazir text-2xl truncate leading-relaxed text-gray-400 dark:text-gray-200">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* Desktop (side) slider navigation */}
        <div className="mb-6 flex items-center max-xl:hidden">
          <div className="ml-8 flex flex-col items-center space-x-2">
            <button onClick={nextService}>
              <img
                src={up}
                className="w-4 hover:scale-110 hover:cursor-pointer"
              />
            </button>
            <div className="font-vazir my-2 text-2xl font-bold text-gray-700 dark:text-gray-200">
              {serviceSlider + 1}/ 6
            </div>
            <button onClick={prevService}>
              <img
                src={up}
                className="w-4 rotate-180 hover:scale-110 hover:cursor-pointer"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
