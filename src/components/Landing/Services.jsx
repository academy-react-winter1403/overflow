import React, { useEffect, useState } from "react";
import { getApi } from "../../core/services/api/getApi";
import serviceImges from "../../assets/landing/services.png";
import bubbleBack from "../../assets/landing/bubbleBack.png";
import path3 from "../../assets/landing/path3.png";


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
  // useEffect(() => {
  //   getServices();

  // }, []);
  // const getServices= async () => {
  //   const response = await getApi(URL, "key");
  //   setServicesData(response.news);
  // };

  return (
    <div className=" flex flex-col  py-10">
     <div className="relative z-0">
             <img
               src={bubbleBack}
               alt=""
               className="absolute w-[1511px] h-[1511px] opacity-98 -top-130 -right-190 "
             />
             <img
               src={bubbleBack}
               alt=""
               className="absolute w-[1511px] h-[1511px] opacity-98 top-90 -left-158 "
             />
             <img
               src={path3}
               alt=""
               className=" absolute h-[548px]  opacity-98 top-70 -left-0 "
             />
             </div>
      <h2 className="relative mb-14 text-5xl z-10 font-peyda font-black text-deep-blue">
       خدمات
      </h2>
      <section className=" justify-center flex overflow-hidden relative z-10">
        <div className=" w-264 h-119 relative items-center flex flex-col space-y-6">
          <div className="absolute top-16 -left-1 bg-white opacity-80 w-241 h-95  rounded-sm shadow-[0px_5px_27.5px_rgba(0,0,0,0.16)] "></div>

          {servicesData.map((service) => (
            <div className="mt-11 mr-16 z-10" key={service.id}>
              <div className="bg-white w-241 h-95 rounded-sm shadow-[0px_5px_27.5px_rgba(0,0,0,0.16)] py-8 px-11 flex flex-col md:flex-row-reverse gap-6 text-right">
                {/* Image */}
                <div className="md:w-1/3 w-full flex justify-center">
                  <img
                    src={serviceImges}
                    alt={service.title}
                    className="w-[328px] h-[328px] object-cover rounded-md"
                  />
                </div>

                {/* Text content */}
                <div className="md:w-2/3 w-full space-y-4 ">
                  <h3 className="mt-16 text-5xl font-kalameh font-black text-deep-blue">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-lg font-semibold font-vazir leading-relaxed">
                    {service.description}
                  </p>
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
