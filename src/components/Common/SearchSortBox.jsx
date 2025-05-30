import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { getApi } from "../../core/services/api/getApi";
function SearchSortBox({ setSort, setSearch, categoryURL }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [timer, setTimer] = useState(null); // To store the timeout ID
  const [isMenuOpen, setIsMenuOpen] = useState(true); // State to track menu visibility
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
      <div className="my-6 mb-17 flex h-20 flex-row-reverse items-center rounded-3xl bg-white dark:bg-gray-400/95">
        <input
          type="text"
          placeholder="جستجو"
          onChange={handleSearchChange}
          value={searchTerm}
          className="font-kalameh h-full w-3/10 rounded-md border-gray-300 pr-8 text-right text-4xl font-black transition-all duration-300 focus:w-5/10 focus:text-black focus:outline-none"
        />

        {/* Sort */}
        <div className="relative flex w-full flex-row-reverse items-center justify-around">
          <div>
            <button
              className="font-kalameh m-3 h-full border-l-2 border-gray-300 p-2 text-4xl font-black focus:outline-none"
              onClick={toggleMenu} // Toggle menu on button click
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
            {isMenuOpen && (
              <ul className="font-kalameh flex items-center justify-center text-3xl font-black text-gray-500">
                <li
                  className="cursor-pointer rounded-2xl px-4 py-2 hover:bg-gray-200 hover:text-black hover:shadow-xl"
                  onClick={() =>
                    setSort({ col: "InsertDate", SortType: "DESC" })
                  }
                >
                  تاریخ
                </li>
                <li
                  className="cursor-pointer rounded-2xl px-4 py-2 hover:bg-gray-200 hover:text-black hover:shadow-xl"
                  onClick={() =>
                    setSort({ col: "currentLikeCount", SortType: "DESC" })
                  }
                >
                  محبوبیت
                </li>
                <li
                  className="cursor-pointer rounded-2xl px-4 py-2 hover:bg-gray-200 hover:text-black hover:shadow-xl"
                  onClick={() =>
                    setSort({ col: "currentView", SortType: "DESC" })
                  }
                >
                  بازدید
                </li>
              </ul>
            )}
          </div>
          <div className="relative flex flex-row-reverse items-center justify-around">
            <button
              className="font-kalameh h-full border-l-2 border-gray-300 p-2 text-4xl font-black"
              onClick={toggleFilter} // Close menu on button click
            >
              فیلتر
            </button>
             <div
            className={`absolute top-19 z-30 bg-white  dark:bg-gray-400/95 text-gray-100 rounded-2xl ml-10  transition-all duration-500 ease-in-out ${
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
         
        </div>
        <NavLink
          className="font-kalameh pl-4 text-4xl font-black text-gray-500 hover:text-black"
          to={"/News"}
        >
          X
        </NavLink>
      </div>
    </>
  );
}

export default SearchSortBox;
