import React, { useEffect, useState } from "react";
import profile from "../../assets/userpanel/Path 31.png";
import { favecourse } from "../../core/services/api/userpanelapi/panelapis";
import SmartImage from "../Common/SmartImage";

const Fave = () => {
  const [fave, setFave] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  const getFaveCourse = async () => {
    try {
      const response = await favecourse();
      setFave(response.favoriteCourseDto || []);
    } catch (error) {
      console.error("Error fetching favorite courses:", error);
    }
  };

  useEffect(() => {
    getFaveCourse();
  }, []);

  // Filtering and paginating data
  const filteredCourses = fave.filter(
    (favorite) =>
      favorite?.courseTitle
        ?.toLowerCase()
        ?.includes(searchQuery.toLowerCase()) ||
      favorite?.describe?.toLowerCase()
        ?.includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Generate array for page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <div className="font-kalameh flex h-185 w-full flex-col overflow-auto pt-10 text-2xl font-bold">
      
      {/* Search Input */}
      <div>
        <input
          type="text"
          placeholder="جستجو دوره..."
          className="w-1/2 rounded-lg border border-gray-400 p-2 text-right"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
        />
      </div>

      {/* Header Row */}
      <div className="border-deep-blue flex flex-row-reverse justify-center border-b-4 pr-35 max-md:justify-start max-md:gap-8 max-md:text-xl">
        <p className="w-4/10 text-right">نام دوره</p>
        <p className="w-3/10 text-right max-md:hidden">مدرس دوره</p>
        <p className="w-3/10 pr-5 text-right max-lg:hidden">سطح دوره</p>
        <p className="w-3/10 pr-6 text-right max-lg:hidden">وضعیت</p>
      </div>

      {/* Courses List */}
      <div>
        {paginatedCourses.length > 0 ? (
          paginatedCourses.map((item, index) => (
            <div
              key={index}
              className="m-auto mt-3 flex h-20 w-11/12 flex-row-reverse items-center justify-start gap-3 rounded-2xl bg-gray-200 pr-5 hover:bg-gray-400 dark:bg-gray-500"
            >
              <SmartImage
                src={item?.tumbImageAddress}
                fallback={profile}
                alt={item.title}
                className="h-12 w-12 rounded-[50px]"
              />
              <div className="h-17 w-3/10 truncate pt-5 pr-5 text-right">
                {item.courseTitle || "No Name"}
              </div>
              <div className="h-full w-3/10 truncate pt-5 text-right max-md:hidden">
                {item.teacheName || "No Teacher"}
              </div>
              <div className="h-full w-3/10 pt-5 text-right max-lg:hidden">
                {item.levelName.slice(0, 10) || "No Date"}
              </div>
              <div className="h-full w-2/10 truncate pt-5 text-right max-lg:hidden">
                {item.typeName || "No Status"}
              </div>
            </div>
          ))
        ) : (
          <p className="mt-10 text-center">دوره ای وجود ندارد</p>
        )}
      </div>

      {/* Custom Pagination Buttons */}
      <div className="flex justify-center items-center mt-5 space-x-2">

        {/* قبلی */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`mx-2 px-4 py-2 rounded-lg border border-gray-300 transition-all ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
          }`}
        >
          قبلی
        </button>

        {/* Numbered buttons */}
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`mx-1 px-4 py-2 rounded-lg border transition-all ${
              currentPage === number
                ? "bg-blue-500 text-white font-semibold"
                : "hover:bg-gray-200"
            }`}
          >
            {number}
          </button>
        ))}

        {/* بعدی */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`mx-2 px-4 py-2 rounded-lg border border-gray-300 transition-all ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
          }`}
        >
          بعدی
        </button>
      </div>
    </div>
  );
};

export { Fave };