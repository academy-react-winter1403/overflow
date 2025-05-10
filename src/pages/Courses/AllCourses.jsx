import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Common/Card";
import { getApi } from "../../core/services/api/getApi";

const AllCourse = () => {
  const [newCoursesData, setNewCoursesData] = useState([]);

  const [filters, setFilters] = useState({
    PageNumber: 1,
    RowsOfPage: 21,
    SortingCol: "lastUpdate",
    SortType: "DESC",
    CostDown: 0,
    CostUp: 50000000,
    Query: undefined
  });

  const getNewCoursesData = async () => {
    const queryParams = new URLSearchParams();

    for (const key in filters) {
      if (filters[key] !== undefined) {
        queryParams.append(key, filters[key] ?? "");
      }
    }

    const response = await getApi(
      `/Home/GetCoursesWithPagination?${queryParams.toString()}`,
      "courseFilterDtos"
    );

    setNewCoursesData(response);
  };

  useEffect(() => {
    getNewCoursesData();
  }, [filters]);

  const handleSorting = (sortingCol, sortType = "DESC") => {
    setFilters((prev) => ({
      ...prev,
      SortingCol: sortingCol,
      SortType: sortType,
      PageNumber: 1,
    }));
  };


  const handleSearchChange = (e) => {
    const value = e.target.value;
    setFilters((prev) => ({
      ...prev,
      Query: value.trim() === "" ? undefined : value,
      PageNumber: 1,
    }));

  };

  return (
    <div className="m-auto flex w-9/10 flex-wrap justify-center">

      <div className="mt-14 mb-14 h-16 w-full rounded-lg bg-white text-right text-3xl leading-14 dark:bg-gray-400/95">
        دوره ها
      </div>

      <div className="font-kalameh flex h-18 w-full justify-center rounded-lg bg-white text-4xl font-black text-gray-700 dark:bg-gray-400/95 max-xl:gap-4 ">
        <div
          onClick={() => handleSorting("cost", "ASC")}
          className={`h-full w-[15%] Kalameh cursor-pointer text-center text-3xl leading-14 ${filters.SortingCol === "cost" && filters.SortType === "ASC"
            ? "font-bold text-blue-500"
            : "text-gray-600"
            }`}
        >
          ارزان ترین
        </div>
        <div
          onClick={() => handleSorting("cost", "DESC")}
          className={`h-full w-[15%] Kalameh cursor-pointer text-center text-3xl leading-14 ${filters.SortingCol === "cost" && filters.SortType === "DESC"
            ? "font-bold text-blue-500"
            : "text-gray-600"
            }`}
        >
          گران ترین
        </div>
        <div
          onClick={() => handleSorting("currentRegistrants")}
          className={`h-full w-[15%] Kalameh cursor-pointer text-center text-3xl leading-14 ${filters.SortingCol === "currentRegistrants"
            ? "font-bold text-blue-500"
            : "text-gray-600"
            }`}
        >
          پرفروش ترین
        </div>
        <div
          onClick={() => handleSorting("lastUpdate")}
          className={`h-full w-[15%] Kalameh cursor-pointer text-center text-3xl  leading-14 ${filters.SortingCol === "lastUpdate"
            ? "font-bold text-blue-500"
            : "text-gray-600"
            }`}
        >
          جدیدترین
        </div>
        <div className="m-auto h-[80%] font-Kalameh w-[15%] border-l-2 border-gray-300 text-center text-3xl leading-10 max-xl:hidden ">
          مرتب سازی
        </div>
        <div className="h-full w-[5%]   max-xl:hidden"></div>
        <input
          className="h-18 w-[20%] text-right px-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:rounded-md focus:w-[25%] focus:gray-blue-500 focus:bg-gray-100 focus:border-gray-500 focus:placeholder-blue-500 max-xl:hidden "
          type="text"
          placeholder="...جستجو"
          value={filters.Query}
          onChange={handleSearchChange}
        />

      </div>

      <div className="flex w-full justify-center  max-xl:flex-row  max-xl:flex-wrap ">
        <div className="mr-3 flex w-[75%] flex-row flex-wrap justify-center gap-4 pt-30 max-xl:w-1/1 ">
          {newCoursesData?.map((item, index) => (
            <Card item={item} index={index} key={index} />
          ))}


          <div
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                RowsOfPage: prev.RowsOfPage * 2,
              }))
            }
            className="text-amber-50 font-bold w-full h-14 mt=5 mb-5 text-2xl bg-deep-blue rounded-2xl px-6 py-3 text-center cursor-pointer max-lg:text-sm"
          >
            <div>بارگیری بیشتر</div>
          </div>
        </div>

        <div className="h-75 w-[25%] justify-items-center rounded-md mt-22 bg-white dark:bg-gray-400/95 p-4 max-xl:w-1/2 ">
          <div className="mb-6 text-right font-peyda text-3xl  w-8/10 text-right text-blue-900">فیلتر ها</div>

          <div className="mt-4 mb-11 h-34 w-8/10 border-2 border-gray-400/50 rounded-md m-auto">
            <div className="mb-6">
              <label className="block mb-2 text-right text-lg font-bold">

              </label>

              <div className="flex bor justify-center font-vazir text-gray-500 text-xl mt-5 mb-2">
                <span>تا  {Number(filters.CostUp).toLocaleString()} تومان</span>
                <span> از   {Number(filters.CostDown).toLocaleString()} </span>
              </div>

              <input
                type="range"
                min="0"
                max="50000000"
                step="100000"
                value={filters.CostDown}
                onChange={(e) => {
                  const val = Math.min(Number(e.target.value), filters.CostUp);
                  setFilters((prev) => ({ ...prev, CostDown: val }));
                }}
                className="w-9/10  accent-blue-600"
              />

              <input
                type="range"
                min="0"
                max="50000000"
                step="100000"
                value={filters.CostUp}
                onChange={(e) => {
                  const val = Math.max(Number(e.target.value), filters.CostDown);
                  setFilters((prev) => ({ ...prev, CostUp: val }));
                }}
                className="mt-2 w-9/10 accent-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AllCourse };
