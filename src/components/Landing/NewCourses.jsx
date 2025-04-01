import React from "react";

function NewCourses() {
  const courses = [
    {
      title: "آموزش پیشرفته وردپرس",
      description:
        "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.",
      instructor: "استاد موند زاده",
      price: "رایگان!",
      duration: "1:05:31",
      image: "path/to/image.jpg", // Replace with actual image path
    },
    // Add more courses as needed
  ];

  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold text-blue-500 mb-6">
        جدید ترین دوره ها
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {courses.map((course, index) => (
          <div
            className="bg-white rounded-lg shadow-lg w-64 p-4 text-right"
            key={index}
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {course.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{course.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
              <span>{course.instructor}</span>
              <span>{course.duration}</span>
            </div>
            <span className="text-green-600 font-bold">{course.price}</span>
          </div>
        ))}
      </div>
      <a href="#" className="inline-block mt-6 text-blue-500 hover:underline">
        مشاهده همه
      </a>
    </div>
  );
}

export default NewCourses;
