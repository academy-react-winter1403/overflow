import React, { useState, useEffect } from "react";
import { getApi } from "../../core/services/api/getApi";
import NewsCard from "../../components/Common/NewsCard";
import SearchSortBox from "../../components/Common/SearchSortBox";
import { useNavigate, useSearchParams } from "react-router";

function NewsPage() {
  const categoryURL = "/News/GetListNewsCategory";
  const [newsList, setnewsList] = useState([]);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [urlParams, seturlParams] = useState({
    Query: searchParams.get("Query") || "",
    RowsOfPage: parseInt(searchParams.get("RowsOfPage") || "10"),
    PageNumber: parseInt(searchParams.get("PageNumber") || "1"),
    NewsCategoryId: searchParams.get("NewsCategoryId") || "",
    SortingCol: searchParams.get("SortingCol") || "InsertDate",
    SortType: searchParams.get("SortType") || "DESC",
  });

  // Update URL when filters change
  useEffect(() => {
    setSearchParams({
      Query: urlParams.Query,
      RowsOfPage: urlParams.RowsOfPage.toString(),
      PageNumber: urlParams.PageNumber.toString(),
      NewsCategoryId: urlParams.NewsCategoryId,
      SortingCol: urlParams.SortingCol,
      SortType: urlParams.SortType,
    });
  }, [urlParams, setSearchParams]);

  // Get Data based on current URL parameters
  useEffect(() => {
    const getNewsData = async () => {
      const response = await getApi(
        `/News?NewsCategoryId=${searchParams.get("NewsCategoryId") || ""}&PageNumber=${searchParams.get("PageNumber") || "1"}&RowsOfPage=${searchParams.get("RowsOfPage") || "10"}&Query=${searchParams.get("Query") || ""}&SortingCol=${searchParams.get("SortingCol") || "InsertDate"}&SortType=${searchParams.get("SortType") || "DESC"}`,
        "news",
      );
      setnewsList(response);
    };
    getNewsData();
  }, [searchParams]);

  // Update filters when URL changes
  useEffect(() => {
    seturlParams({
      Query: searchParams.get("Query") || "",
      PageNumber: parseInt(searchParams.get("PageNumber") || "1"),
      NewsCategoryId: searchParams.get("NewsCategoryId") || "",
      RowsOfPage: parseInt(searchParams.get("RowsOfPage") || "10"),
      SortingCol: searchParams.get("SortingCol") || "InsertDate",
      SortType: searchParams.get("SortType") || "DESC",
    });
  }, [searchParams]);

  const handleSortChange = (sort) => {
    seturlParams((prev) => ({
      ...prev,
      SortingCol: sort.col || prev.SortingCol,
      SortType: sort.type || prev.SortType,
      NewsCategoryId: sort.categoryId || prev.NewsCategoryId,
      PageNumber: 1,
    }));
  };

  const handleNavigation = (id) => {
    navigate(`NewsDetails/${id}`);
  };

  const handelSearch = (search) => {
    seturlParams((prev) => ({
      ...prev,
      Query: search,
      PageNumber: 1,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-10 text-gray-600">
      <SearchSortBox
        setSort={handleSortChange}
        setSearch={handelSearch}
        categoryURL={categoryURL}
      />
      {/* Title */}
      <div className="mb-10 flex flex-nowrap items-center justify-center">
        <div className="w-full border-b-4 border-gray-500"></div>
        <h1 className="font-kalameh mb-8 max-w-7/10 min-w-3/10 text-center text-5xl font-black">
          روزنامه سپهر
        </h1>
        <div className="w-full border-b-4 border-gray-600"></div>
      </div>
      {/* News List */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        {newsList &&
          newsList.map((news) => (
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
