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
    RowsOfPage: parseInt(searchParams.get("RowsOfPage") || "9"),
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
        `/News?NewsCategoryId=${searchParams.get("NewsCategoryId")}&PageNumber=${searchParams.get("PageNumber")}&RowsOfPage=${searchParams.get("RowsOfPage")}&Query=${searchParams.get("Query")}&SortingCol=${searchParams.get("SortingCol")}&SortType=${searchParams.get("SortType")}`,
      );
      setnewsList(response);
    };
    getNewsData();
  }, [searchParams]);

  const newsData = newsList?.news || [];
  const totalCount = newsList?.totalCount || 0;

  // Calculate total pages based on total count
  const totalPages = Math.max(1, Math.ceil(totalCount / urlParams.RowsOfPage));

  // Update filters when URL changes
  useEffect(() => {
    seturlParams({
      Query: searchParams.get("Query") || "",
      PageNumber: parseInt(searchParams.get("PageNumber") || "1"),
      NewsCategoryId: searchParams.get("NewsCategoryId") || "",
      RowsOfPage: parseInt(searchParams.get("RowsOfPage") || "9"),
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
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return;
    }
    seturlParams((prev) => ({
      ...prev,
      PageNumber: pageNumber,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-10 text-gray-600 ">
      <SearchSortBox
        setSort={handleSortChange}
        setSearch={handelSearch}
        categoryURL={categoryURL}
        urlParams={urlParams}
      />
      {/* Title */}
      <div className="mb-10 flex flex-nowrap items-center justify-center max-sm:hidden max-lg:hidden">
        <div className="w-full border-b-4 border-gray-500 max-sm:hidden max-lg:hidden"></div>
        <h1 className="font-kalameh mb-8 max-w-7/10 min-w-3/10 text-center text-5xl font-black ">
          روزنامه سپهر
        </h1>
        <div className="w-full border-b-4 border-gray-600"></div>
      </div>
      {/* News List */}
      <div className="flex flex-wrap items-center justify-center gap-6 max-sm:mt-25 max-sm:overflow-auto ">
        {newsData &&
          newsData.map((news) => (
            <NewsCard
              handleNavigation={handleNavigation}
              item={news}
              key={news.id}
            />
          ))}
      </div>

      {/* pagination */}
      {totalPages > 1 && (
        <div className="font-iransans mt-6 mb-10 flex w-full items-center justify-center gap-4 pr-110 font-bold  max-sm:pl-50">
          <button
            className={`bg-deep-blue h-12 w-12 rounded-[50px] text-white hover:bg-blue-700 max-sm:w-15 ${
              urlParams.PageNumber === 1 ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={urlParams.PageNumber === 1}
            onClick={() => handlePageChange(urlParams.PageNumber - 1)}
          >
            قبلی
          </button>

          {/* Dynamic page numbers */}
          <div className="flex space-x-2">
            {(() => {
              const currentPage = urlParams.PageNumber;
              let pages = [];

              // Always show first page
              if (currentPage > 3) {
                pages.push(1);
                if (currentPage > 4) pages.push("...");
              }

              // Show pages around current page
              for (
                let i = Math.max(1, currentPage - 2);
                i <= Math.min(totalPages, currentPage + 2);
                i++
              ) {
                pages.push(i);
              }

              // Always show last page
              if (currentPage < totalPages - 2) {
                if (currentPage < totalPages - 3) pages.push("...");
                pages.push(totalPages);
              }

              return pages.map((page, index) =>
                page === "..." ? (
                  <span key={`ellipsis-${index}`} className="px-3 py-1">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    style={{ background: ` ${urlParams.PageNumber === page ? "#436e8e4D" : ""}` }}
                    className={`rounded-[50px] border bg-white border-gray-300 px-3 py-1 text-lg hover:bg-gray-100 ${
                      urlParams.PageNumber === page ? "text-black" : ""
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ),
              );
            })()}
          </div>

          <button
            className={`bg-deep-blue h-12 w-12 rounded-[50px] text-white hover:bg-blue-700 ${
              urlParams.PageNumber >= totalPages
                ? "cursor-not-allowed opacity-50"
                : ""
            }`}
            disabled={urlParams.PageNumber >= totalPages}
            onClick={() => handlePageChange(urlParams.PageNumber + 1)}
          >
            بعدی
          </button>
        </div>
      )}
    </div>
  );
}

export default NewsPage;
