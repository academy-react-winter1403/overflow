import React, { useState, useEffect } from "react";
import { getApi } from "../../core/services/api/getApi";
import NewsCard from "../../components/Common/NewsCard";
import SearchSortBox from "../../components/Common/SearchSortBox";
import { useNavigate, useSearchParams } from "react-router";

function NewsPage() {
  const categoryURL = "/News/GetListNewsCategory";
  const [newsList, setnewsList] = useState([]);
  const navigate = useNavigate();
  const [urlParams, seturlParams] = useState({
    Query: "",
    RowsOfPage: 10,
    PageNumber: 1,
    NewsCategoryId: "",
    SortingCol: "InsertDate",
    SortType: "DESC",
  });

  const [searchParams, setSearchParams] = useSearchParams(); // Correct usage of useSearchParams

  // Dynamic URL
  const URL = `/News?NewsCategoryId=${urlParams.NewsCategoryId}&PageNumber=${urlParams.PageNumber}&RowsOfPage=${urlParams.RowsOfPage}&Query=${urlParams.Query}&SortingCol=${urlParams.SortingCol}&SortType=${urlParams.SortType}`;

  // Get Data
  const getNewsData = async () => {
    const response = await getApi(URL, "news");
    setnewsList(response);
  };

  useEffect(() => {
    getNewsData();
    navigate(URL);
  }, [URL]);

  // Update the state when searchParams change
  useEffect(() => {
    seturlParams({
      Query: searchParams.get("Query") || "",
      PageNumber: searchParams.get("PageNumber") || 1,
      NewsCategoryId: searchParams.get("NewsCategoryId") || "",
      RowsOfPage: searchParams.get("RowsOfPage") || 10,
      SortingCol: searchParams.get("SortingCol") || "InsertDate",
      SortType: searchParams.get("SortType") || "DESC",
    });
  }, [searchParams]);
  // Handle Sort Change
  const handleSortChange = (sort) => {
    seturlParams((prev) => ({
      ...prev,
      SortingCol: sort.col || prev.SortingCol,
      SortType: sort.type || prev.SortType,
      NewsCategoryId: sort.categoryId || prev.NewsCategoryId,
      pageNumber: 1,
    }));
  };
  //Handel navigation
  const handleNavigation = (id) => {
    // console.log(id)
    navigate(`NewsDetails/${id}`); 
  };
  // Handle Search Change
  const handelSearch = (search) => {
    seturlParams((prev) => ({
      ...prev,
      Query: search,
      pageNumber: 1,
    }));
  };

  return (
    <div className="container text-gray-600 mx-auto px-4 py-10">
      <SearchSortBox
        setSort={handleSortChange}
        setSearch={handelSearch}
        categoryURL={categoryURL}
      />
      {/* Title */}
      <div className="flex flex-nowrap justify-center items-center mb-10">
        <div className="border-b-4 border-gray-500 w-full"></div>
        <h1 className="text-5xl max-w-7/10 min-w-3/10 font-kalameh font-black mb-8 text-center">
          روزنامه سپهر
        </h1>
        <div className="border-b-4 border-gray-600 w-full"></div>
      </div>
      {/* News List */}
      <div className="grid grid-cols-3 max-sm:grid-cols-2 max-md:grid-cols-3 gap-6">
        {newsList.map((news) => (
          <NewsCard
            handleNavigation={handleNavigation}
            item={news}
            key={news.id}
          />
        ))}
      </div>
    </div>
  );
}

export default NewsPage;
