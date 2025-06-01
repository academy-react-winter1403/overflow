import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { getApi } from "../../core/services/api/getApi";

function SearchSortBox({ urlParams,setSort, setSearch, categoryURL }) {
  const location = useLocation();
  const isNewsPage = location.pathname.includes("/News");
  const [searchTerm, setSearchTerm] = useState("");
  const [timer, setTimer] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterData, setFilterData] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(() => {
      setSearch(value);
    }, 500);
    setTimer(newTimer);
  };

  const toggleMenu = () => {
    setIsFilterOpen(false);
    setIsMenuOpen((prev) => !prev);
  };

  const toggleFilter = () => {
    setIsMenuOpen(false);
    setIsFilterOpen(!isFilterOpen);
  };

  useEffect(() => {
    const getFilterData = async () => {
      if (isNewsPage && categoryURL) {
        const response = await getApi(categoryURL);
        setFilterData(response);
      }
    };

    getFilterData();
  }, [categoryURL, isNewsPage]);

  return (
    <>
      {/* Search */}
      <div className="my-6 mb-17 flex h-20 shadow-lg flex-row-reverse items-center rounded-3xl bg-white dark:bg-gray-400/95">
        <input
          type="text"
          placeholder="جستجو"
          onChange={handleSearchChange}
          value={searchTerm}
          className="font-kalameh h-full w-3/10 rounded-3xl border-3 shadow-md shadow-deep-blue border-deep-blue/15 dark:border-white/35   pr-8 text-right text-4xl font-black transition-all duration-300 focus:w-5/10 focus:text-black focus:outline-none"
        />

        {/* Sort */}
        <div className="relative flex w-full flex-row-reverse items-center justify-around">
          <div>
            <button
              className="font-kalameh m-3 h-full border-l-2 border-gray-300 p-2 text-4xl font-black focus:outline-none"
              onClick={toggleMenu}
            >
              مرتب سازی
            </button>
          </div>

          <div
            className={`mr-5 transition-all duration-500 ease-in-out ${
              isMenuOpen
                ? "translate-x-25 opacity-100"
                : "translate-x-60 opacity-0"
            }`}
          >
            {isNewsPage ? (
              isMenuOpen && (
                <ul className="font-kalameh flex items-center justify-center text-3xl font-black text-gray-500">
                  <li
                    className={`cursor-pointer rounded-2xl px-4 py-2 ${urlParams.SortingCol === "InsertDate" ? "bg-deep-blue/35 text-black" : ""} hover:bg-gray-200 hover:text-black hover:shadow-xl`}
                    onClick={() =>
                      setSort({ col: "InsertDate", SortType: "DESC" })
                    }
                  >
                    تاریخ
                  </li>

                  <li
                    className={`cursor-pointer rounded-2xl px-4 py-2 ${urlParams.SortingCol === "currentView" ? "bg-deep-blue/35 text-black" : ""} hover:bg-gray-200 hover:text-black hover:shadow-xl`}
                    onClick={() =>
                      setSort({ col: "currentView", SortType: "DESC" })
                    }
                  >
                    بازدید
                  </li>
                  <li
                    className={`cursor-pointer rounded-2xl px-4 py-2 ${urlParams.SortingCol === "currentLikeCount" ? "bg-deep-blue/35 text-black" : ""} hover:bg-gray-200 hover:text-black hover:shadow-xl`}
                    onClick={() =>
                      setSort({ col: "currentLikeCount", SortType: "DESC" })
                    }
                  >
                    محبوبیت
                  </li>
                </ul>
              )
            ) : (
              <ul className="font-kalameh flex items-center justify-center text-3xl font-black text-gray-500">
                
                <li
                  className={`cursor-pointer rounded-2xl px-4 py-2 ${urlParams.SortingCol === "lastUpdate" ? "bg-deep-blue/35 text-black" : ""} hover:bg-gray-200 hover:text-black hover:shadow-xl`}
                  onClick={() =>
                    setSort({ col: "lastUpdate", SortType: "DESC" })
                  }
                >
                  تاریخ
                </li>
                <li
                  className={`cursor-pointer rounded-2xl px-4 py-2 ${urlParams.SortingCol === "cost" ? "bg-deep-blue/35 text-black" : ""} hover:bg-gray-200 hover:text-black hover:shadow-xl`}
                  onClick={() => setSort({ col: "cost", SortType: "DESC" })}
                >
                  قیمت
                </li>
                <li
                  className={`cursor-pointer rounded-2xl px-4 py-2 ${urlParams.SortingCol === "likeCount" ? "bg-deep-blue/35 text-black" : ""} hover:bg-gray-200 hover:text-black hover:shadow-xl`}
                  onClick={() =>
                    setSort({ col: "likeCount", SortType: "DESC" })
                  }
                >
                  محبوبیت
                </li>
              </ul>
            )}
          </div>

          {/* Filter section - only show on News page */}
          {isNewsPage && (
            <div className="relative flex flex-row-reverse items-center justify-around">
              <button
                className="font-kalameh h-full border-l-2 border-gray-300 p-2 text-4xl font-black"
                onClick={toggleFilter}
              >
                فیلتر
              </button>
              <div
                className={`absolute top-19 z-30 ml-10 rounded-2xl bg-white text-gray-100 transition-all duration-500 ease-in-out dark:bg-gray-400/95 ${
                  isFilterOpen
                    ? "-translate-x-5 opacity-100"
                    : "translate-x-6 opacity-0"
                }`}
              >
                {isFilterOpen && (
                  <ul className="overflow-y-autoscroll custom-scrollbar font-kalameh flex max-h-150 max-w-80 flex-col items-center overflow-x-hidden text-3xl font-black text-gray-500">
                    {filterData &&
                      filterData?.map((item) => (
                        <li
                          key={item.id}
                          className="cursor-pointer rounded-2xl py-3 hover:scale-115 hover:bg-gray-200 hover:text-black hover:shadow-xl"
                          onClick={() => setSort({ categoryId: item.id })}
                        >
                          {item.categoryName}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>

        <NavLink
          className="font-kalameh pl-4 text-4xl font-black text-gray-500 hover:text-black"
          to={
            isNewsPage
              ? "/News?NewsCategoryId=&PageNumber=1&RowsOfPage=10&Query=&SortingCol=InsertDate&SortType=DESC"
              : "/AllCourses?SortingCol=lastUpdate&SortType=DESC&CostDown=0&CostUp=50000000&Query=&PageNumber=1&RowsOfPage=12&TeacherId="
          }
        >
          X
        </NavLink>
      </div>
    </>
  );
}

export default SearchSortBox;
