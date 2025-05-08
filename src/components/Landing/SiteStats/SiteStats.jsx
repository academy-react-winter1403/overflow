import React, { useEffect, useState } from "react";
import teacherBack from "../../../assets/landing/teacher.png";
import path4 from "../../../assets/landing/path4.png";
import { getApi } from "../../../core/services/api/getApi";

const URL = "/Home/LandingReport";

const InfoCard = ({ items }) => {
  // Array of statistics
  const stats = [
    { value: items.courseCount, label: "دوره‌ها" },
    { value: items.newsCount, label: "خبرها" },
    { value: items.studentCount, label: "دانشجویان" },
    { value: items.teacherCount, label: "اساتید" },
  ];

  return (
    <div className="flex relative justify-center my-50 p-4 gap-28">
      {/* Background */}
      <img
        src={teacherBack}
        alt=""
        className="absolute -top-50 -right-20 w-[1184px] h-[880px]"
      />
      <img
        src={path4}
        alt=""
        className="absolute top-120 -left-9 w-[1354.6px] h-[672.1px]"
      />

      {/* Stats rendering */}
      {stats&&stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center font-vazir text-[26px] font-bold justify-center"
        >
          <span className="text-gray-400 dark:text-gray-200">
            {Number(stat.value).toLocaleString("fa-IR")}
          </span>
          <span className="text-gray-600 dark:text-gray-200">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default function SiteStats() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await getApi(URL);
    setData(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="z-10 p-8">
      <InfoCard items={data} />
    </div>
  );
}