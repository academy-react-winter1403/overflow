import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { getApi } from "../../core/services/api/getApi";
function SearchSortBox({ setSort, setSearch, categoryURL }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [timer, setTimer] = useState(null); // To store the timeout ID
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility
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

    // Toggle the menu visibility
  };
  const toggleFilter = () => {
    setIsMenuOpen(false);
    setIsFilterOpen(!isFilterOpen);
  };
  const getFilterData = async () => {
    const response = await getApi(categoryURL);
    setFilterData(response);
  };
  useEffect(() => {
    getFilterData();
    console.log(filterData);
  }, []);

  return (
    <>
      {/* Search */}
      <div className="flex flex-row-reverse items-center my-6 mb-17 h-20 rounded-3xl bg-white dark:bg-gray-400/95">
        <input
          type="text"
          placeholder="جستجو"
          onChange={handleSearchChange}
          value={searchTerm}
          className="w-3/10 text-right text-4xl font-kalameh font-black h-full pr-8 focus:w-5/10 focus:text-black border-gray-300 rounded-md focus:outline-none transition-all duration-300"
        />

        {/* Sort */}
        <div className="flex flex-row-reverse justify-around items-center relative w-full">
          <div>
            <button
              className=" m-3 border-l-2 h-full p-2 font-black font-kalameh text-4xl border-gray-300 focus:outline-none"
              onClick={toggleMenu} // Toggle menu on button click
            >
              مرتب سازی
            </button>
          </div>

          <div
            className={`mr-5 transition-all duration-500 ease-in-out ${
              isMenuOpen
                ? "opacity-100 translate-x-25"
                : "opacity-0 translate-x-60 "
            }`}
          >
            {isMenuOpen && (
              <ul className="flex justify-center items-center text-3xl font-kalameh font-black text-gray-500">
                <li
                  className="px-4 py-2 rounded-2xl hover:bg-gray-200 cursor-pointer hover:text-black hover:shadow-xl"
                  onClick={() =>
                    setSort({ col: "InsertDate", SortType: "DESC" })
                  }
                >
                  تاریخ
                </li>
                <li
                  className="px-4 py-2 rounded-2xl hover:bg-gray-200 cursor-pointer hover:text-black hover:shadow-xl"
                  onClick={() =>
                    setSort({ col: "currentLikeCount", SortType: "DESC" })
                  }
                >
                  محبوبیت
                </li>
                <li
                  className="px-4 py-2 rounded-2xl hover:bg-gray-200 cursor-pointer hover:text-black hover:shadow-xl"
                  onClick={() =>
                    setSort({ col: "currentView", SortType: "DESC" })
                  }
                >
                  بازدید
                </li>
              </ul>
            )}
          </div>
          <div className="flex flex-row-reverse justify-around items-center">
            <button
              className=" h-full p-2 text-4xl font-kalameh font-black  border-gray-300 border-l-2"
              onClick={toggleFilter} // Close menu on button click
            >
              فیلتر
            </button>
            <div
              className={`ml-10 transition-all duration-500 ease-in-out ${
                isFilterOpen
                  ? "opacity-100 -translate-x-5"
                  : "opacity-0 translate-x-6 "
              }`}
            >
              {isFilterOpen && (
                <ul className="flex flex-col  overflow-y-autoscroll custom-scrollbar max-w-80 overflow-x-hidden max-h-60 items-center text-3xl font-kalameh font-black text-gray-500">
                  {filterData?.map((item) => (
                    <li
                      key={item.id}
                      className=" py-3 rounded-2xl  hover:bg-gray-200 cursor-pointer hover:scale-115 hover:text-black hover:shadow-xl"
                      onClick={() => setSort({ categoryId: item.id })}
                    >
                      {item.categoryName}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <NavLink
          className="pl-4 font-black text-4xl font-kalameh text-gray-500 hover:text-black"
          to={"/News"}
        >
          X
        </NavLink>
      </div>
    </>
  );
}

export default SearchSortBox;
