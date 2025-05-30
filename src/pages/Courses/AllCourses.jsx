import { useState } from "react";
import {  useSearchParams } from "react-router-dom";
import Card from "../../components/Common/Card";
import { useGetCourses } from "../../core/services/ReactQuery/useCourses";
import searchicon from "../../assets/Coursesimage/icons8-search-40.png";
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

  // Use React Query hook for data fetching
  const {
    data: newCoursesData = [],
    isLoading,
    error,
  } = useGetCourses(urlParams);

  const handlePageChange = (newPage) => {
    const newParams = {
      ...urlParams,
      PageNumber: newPage,
    };
    setUrlParams(newParams);
    setSearchParams(newParams);
  };

  const handleSorting = (sortingCol, sortType = "DESC") => {
    const newParams = {
      ...urlParams,
      SortingCol: sortingCol,
      SortType: sortType,
      PageNumber: 1,
    };
    setUrlParams(newParams);
    setSearchParams(newParams);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    const newParams = {
      ...urlParams,
      Query: value.trim() === "" ? "" : value,
      PageNumber: 1,
    };
    setUrlParams(newParams);
    setSearchParams(newParams);
  };

  const handleCostChange = (type, value) => {
    const newParams = {
      ...urlParams,
      [type]: value,
      PageNumber: 1,
    };
    setUrlParams(newParams);
    setSearchParams(newParams);
  };

  if (isLoading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="p-4 text-center text-red-500">Error loading courses</div>
    );
  }

  return (
    <div className="m-auto flex w-9/10 flex-wrap justify-center">
      <div className="font-iransans mt-14 mb-14 h-16 w-full rounded-lg text-right text-4xl leading-14 font-bold dark:bg-gray-400/95">
        دوره ها
      </div>

      <div className="font-iransans flex h-18 w-full justify-center rounded-lg pr-13 text-4xl font-black text-gray-700 max-xl:gap-4 dark:bg-gray-400/95">
        <div
          onClick={() => handleSorting("cost", "ASC")}
          className={`font-iransans ml-100 h-full w-[10%] cursor-pointer text-center text-3xl leading-14 ${
            urlParams.SortingCol === "cost" && urlParams.SortType === "ASC"
              ? "font-bold text-blue-500"
              : "text-gray-600"
          }`}
        >
          ارزان ترین
        </div>
        <div
          onClick={() => handleSorting("cost", "DESC")}
          className={`font-iransans h-full w-[10%] cursor-pointer text-center text-3xl leading-14 ${
            urlParams.SortingCol === "cost" && urlParams.SortType === "DESC"
              ? "font-bold text-blue-500"
              : "text-gray-600"
          }`}
        >
          گران ترین
        </div>
        <div
          onClick={() => handleSorting("currentRegistrants")}
          className={`Kalameh h-full w-[10%] cursor-pointer text-center text-3xl leading-14 ${
            urlParams.SortingCol === "currentRegistrants"
              ? "font-bold text-blue-500"
              : "text-gray-600"
          }`}
        >
          پرفروش ترین
        </div>
        <div
          onClick={() => handleSorting("lastUpdate")}
          className={`Kalameh h-full w-[10%] cursor-pointer text-center text-3xl leading-14 ${
            urlParams.SortingCol === "lastUpdate"
              ? "font-bold text-blue-500"
              : "text-gray-600"
          }`}
        >
          جدیدترین
        </div>
        <div className="font-Kalameh m-auto mr-20 h-[80%] w-[10%] border-l-2 border-gray-300 text-center text-3xl leading-10 max-xl:hidden">
          مرتب سازی
        </div>

        <div className="relative flex w-2/10 flex-row-reverse">
          <input
            className="font-iransans mt-2 mr-2 h-14 w-9/10 rounded-[10px] border bg-gray-100 pr-5 text-right text-xl"
            type="text"
            placeholder="...جستجو"
            value={urlParams.Query}
            onChange={handleSearchChange}
          />
          <img className="relative mt-4 mr-[-50px] h-9 w-9" src={searchicon} />
        </div>
      </div>

      <div className="flex w-full justify-center max-xl:flex-row max-xl:flex-wrap">
        <div className="mr-3 flex w-[75%] flex-row flex-wrap justify-center gap-4 pt-30 max-xl:w-1/1">
          {newCoursesData?.map((item, index) => (
            <Card item={item} index={index} key={index} />
          ))}
        </div>

        <div className="mt-22 h-75 w-[25%] justify-items-center rounded-md p-4 max-xl:w-1/2 dark:bg-gray-400/95">
          <div className="m-auto mt-4 mb-11 h-34 w-8/10 rounded-md border-2 border-gray-400/50 bg-white">
            <div className="mb-6">
              <label className="mb-2 block text-right text-lg font-bold"></label>

              <div className="bor font-vazir mt-5 mb-2 flex justify-center text-xl text-gray-500">
                <span>
                  تا {Number(urlParams.CostUp).toLocaleString()} تومان
                </span>
                <span> از {Number(urlParams.CostDown).toLocaleString()} </span>
              </div>

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
                className="w-9/10 accent-blue-600"
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
                className="mt-2 w-9/10 accent-blue-500"
              />

              {/* teachersname */}
              <FilterAccordion
                setUrlParams={setUrlParams}
                urlParams={urlParams}
                setSearchParams={setSearchParams}
              />

              {/* skills level */}
              <FilterAccordionforskills
                setUrlParams={setUrlParams}
                urlParams={urlParams}
                setSearchParams={setSearchParams}
              />

              {/* course type */}
              <FilterAccordionforType
                setUrlParams={setUrlParams}
                urlParams={urlParams}
                setSearchParams={setSearchParams}
              />
            </div>
          </div>
        </div>
      </div>

      {/* pagination */}
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

        {/* Number sequence as individual buttons */}
        <div className="flex space-x-2">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`rounded-[50px] border border-gray-300 bg-white px-3 py-1 text-lg hover:bg-gray-100 ${urlParams.PageNumber === page ? "bg-deep-blue text-white" : ""}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          className="bg-deep-blue h-12 w-12 rounded-[50px] text-white hover:bg-blue-700"
          onClick={() => handlePageChange(urlParams.PageNumber + 1)}
        >
          بعدی
        </button>
      </div>
    </div>
  );
};

export { AllCourse };
