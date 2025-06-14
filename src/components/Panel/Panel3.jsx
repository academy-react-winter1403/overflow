import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
import { Getmycourse } from "../../core/services/api/userpanelapi/panelapis";
import MycourseCard from "../Common/MycourseCard";

const Panel3 = () => {
  // const navigate = useNavigate();
  const itemsPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);
  const [newCoursesData, setNewCoursesData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch courses data
  const getNewCoursesData = async () => {
    try {
      const response = await Getmycourse();
      if (Array.isArray(response.listOfMyCourses)) {
        setNewCoursesData(response.listOfMyCourses);
      } else {
        console.error("Unexpected response format:", response);
      }
    } catch (error) {
      console.error("Error fetching courses data:", error);
    }
  };

  useEffect(() => {
    getNewCoursesData();
  }, []);

  // Filter courses based on search query
  const filtermycours = newCoursesData.filter(
    (mycourse) =>
      mycourse?.courseTitle
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      mycourse?.describe?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mycourse?.fullName?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate total pages based on filtered data
  const totalPages = Math.ceil(filtermycours.length / itemsPerPage);

  // Slice for current page
  const paginatedItems = filtermycours.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers for pagination controls
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="font-kalameh flex w-10/10 flex-row-reverse flex-wrap">
      <div className="flex w-10/10 flex-row-reverse flex-wrap">
        {/* Search Input */}
        <div>
          <input
            type="text"
            placeholder="جستجو دوره..."
            className="mt-5 mr-5 w-90 rounded-lg border border-gray-400 p-2 text-right max-sm:w-50"
            value={searchQuery}
            onChange={(mycourse) => {
              setSearchQuery(mycourse.target.value);
              setCurrentPage(1); // Reset to page 1 on new search
            }}
          />
        </div>

        {/* Course List */}
        <div className="mt-10 flex h-155 w-10/10 flex-col items-end  max-lg:h-150 max-lg:overflow-auto max-sm:h-150 max-sm:gap-0 max-sm:overflow-auto">
          {/* Header Row */}
          <div className="border-deep-blue flex w-10/10 flex-row-reverse justify-center border-b-4 pr-10 max-md:justify-start max-md:gap-8 max-md:text-xl">
            <p className="w-4/10 text-center text-xl font-bold transition-all duration-300 max-lg:mr-[-100px] max-lg:w-5/10 max-md:mr-[-1px]">
              نام دوره
            </p>
            <p className="w-3/10 pl-15 text-center text-xl font-bold transition-all duration-300 max-xl:mr-[-65px] max-xl:hidden max-lg:w-5/10 max-lg:text-center max-md:hidden">
              مدرس دوره
            </p>
            <p className="w-3/10 pr-15 text-right text-xl font-bold transition-all duration-300 max-lg:hidden">
              تاریخ شروع
            </p>
            <p className="w-3/10 pl-30 text-center text-xl font-bold transition-all duration-300 max-xl:pl-0">
              قیمت
            </p>
          </div>

          {/* Course Cards */}
          {paginatedItems.length > 0 ? (
            paginatedItems.map((course, index) => (
              <MycourseCard
                item={course}
                key={index}
              />
            ))
          ) : (
            <p className="font-iransans m-auto text-center text-3xl">
              دوره ای وجود ندارد
            </p>
          )}

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-4 space-x-2  m-auto">
            <button
              className="px-3 py-2 border border-gray-300 rounded-xl text-2xl"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              قبلی
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`px-5 py-2 rounded-xl text-2xl font-bold ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'border border-gray-300'}`}
                onClick={() => handlePageClick(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="px-3 py-2 border border-gray-300 rounded-xl text-2xl"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              بعدی
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Panel3 };