import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../../components/Common/Card";
import SearchSortBox from "../../components/Common/SearchSortBox";
import FilterAccordion from "../../components/Accardeon/Accardeon";
import FilterAccordionforskills from "../../components/Accardeon/Accardeonforskils";
import FilterAccordionforType from "../../components/Accardeon/Accardeonfortype";
import http from "../../core/services/interceptor";
import Close from "../../assets/Coursesimage/icons8-close-48.png";
import FilterAccordionfortech from "../../components/Accardeon/FilterAccordionfortech";

const AllCourse = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const [courseData, setCourseData] = useState([]);

  const [urlParams, setUrlParams] = useState({
    SortingCol: searchParams.get("SortingCol") || "lastUpdate",
    SortType: searchParams.get("SortType") || "DESC",
    CostDown: parseInt(searchParams.get("CostDown")) || 0,
    CostUp: parseInt(searchParams.get("CostUp")) || 50000000,
    Query: searchParams.get("Query") || "",
    PageNumber: parseInt(searchParams.get("PageNumber")) || 1,
    RowsOfPage: parseInt(searchParams.get("RowsOfPage")) || 12,
    TeacherId: searchParams.get("TeacherId") || "",
    ListTech: searchParams.get("ListTech") || "",
    TechCount: searchParams.get("TechCount") || "",
  });

  useEffect(() => {
    const cleanedParams = Object.fromEntries(
      Object.entries(urlParams).filter(([, v]) => v !== ""),
    );
    const getCoursesData = async () => {
      const response = await http.get("/Home/GetCoursesWithPagination", {
        params: cleanedParams,
      });
      setCourseData(response);
    };
    setSearchParams(cleanedParams);

    getCoursesData();
  }, [urlParams]);

  const courses = courseData?.courseFilterDtos || [];
  const totalCount = courseData?.totalCount || 0;

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
  const setDefaultValue = () => {
    setUrlParams({
      SortingCol: "lastUpdate",
      SortType: "DESC",
      CostDown: 0,
      CostUp: 50000000,
      PageNumber: 1,
      RowsOfPage: 12,
      TeacherId: "",
      ListTech: "",
      TechCount: "",
    });
  };

  return (
    <div className="relative m-auto flex w-9/10 flex-wrap justify-center max-xl:w-10/10 max-lg:w-10/10 max-sm:overflow-x-hidden">
      {/* <div className="font-iransans mt-14 mb-14 h-16 w-full rounded-lg text-right text-4xl leading-14 font-bold dark:bg-gray-400/95">
        دوره ها
      </div> */}
      <div className="container mx-auto px-4 py-10 text-gray-600">
        {/* Search and Sort Box */}
        <SearchSortBox
          urlParams={urlParams}
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
        <div className="mb-10 flex flex-nowrap items-center justify-center transition-all duration-300 max-sm:mt-30 max-sm:hidden">
          <div className="w-full border-b-4 border-gray-500"></div>
          <h1 className="font-kalameh max-w-7/10 min-w-3/10 text-center text-5xl font-black">
            دوره‌ها
          </h1>
          <div className="w-full border-b-4 border-gray-600"></div>
        </div>
      </div>

      <div className="flex w-full justify-center transition-all duration-300 max-xl:flex-row max-xl:flex-wrap max-xl:overflow-auto max-lg:w-10/10 max-sm:flex-col-reverse">
        <div className="mr-3 flex w-[75%] flex-row flex-wrap justify-center gap-4 pt-10 max-xl:w-6/10 max-lg:h-190 max-lg:w-6/10 max-lg:overflow-auto max-sm:mt-10 max-sm:h-150 max-sm:w-10/10 max-sm:overflow-auto max-sm:p-0">
          {courses.map((item) => (
            <Card item={item} key={item.courseId} />
          ))}

          {/* pagination */}
          {totalPages > 1 && (
            <div className="font-iransans pr-auto max-sm:auto mt-6 mb-10 flex w-10/10 items-center justify-center gap-4 font-bold">
              <button
                className={`bg-deep-blue h-12 w-12 rounded-[50px] text-white hover:bg-blue-700 max-sm:hidden ${
                  urlParams.PageNumber === 1
                    ? "cursor-not-allowed opacity-50"
                    : ""
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

                  if (currentPage > 3) {
                    pages.push(1);
                    if (currentPage > 4) pages.push("...");
                  }

                  for (
                    let i = Math.max(1, currentPage - 2);
                    i <= Math.min(totalPages, currentPage + 2);
                    i++
                  ) {
                    pages.push(i);
                  }

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
                        style={{
                          background: ` ${urlParams.PageNumber === page ? "#436e8e4D" : ""}`,
                        }}
                        className={`rounded-[50px] border border-gray-300 bg-white px-3 py-1 text-lg hover:bg-gray-100 ${
                          urlParams.PageNumber === page ? "text-black" : ""
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
                className={`bg-deep-blue h-12 w-12 rounded-[50px] text-white hover:bg-blue-700 max-sm:hidden ${
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

        <div className="mt-10 h-75 w-[25%] justify-items-center rounded-md p-4 transition-all duration-300 max-xl:w-[35%] max-lg:w-3/10 max-sm:mt-[-10px] max-sm:h-15 max-sm:w-10/10">
          <div className="shadow-deep-blue border-deep-blue/15 m-auto rounded-3xl border-3 bg-white shadow-md dark:border-white/35 dark:bg-gray-800">
            {/* Price Range Filter */}
            <div className="border-b border-gray-200 p-6 max-sm:hidden dark:border-gray-700">
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
            <div className="m-auto w-10/10 rounded-2xl dark:bg-gray-800">
              <button
                onClick={() => setIsOpen(true)}
                className="font-iransans flex-row px-4 py-2 text-3xl max-sm:w-10/10 max-sm:text-2xl max-sm:font-bold max-sm:text-black md:hidden"
              >
                <p className="text-right dark:text-gray-600"> فیلتر ها </p>
              </button>

              {/* normal mode */}

              <div className="flex w-10/10 flex-col max-sm:hidden max-sm:w-6/10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-deep-blue mt-20 mb-10 ml-230 w-1/10 rounded-2xl px-3 py-1 font-bold text-white"
                >
                  بستن
                </button>
                <button
                  onClick={setDefaultValue}
                  className="font-iransans border-deep-blue bg-deep-blue/10 text-deep-blue hover:bg-deep-blue mt-[-130px] w-full scale-90 cursor-pointer rounded-lg border py-1 text-sm font-semibold transition-colors hover:text-white dark:bg-transparent dark:text-white dark:hover:bg-gray-100 dark:hover:text-black"
                >
                  حذف همه فیلترها
                </button>

                <div className="my-4 flex flex-wrap gap-2 text-sm">
                  {urlParams.TeacherName && (
                    <span className="border-deep-blue bg-deep-blue/10 text-deep-blue hover:bg-deep-blue font-iransans flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1 transition-colors hover:text-white dark:bg-transparent dark:text-white dark:hover:bg-gray-100 dark:hover:text-black">
                      {urlParams.TeacherName}
                      <button
                        onClick={() =>
                          setUrlParams((prev) => ({
                            ...prev,
                            TeacherName: "",
                            TeacherId: "",
                            PageNumber: 1,
                          }))
                        }
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {urlParams.Query && (
                    <span className="border-deep-blue bg-deep-blue/30 text-deep-blue hover:bg-deep-blue font-iransans flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1 transition-colors hover:text-white dark:bg-transparent dark:text-white dark:hover:bg-gray-100 dark:hover:text-black">
                      {urlParams.Query}
                      <button
                        onClick={() =>
                          setUrlParams((prev) => ({
                            ...prev,
                            Query: "",
                            PageNumber: 1,
                          }))
                        }
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {urlParams.LevelName && (
                    <span className="border-deep-blue bg-deep-blue/50 text-deep-blue hover:bg-deep-blue font-iransans flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1 transition-colors hover:text-white dark:bg-transparent dark:text-white dark:hover:bg-gray-100 dark:hover:text-black">
                      {urlParams.LevelName}
                      <button
                        onClick={() =>
                          setUrlParams((prev) => ({
                            ...prev,
                            LevelName: "",
                            CourseTypeId: "",
                            PageNumber: 1,
                          }))
                        }
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {urlParams.TypeName && (
                    <span className="border-deep-blue bg-deep-blue/10 text-deep-blue hover:bg-deep-blue font-iransans flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1 transition-colors hover:text-white dark:bg-transparent dark:text-white dark:hover:bg-gray-100 dark:hover:text-black">
                      {urlParams.TypeName}
                      <button
                        onClick={() =>
                          setUrlParams((prev) => ({
                            ...prev,
                            TypeName: "",
                            courseLevelId: "",
                            PageNumber: 1,
                          }))
                        }
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {urlParams.techName && (
                    <span className="border-deep-blue bg-deep-blue/10 text-deep-blue hover:bg-deep-blue font-iransans flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1 transition-colors hover:text-white dark:bg-transparent dark:text-white dark:hover:bg-gray-100 dark:hover:text-black">
                      {urlParams.techName}
                      <button
                        onClick={() =>
                          setUrlParams((prev) => ({
                            ...prev,
                            techName: "",
                            id: "",
                            PageNumber: 1,
                          }))
                        }
                      >
                        ×
                      </button>
                    </span>
                  )}
                </div>
                <div className="scale-90 border-b border-gray-200 pb-4 dark:border-gray-700">
                  <FilterAccordion
                    setUrlParams={setUrlParams}
                    urlParams={urlParams}
                    setSearchParams={setSearchParams}
                  />
                </div>

                <div className="scale-90 border-b border-gray-200 py-4 dark:border-gray-700">
                  <FilterAccordionforskills
                    setUrlParams={setUrlParams}
                    urlParams={urlParams}
                    setSearchParams={setSearchParams}
                  />
                </div>

                <div className="mb-5 scale-90 border-b border-gray-200 py-4 pt-4 dark:border-gray-700">
                  <FilterAccordionforType
                    setUrlParams={setUrlParams}
                    urlParams={urlParams}
                    setSearchParams={setSearchParams}
                  />
                </div>

                <div className="scale-90 py-4 pt-4 dark:border-gray-700">
                  <FilterAccordionfortech
                    setUrlParams={setUrlParams}
                    urlParams={urlParams}
                    setSearchParams={setSearchParams}
                  />
                </div>
              </div>

              {/* mobile mode */}

              {isOpen && (
                <div className="fixed inset-0 z-50 flex w-10/10 flex-row justify-center bg-white p-4 shadow-lg max-sm:overflow-hidden dark:bg-gray-500">
                  {/* Your added content starts here */}

                  <div className="">
                    <div className="flex w-10/10 flex-col items-end gap-4">
                      <button
                        onClick={() => setIsOpen(false)}
                        className="font-iransans w-2/10 rounded-2xl px-3 py-1 font-bold text-white"
                      >
                        <img src={Close} />
                      </button>
                      <button
                        onClick={setDefaultValue}
                        className="font-iransans border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-whit w-full cursor-pointer rounded-lg border py-1 text-sm font-semibold transition-colors dark:border-none dark:bg-gray-400 dark:text-black dark:hover:bg-gray-100 dark:hover:text-black"
                      >
                        حذف همه فیلترها
                      </button>
                    </div>

                    <div className="my-4 flex flex-wrap gap-2 text-sm">
                      {urlParams.TeacherName && (
                        <span className="border-deep-blue bg-deep-blue/10 text-deep-blue hover:bg-deep-blue font-iransans flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1 transition-colors hover:text-white dark:bg-transparent dark:text-white dark:hover:bg-gray-100 dark:hover:text-black">
                          {urlParams.TeacherName}
                          <button
                            onClick={() =>
                              setUrlParams((prev) => ({
                                ...prev,
                                TeacherName: "",
                                TeacherId: "",
                                PageNumber: 1,
                              }))
                            }
                          >
                            ×
                          </button>
                        </span>
                      )}
                      {urlParams.Query && (
                        <span className="border-deep-blue bg-deep-blue/30 text-deep-blue hover:bg-deep-blue font-iransans flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1 transition-colors hover:text-white dark:bg-transparent dark:text-white dark:hover:bg-gray-100 dark:hover:text-black">
                          {urlParams.Query}
                          <button
                            onClick={() =>
                              setUrlParams((prev) => ({
                                ...prev,
                                Query: "",
                                PageNumber: 1,
                              }))
                            }
                          >
                            ×
                          </button>
                        </span>
                      )}
                      {urlParams.LevelName && (
                        <span className="border-deep-blue bg-deep-blue/50 text-deep-blue hover:bg-deep-blue font-iransans flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1 transition-colors hover:text-white dark:bg-transparent dark:text-white dark:hover:bg-gray-100 dark:hover:text-black">
                          {urlParams.LevelName}
                          <button
                            onClick={() =>
                              setUrlParams((prev) => ({
                                ...prev,
                                LevelName: "",
                                CourseTypeId: "",
                                PageNumber: 1,
                              }))
                            }
                          >
                            ×
                          </button>
                        </span>
                      )}
                      {urlParams.TypeName && (
                        <span className="border-deep-blue bg-deep-blue/10 text-deep-blue hover:bg-deep-blue font-iransans flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1 transition-colors hover:text-white dark:bg-transparent dark:text-white dark:hover:bg-gray-100 dark:hover:text-black">
                          {urlParams.TypeName}
                          <button
                            onClick={() =>
                              setUrlParams((prev) => ({
                                ...prev,
                                TypeName: "",
                                courseLevelId: "",
                                PageNumber: 1,
                              }))
                            }
                          >
                            ×
                          </button>
                        </span>
                      )}
                      {urlParams.techName && (
                        <span className="border-deep-blue bg-deep-blue/10 text-deep-blue hover:bg-deep-blue font-iransans flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1 transition-colors hover:text-white dark:bg-transparent dark:text-white dark:hover:bg-gray-100 dark:hover:text-black">
                          {urlParams.techName}
                          <button
                            onClick={() =>
                              setUrlParams((prev) => ({
                                ...prev,
                                techName: "",
                                id: "",
                                PageNumber: 1,
                              }))
                            }
                          >
                            ×
                          </button>
                        </span>
                      )}
                    </div>
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

                    <div className="border-b border-gray-200 py-4 pt-4 dark:border-gray-700">
                      <FilterAccordionforType
                        setUrlParams={setUrlParams}
                        urlParams={urlParams}
                        setSearchParams={setSearchParams}
                      />
                    </div>

                    <div className="border-b border-gray-200 py-4 pt-4 dark:border-gray-700">
                      <FilterAccordionfortech
                        setUrlParams={setUrlParams}
                        urlParams={urlParams}
                        setSearchParams={setSearchParams}
                      />
                    </div>
                  </div>
                  {/* Your added content ends here */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AllCourse };
