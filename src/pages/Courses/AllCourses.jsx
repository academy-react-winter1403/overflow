import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import Card from "../../components/Common/Card";
import { getApi } from "../../core/services/api/getApi";
import searchicon from '../../assets/Coursesimage/icons8-search-40.png'
import FilterAccordion from "../../components/Accardeon/Accardeon";
import FilterAccordionforskills from "../../components/Accardeon/Accardeonforskils";
import FilterAccordionforType from "../../components/Accardeon/Accardeonfortype";


const AllCourse = () => {
  const [newCoursesData, setNewCoursesData] = useState([]);
  


const [filters, setFilters] = useState({
  SortingCol: "lastUpdate",
  SortType: "DESC",
  CostDown: 0,
  CostUp: 50000000,
  Query: undefined,
  PageNumber: 1,
  RowsOfPage: 12, 
  TeacherId:"",
  CourseTypeId:"",
  courseLevelId:"",
});
// useEffect(() => {
//   console.log("this filter",filters)

  
// }, [filters])
const getNewCoursesData = async () => {
  const queryParams = new URLSearchParams();

  for (const key in filters) {
    if (filters[key] !== undefined) {
      queryParams.append(key, filters[key] ?? "");
    }
  }

  queryParams.append("limit", 12);  
  queryParams.append("page", filters.PageNumber);

  // courses?pageNumber=1&instructor=1&type=2&TechCount=1&ListTech=2&level=1&CostDown=0&CostUp=375000000&Query=ad
  const response = await getApi(`/Home/GetCoursesWithPagination?${queryParams.toString()}&TeacherId=${filters.TeacherId}&CourseTypeId=${filters.CourseTypeId}$courseLevelId=${filters.courseLevelId}`, "courseFilterDtos");
  setNewCoursesData(response);
};

const handlePageChange = (newPage) => {
  setFilters((prev) => ({
    ...prev,
    PageNumber: newPage,
  }));
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
    <div className="m-auto flex w-9/10 flex-wrap justify-center ">

      <div className="mt-14 mb-14 h-16 w-full rounded-lg font-iransans font-bold text-right text-4xl leading-14  mr-5">
        دوره ها
      </div>

      <div className="pr-13 font-iransans flex  h-18 w-full justify-center rounded-lg  text-4xl font-black text-gray-700 dark:bg-gray-400/95 max-xl:gap-4 bg-white ">
        <div
          onClick={() => handleSorting("cost", "ASC")}
          className={` ml-100 h-full w-[10%] font-iransans cursor-pointer text-center text-3xl leading-14 ${filters.SortingCol === "cost" && filters.SortType === "ASC"
            ? "font-bold text-blue-500"
            : "text-gray-600"
            }`}
        >
          ارزان ترین
        </div>
        <div
          onClick={() => handleSorting("cost", "DESC")}
          className={`h-full w-[10%] font-iransans cursor-pointer text-center text-3xl leading-14 ${filters.SortingCol === "cost" && filters.SortType === "DESC"
            ? "font-bold text-blue-500"
            : "text-gray-600"
            }`}
        >
          گران ترین
        </div>
        <div
          onClick={() => handleSorting("currentRegistrants")}
          className={`h-full w-[10%] Kalameh cursor-pointer text-center text-3xl leading-14 ${filters.SortingCol === "currentRegistrants"
            ? "font-bold text-blue-500"
            : "text-gray-600"
            }`}
        >
          پرفروش ترین
        </div>
        <div
          onClick={() => handleSorting("lastUpdate")}
          className={`h-full w-[10%] Kalameh cursor-pointer text-center text-3xl leading-14  ${filters.SortingCol === "lastUpdate"
            ? "font-bold text-blue-500"
            : "text-gray-600"
            }`}
        >
          جدیدترین
        </div>
        <div className=" m-auto h-[80%] font-Kalameh w-[10%] border-l-2 border-gray-300 text-center text-3xl leading-10 max-xl:hidden mr-20">
          مرتب سازی
        </div>

        <div className="relative flex flex-row-reverse  w-2/10 ">
          <input
          className=" mt-2 mr-2 bg-gray-100 h-14 w-9/10 text-right border pr-5 font-iransans rounded-[10px] text-xl "
          type="text"
          placeholder="...جستجو"
          value={filters.Query}
          onChange={handleSearchChange}
        />
        <img className="w-9 h-9 relative mr-[-50px] mt-4" src={searchicon} />
        </div>

      </div>

      <div className="flex w-full justify-center  max-xl:flex-row  max-xl:flex-wrap ">
        <div className="mr-3 flex w-[75%] flex-row flex-wrap justify-center gap-4 pt-30 max-xl:w-1/1 ">
          {newCoursesData?.map((item, index) => (
            <Card item={item} index={index} key={index} />
          ))}

        </div>

        <div className="h-75 w-[25%] justify-items-center rounded-md mt-22  p-4 max-xl:w-1/2 ">
          {/* <div className="mb-6 text-right font-iransans p-2 text-3xl  w-8/10 text-right text-deep-blue bg-white rounded-[10px]">فیلتر ها</div> */}

          <div className="mt-4 mb-11 h-34 w-8/10 border-2 border-gray-400/50 rounded-md m-auto bg-white dark:bg-gray-400 ">
            <div className="mb-6">
              <label className="block mb-2 text-right text-lg font-bold">

              </label>

              <div className="flex bor justify-center font-vazir text-gray-500 text-xl mt-5 mb-2 dark:text-black">
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

                  {/* teachersname */}
              <FilterAccordion setFilters={setFilters}/>

                  {/* skills level */}
              <FilterAccordionforskills setFilters={setFilters}/>

                  {/* course type */}

               <FilterAccordionforType setFilters={setFilters}/>   
            </div>
          </div>
        </div>
      </div>

                {/* pagination */}
      <div className="flex justify-center items-center gap-4 mt-6 mb-10 w-full pr-110 font-iransans font-bold">
        <button
          className={`w-12 h-12 rounded-[50px] bg-deep-blue text-white hover:bg-blue-700 ${
      filters.PageNumber === 1 ? "opacity-50 cursor-not-allowed" : ""
    }`}
    disabled={filters.PageNumber === 1}
          onClick={() => handlePageChange(filters.PageNumber - 1)}
        >
          قبلی
        </button>

        {/* Number sequence as individual buttons */}
        <div className="flex space-x-2">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-3 py-1 border border-gray-300 rounded-[50px] bg-white text-lg hover:bg-gray-100 
                ${filters.PageNumber === page ? "bg-deep-blue text-white" : ""}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>
        
        <button
          className="w-12 h-12 rounded-[50px] bg-deep-blue text-white hover:bg-blue-700"
          onClick={() => handlePageChange(filters.PageNumber + 1)}
        >
          بعدی
        </button>
            </div>

    </div>
  );
};

export { AllCourse };
