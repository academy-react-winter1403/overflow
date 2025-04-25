import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Common/Card";
import { getApi } from "../../core/services/api/getApi";

const AllCourse = () => {
  const navigate = useNavigate();

  const [newCoursesData, setNewCoursesData] = useState([]);

  const [filters, setFilters] = useState({
    PageNumber: 1,
    RowsOfPage: 10,
    SortingCol: "lastUpdate",
  });

  const [activeSort, setActiveSort] = useState("lastUpdate");

  const getNewCoursesData = async () => {
    const queryParams = new URLSearchParams();
    for (const key in filters) {
      queryParams.append(key, filters[key]);
    }
    const response = await getApi(
      `/Home/GetCoursesWithPagination?${queryParams.toString()}`,
      "courseFilterDtos",
    );

    // console.log("api response", response);

    setNewCoursesData(response);
  };

  useEffect(() => {
    getNewCoursesData();
  }, [filters]);

  const handleSorting = (sortingCol, SortType) => {
    setFilters((prev) => ({
      ...prev,
      SortingCol: sortingCol,
      PageNumber: 1,
      SortType: SortType || "DESC",
    }));
    setActiveSort(sortingCol);
  };

  

  return (
    <div className="m-auto flex w-9/10 flex-wrap justify-center bg-gray-50">
      <div className="mt-14 mb-14 h-16 w-full border border-black bg-white text-right text-3xl leading-14">
        دوره ها
      </div>

      <div className="font-kalameh flex h-18 w-full justify-center rounded border border-black bg-white text-4xl font-black text-gray-700">
        <div
          onClick={() => handleSorting("cost", "ASC")}
          className={`h-full w-[15%] cursor-pointer text-center text-3xl leading-14 ${
            activeSort === "cheapest"
              ? "font-bold text-blue-500"
              : "text-gray-400"
          }`}
        >
          ارزان ترین
        </div>
        <div
          onClick={() => handleSorting("cost", "DESC")}
          className={`h-full w-[15%] cursor-pointer text-center text-3xl leading-14 ${
            activeSort === "price" ? "font-bold text-blue-500" : "text-gray-400"
          }`}
        >
          گران ترین
        </div>
        <div
          onClick={() => handleSorting("currentRegistrants")}
          className={`h-full w-[15%] cursor-pointer text-center text-3xl leading-14 ${
            activeSort === "bestseller"
              ? "font-bold text-blue-500"
              : "text-gray-400"
          }`}
        >
          پرفروش ترین
        </div>
        <div
          onClick={() => handleSorting("lastUpdate")}
          className={`h-full w-[15%] cursor-pointer text-center text-3xl leading-14 ${
            activeSort === "lastUpdate"
              ? "font-bold text-blue-500"
              : "text-gray-400"
          }`}
        >
          جدیدترین
        </div>
        <div className="m-auto h-[80%] w-[15%] border-l-2 border-gray-300 text-center text-3xl leading-10">
          مرتب سازی
        </div>
        <div className="h-full w-[5%] border"></div>
        <input
          className="h-18 w-[20%] border border-black text-right"
          type="text"
          placeholder="جستجو..."
        />
      </div>

      <div className="flex w-full justify-center border border-black">
        <div className="mr-3 flex w-[75%] flex-row flex-wrap justify-center gap-4 border border-blue-500 pt-30">
          {newCoursesData.map((item, index) => (
            <Card
              item={item}
              index={index}
              key={index}
            />
          ))}
        </div>

        <div className="h-120 w-[25%] justify-items-center rounded-md border border-black bg-white">
          <div className="mt-9 h-12 w-8/10 text-right text-xl text-blue-900">
            فیلتر ها
          </div>
          <div className="mt-4 h-10 w-8/10 rounded-md border-2 border-gray-300"></div>
          <div className="mt-4 h-10 w-8/10 rounded-md border-2 border-gray-300"></div>
          <div className="mt-4 h-10 w-8/10 rounded-md border-2 border-gray-300"></div>
          <div className="mt-4 mb-11 h-34 w-8/10 rounded-md border-2 border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export { AllCourse };
