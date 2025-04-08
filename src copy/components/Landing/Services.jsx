import React, { useEffect, useState } from "react";
import { getApi } from "../../core/services/api/getApi";
import serviceImges from "../../assets/landing/services.png";
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
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800"> سرویس ها </h2>
        <div className="flex space-x-2">
          <button className="text-blue-500 hover:underline">
            مشاهده همه سرویس ها{" "}
          </button>
          <button className="text-gray-500 hover:underline">1 / 2</button>
        </div>
      </div>

      <div className="space-y-6">
        {servicesData.map((newsItem) => (
          <div key={newsItem.id} className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-between items-center">
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  {newsItem.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  {newsItem.miniDescribe}
                </p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                  مشاهده بیشتر
                </button>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={
                    newsItem.currentImageAddressTumb ||
                    "/path-to-your-default-image.jpeg"
                  } // Fallback to default image if no image URL
                  alt={newsItem.title}
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
