import React, { useState, useEffect } from "react";
import bgShape from "../../assets/landing/bubbleBack.png";
import { Techerscard } from "./teachercard";
import { getApi } from "../../core/services/api/getApi";

const AllTeacers = () => {
  const [teacherData, setTeacherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const getTeacherDetails = async () => {
    try {
      const response = await getApi("/Home/GetTeachers");
      setTeacherData(response);
    } catch (err) {
      console.error("Error fetching teacher details:", err.message);
      setError("Failed to load teacher details.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTeacherDetails();
  }, []);

  //  Calculate the teachers to display based on pagination
  const indexOfLastTeacher = currentPage * itemsPerPage;
  const indexOfFirstTeacher = indexOfLastTeacher - itemsPerPage;
  const currentTeachers = teacherData.slice(indexOfFirstTeacher, indexOfLastTeacher);

  return (
    <div className="w-9/10 pt-5 m-auto relative flex flex-row flex-wrap gap-10 justify-center  max-lg:mb-50 ">
      <div className="w-10/10 pr-10 pt-5 rounded-2xl h-20  text-5xl  font-iransans text-deep-blue text-right dark:text-white font-bold bg-white ">
        اساتید
      </div>
      <img
        src={bgShape}
        alt="Background Shape"
        className="absolute w-[1099px] h-[1099px] opacity-98 top-50 left-250"
      />

      {isLoading ? (
        <p className="text-center mt-10 text-gray-500">در حال بارگذاری...</p>
      ) : error ? (
        <p className="text-center mt-10 text-red-500">{error}</p>
      ) : (
        currentTeachers?.map((item, index) => (
          <div className="w-3/10 flex  max-xl:w-4/10 max-lg:w-8/10 max-sm:w-10/10 transition-all duration-300 ">
            <Techerscard key={index} item={item} />
          </div>
        ))
      )}
        {/* Pagination Controls */}
      <div className="w-full flex justify-center mt-5 font-iransans font-bold transition-all duration-300  ">
        <button
          className="px-4 py-2 mr-2 bg-gray-300 rounded max-sm:hidden"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          قبلی
        </button>

        {/* Page Numbers */}
        {Array.from({ length: Math.ceil(teacherData.length / itemsPerPage) }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-1 rounded-[50px] max-sm:mx-0.5 ${currentPage === index + 1 ? "bg-deep-blue text-white" : "bg-gray-300"}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="px-4 py-2 ml-2 bg-gray-300 rounded font-iransans font-bold max-sm:hidden"
          onClick={() => setCurrentPage((prev) => Math.max(prev + 1, Math.ceil(teacherData.length / itemsPerPage)))}
          disabled={currentPage >= Math.ceil(teacherData.length / itemsPerPage)}
        >
          بعدی
        </button>
      </div>
    </div>
  );
};

export { AllTeacers };