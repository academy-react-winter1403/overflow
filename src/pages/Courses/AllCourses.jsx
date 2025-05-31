import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../../components/Common/Card";
import SearchSortBox from "../../components/Common/SearchSortBox";
import { useGetCourses } from "../../core/services/ReactQuery/useCourses";
import FilterAccordion from "../../components/Accardeon/Accardeon";
import FilterAccordionforskills from "../../components/Accardeon/Accardeonforskils";
import FilterAccordionforType from "../../components/Accardeon/Accardeonfortype";

const AllCourse = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [urlParams, setUrlParams] = useState({
    SortingCol: searchParams.get("SortingCol") || "lastUpdate",
    SortType: searchParams.get("SortType") || "DESC",
    CostDown: parseInt(searchParams.get("CostDown")) || 0,
    CostUp: parseInt(searchParams.get("CostUp")) || 50000000,
    Query: searchParams.get("Query") || "",
    PageNumber: parseInt(searchParams.get("PageNumber")) || 1,
    RowsOfPage: parseInt(searchParams.get("RowsOfPage")) || 12,
    TeacherId: searchParams.get("TeacherId") || "",
  });

  useEffect(() => {
    setSearchParams(urlParams);
  }, [urlParams, setSearchParams]);

  // Use React Query hook for data fetching
  const { data: courseData, isLoading, error } = useGetCourses(urlParams);

  // Extract courses array and total count
  const courses = courseData?.data || [];
  const totalCount = courseData?.totalCount || 0;

  // Calculate total pages based on total count
  const totalPages = Math.max(1, Math.ceil(totalCount / urlParams.RowsOfPage));

  const handleCostChange = (key, value) => {
    setUrlParams((prev) => ({
      ...prev,
      [key]: value,
      PageNumber: 1,
    }));
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return;
    }
    setUrlParams((prev) => ({
      ...prev,
      PageNumber: pageNumber,
    }));
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="h-48 rounded-t-lg bg-gray-200"></div>
            <div className="rounded-b-lg bg-white p-4">
              <div className="mb-2 h-4 w-3/4 rounded bg-gray-200"></div>
              <div className="h-4 w-1/2 rounded bg-gray-200"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center text-red-500">Error loading courses</div>
    );
  }

  return (
    <div className="m-auto flex w-9/10 flex-wrap justify-center">
      {/* <div className="font-iransans mt-14 mb-14 h-16 w-full rounded-lg text-right text-4xl leading-14 font-bold dark:bg-gray-400/95">
        دوره ها
      </div> */}
      <div className="container mx-auto px-4 py-10 text-gray-600">
        {/* Search and Sort Box */}
        <SearchSortBox
          setSort={({ col, SortType }) => {
            setUrlParams((prev) => ({
              ...prev,
              SortingCol: col,
              SortType: SortType || "DESC",
              PageNumber: 1,
            }));
          }}
          setSearch={(value) => {
            setUrlParams((prev) => ({
              ...prev,
              Query: value,
              PageNumber: 1,
            }));
          }}
          categoryURL="/Course/GetCourseCategory"
        />
      </div>

      <div className="flex w-full justify-center max-xl:flex-row max-xl:flex-wrap">
        <div className="mr-3 flex w-[75%] flex-row flex-wrap justify-center gap-4 pt-30 max-xl:w-1/1">
          {courses.map((item) => (
            <Card item={item} key={item.courseId} />
          ))}
        </div>

        <div className="mt-22 h-75 w-[25%] justify-items-center rounded-md p-4 max-xl:w-1/2 dark:bg-gray-400/95">
          <div className="m-auto rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
            {/* Price Range Filter */}
            <div className="border-b border-gray-200 p-6 dark:border-gray-700">
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                محدوده قیمت
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>
                    از {Number(urlParams.CostDown).toLocaleString()} تومان
                  </span>
                  <span>
                    تا {Number(urlParams.CostUp).toLocaleString()} تومان
                  </span>
                </div>

                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="50000000"
                    step="100000"
                    value={urlParams.CostDown}
                    onChange={(e) => {
                      const val = Math.min(
                        Number(e.target.value),
                        urlParams.CostUp,
                      );
                      handleCostChange("CostDown", val);
                    }}
                    className="accent-deep-blue w-full cursor-pointer"
                  />

                  <input
                    type="range"
                    min="0"
                    max="50000000"
                    step="100000"
                    value={urlParams.CostUp}
                    onChange={(e) => {
                      const val = Math.max(
                        Number(e.target.value),
                        urlParams.CostDown,
                      );
                      handleCostChange("CostUp", val);
                    }}
                    className="accent-deep-blue w-full cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Filters Section */}
            <div className="space-y-1 p-6">
              <div className="border-b border-gray-200 pb-4 dark:border-gray-700">
                <FilterAccordion
                  setUrlParams={setUrlParams}
                  urlParams={urlParams}
                  setSearchParams={setSearchParams}
                />
              </div>

              <div className="border-b border-gray-200 py-4 dark:border-gray-700">
                <FilterAccordionforskills
                  setUrlParams={setUrlParams}
                  urlParams={urlParams}
                  setSearchParams={setSearchParams}
                />
              </div>

              <div className="pt-4">
                <FilterAccordionforType
                  setUrlParams={setUrlParams}
                  urlParams={urlParams}
                  setSearchParams={setSearchParams}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* pagination */}
      {totalPages > 1 && (
        <div className="font-iransans mt-6 mb-10 flex w-full items-center justify-center gap-4 pr-110 font-bold">
          <button
            className={`bg-deep-blue h-12 w-12 rounded-[50px] text-white hover:bg-blue-700 ${
              urlParams.PageNumber === 1 ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={urlParams.PageNumber === 1}
            onClick={() => handlePageChange(urlParams.PageNumber - 1)}
          >
            قبلی
          </button>

          {/* Dynamic page numbers */}
          <div className="flex space-x-2">
            {(() => {
              const currentPage = urlParams.PageNumber;
              let pages = [];

              // Always show first page
              if (currentPage > 3) {
                pages.push(1);
                if (currentPage > 4) pages.push("...");
              }

              // Show pages around current page
              for (
                let i = Math.max(1, currentPage - 2);
                i <= Math.min(totalPages, currentPage + 2);
                i++
              ) {
                pages.push(i);
              }

              // Always show last page
              if (currentPage < totalPages - 2) {
                if (currentPage < totalPages - 3) pages.push("...");
                pages.push(totalPages);
              }

              return pages.map((page, index) =>
                page === "..." ? (
                  <span key={`ellipsis-${index}`} className="px-3 py-1">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    className={`rounded-[50px] border border-gray-300 bg-white px-3 py-1 text-lg hover:bg-gray-100 ${
                      urlParams.PageNumber === page
                        ? "bg-deep-blue text-white"
                        : ""
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ),
              );
            })()}
          </div>

          <button
            className={`bg-deep-blue h-12 w-12 rounded-[50px] text-white hover:bg-blue-700 ${
              urlParams.PageNumber >= totalPages
                ? "cursor-not-allowed opacity-50"
                : ""
            }`}
            disabled={urlParams.PageNumber >= totalPages}
            onClick={() => handlePageChange(urlParams.PageNumber + 1)}
          >
            بعدی
          </button>
        </div>
      )}
    </div>
  );
};

export { AllCourse };
