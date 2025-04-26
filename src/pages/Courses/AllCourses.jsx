import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Common/Card";
import { getApi } from "../../core/services/api/getApi";


const AllCourse = () => {
  const [newCoursesData, setNewCoursesData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [filters, setFilters] = useState({
    PageNumber: 1,
    RowsOfPage: 10,
    SortingCol: "lastUpdate",
    SortType: "DESC",
    CostDown: 0,
    CostUp: 50000000,
  });

  const getNewCoursesData = async () => {
    const queryParams = new URLSearchParams();

    for (const key in filters) {
      queryParams.append(key, filters[key] ?? "");
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

  const filteredCourses = newCoursesData.filter((course) =>
    [course.title, course.teacherName, course.technologyList]
      .join(" ")
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <div className="m-auto flex w-9/10 flex-wrap justify-center">
      <div className="mt-14 mb-14 h-16 w-full rounded-lg bg-white text-right text-3xl leading-14 dark:bg-gray-400/95">
        دوره ها
      </div>


      <div className="font-kalameh flex h-18 w-full justify-center rounded-lg bg-white text-4xl font-black text-gray-700 dark:bg-gray-400/95">
        <div
          onClick={() => handleSorting("cost", "ASC")}
          className={`h-full w-[15%] Kalameh cursor-pointer text-center text-3xl leading-14 ${
            filters.SortingCol === "cost" && filters.SortType === "ASC"
              ? "font-bold text-blue-500"
              : "text-gray-600"
          }`}
        >
          ارزان ترین
        </div>
        <div
          onClick={() => handleSorting("cost", "DESC")}
          className={`h-full w-[15%] Kalameh cursor-pointer text-center text-3xl leading-14 ${
            filters.SortingCol === "cost" && filters.SortType === "DESC"
              ? "font-bold text-blue-500"
              : "text-gray-600"
          }`}
        >
          گران ترین
        </div>
        <div
          onClick={() => handleSorting("currentRegistrants")}
          className={`h-full w-[15%] Kalameh cursor-pointer text-center text-3xl leading-14 ${
            filters.SortingCol === "currentRegistrants"
              ? "font-bold text-blue-500"
              : "text-gray-600"
          }`}
        >
          پرفروش ترین
        </div>
        <div
          onClick={() => handleSorting("lastUpdate")}
          className={`h-full w-[15%] Kalameh cursor-pointer text-center text-3xl leading-14 ${
            filters.SortingCol === "lastUpdate"
              ? "font-bold text-blue-500"
              : "text-gray-600"
          }`}
        >
          جدیدترین
        </div>
        <div className="m-auto h-[80%] font-Kalameh w-[15%] border-l-2 border-gray-300 text-center text-3xl leading-10">
          مرتب سازی
        </div>
        <div className="h-full w-[5%] "></div>
        <input
          className="h-18 w-[20%] text-right px-3"
          type="text"
          placeholder="جستجو..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>


      <div className="flex w-full justify-center">
        <div className="mr-3 flex w-[75%] flex-row flex-wrap justify-center gap-4 pt-30">
          {filteredCourses.map((item, index) => (
            <Card item={item} index={index} key={index} />
          ))}
        </div>


        <div className="h-70 w-[25%] justify-items-center rounded-md mt-22 bg-white dark:bg-gray-400/95 p-4">
          <div className="mb-6 text-right text-xl text-blue-900">فیلتر ها</div>
          {/* <div className="mt-4 h-10 w-8/10 rounded-md border-2 border-gray-300"></div>
          <div className="mt-4 h-10 w-8/10 rounded-md border-2 border-gray-300"></div>
          <div className="mt-4 h-10 w-8/10 rounded-md border-2 border-gray-300"></div> */}
          <div className="mt-4 mb-11 h-34 w-8/10 rounded-md ">
          <div className="mb-6">
            <label className="block mb-2 text-right text-lg font-bold">محدوده قیمت:</label>

            <div className="flex justify-between text-sm text-gray-800 mb-2">
              <span>حداقل: {Number(filters.CostDown).toLocaleString()} تومان</span>
              <span>حداکثر: {Number(filters.CostUp).toLocaleString()} تومان</span>
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
              className="w-full accent-blue-600"
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
              className="mt-2 w-full accent-blue-500"
            />
          </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export { AllCourse };
