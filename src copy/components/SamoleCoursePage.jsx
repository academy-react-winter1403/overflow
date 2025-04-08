import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../core/services/api/getApi";

function CourseDetailPage() {
  const  {id}  = useParams();
  console.log(id)
  const [courseData, setCourseData] = useState(null);

  const getCourseDetails = async () => {
    const response = await getApi(
      `/Home/GetCourseDetails?CourseId=${id}`
    );
    console.log("getCourseDetails", response);
    setCourseData(response);
  };

  useEffect(() => {
    getCourseDetails();
  }, [id]);

  if (!courseData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden">
        <img
          src={courseData.imageAddress || "default-image.jpg"}
          alt="Course Banner"
          className="w-full h-96 object-cover"
        />
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
          <h1 className="text-4xl font-bold">{courseData.title}</h1>
          <p className="text-xl">{courseData.teacherName}</p>
          <p className="text-lg">{`${courseData.startTime} - ${courseData.endTime}`}</p>
          <p className="text-xl mt-2">{`تومان ${courseData.cost}`}</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold">درباره این دوره</h2>
        <p className="text-gray-700 mt-4">{courseData.describe}</p>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold">مهارت های فنی</h3>
        <ul className="list-disc pl-6 mt-4">
          {courseData.techs.map((tech, index) => (
            <li key={index} className="text-gray-700">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold">نظرات</h3>
        <textarea
          placeholder="نظر خود را بنویسید"
          className="w-full mt-4 p-3 border border-gray-300 rounded-lg"
        ></textarea>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          ارسال نظر
        </button>
      </div>
    </div>
  );
}

export default CourseDetailPage;
