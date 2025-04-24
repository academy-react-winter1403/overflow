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
      <section className="relative z-10 flex justify-center overflow-hidden">
        <div className="relative flex h-119 w-264 flex-col items-center space-y-6">
          <div className="absolute top-16 -left-1 h-95 w-241 rounded-sm dark:bg-deep-blue/55 bg-white opacity-80 shadow-[0px_5px_27.5px_rgba(0,0,0,0.16)]"></div>

          {servicesData.map((service) => (
            <div className="z-10 mt-11 mr-16" key={service.id}>
              <div
                className="transition-all duration-300  hover:scale-102 hover:shadow-2xl hover:shadow-deep-blue flex h-95 w-241 flex-col gap-6 rounded-sm dark:bg-deep-blue/55  bg-white px-11 py-8 text-right shadow-[0px_5px_27.5px_rgba(0,0,0,0.16)] md:flex-row-reverse"
                style={{ transform: `translateY(-${serviceSlider * 448}px)` }}
              >
                {/* Image */}
                <div className="flex w-full justify-center md:w-1/3">
                  <img
                    src={serviceImges}
                    alt={service.title}
                    className="h-[328px] w-[328px] rounded-md object-cover"
                  />
                </div>

                {/* Text content */}
                <div className="w-full space-y-4 md:w-2/3">
                  <h3 className="font-kalameh text-deep-blue dark:text-gray-200 mt-16 text-5xl font-black">
                    {service.title}
                  </h3>
                  <p className="font-vazir text-lg leading-relaxed font-semibold dark:text-gray-200 text-gray-400">
                    {service.description}
                  </p>
                </div>

                <div className="absolute -right-30 bottom-30 mb-6 flex items-center">
                  <div className="z-10 ml-8 flex flex-col items-center space-x-2">
                    <button onClick={nextService}>
                      <img
                        src={up}
                        className="w-4 hover:scale-110 hover:cursor-pointer"
                      />
                    </button>

                    <div className="font-vazir my-2 text-2xl font-bold dark:text-gray-200 text-gray-700">
                      {serviceSlider + 1}/ 6
                    </div>
                    <button onClick={prevService}>
                      <img
                        src={up}
                        className="w-4  rotate-180 hover:scale-110 hover:cursor-pointer"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
