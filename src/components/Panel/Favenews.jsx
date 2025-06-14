import React, { useEffect, useState } from "react";
import profile from "../../assets/userpanel/Path 31.png";
import { favecoursenew } from "../../core/services/api/userpanelapi/panelapis";

const Favenews = () => {
  const [favenews, setFavenews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  const getFaveCourse = async () => {
    try {
      const response = await favecoursenew();
      setFavenews(response.myFavoriteNews || []);
    } catch (error) {
      console.error("Error fetching favorite courses:", error);
    }
  };

  useEffect(() => {
    getFaveCourse();
  }, []);

  // Filtering and paginating data
  const filteredNews = favenews.filter((news) =>
    news?.title?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="font-iransans flex h-full w-full flex-col pt-10 text-2xl font-bold">
      <div>
        <input
          type="text"
          placeholder="جستجو دوره..."
          className="w-1/2 rounded-lg border border-gray-400 p-2 text-right"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="border-deep-blue flex w-10/10 flex-row border-b-4">
        <p className="w-2/10 pr-13 text-right transition-all duration-300 max-xl:hidden">
          تعداد لایک
        </p>
        <p className="w-2/10 pr-20 text-right transition-all duration-300 max-xl:pr-10 max-lg:w-3/10 max-lg:pr-10 max-sm:hidden">
          بازدید
        </p>
        <p className="w-2/10 pr-13 text-right transition-all duration-300 max-lg:hidden">
          تاریخ
        </p>
        <p className="mr-36 w-4/11 text-right max-sm:w-10/10">عنوان</p>
      </div>

      <div className="">
        {paginatedNews.length > 0 ? (
          paginatedNews.map((news, index) => (
            <div
              key={index}
              className="m-auto mt-5 flex h-18 w-11/12 flex-row-reverse items-center justify-start gap-2 rounded-2xl bg-gray-200 pr-5 hover:bg-gray-400 dark:bg-gray-500"
            >
              <img
                className="h-12 w-12 truncate rounded-[50px]"
                src={news?.currentImageAddressTumb || profile}
                alt="Course profile"
              />
              <div className="h-full w-4/10 truncate pt-5 pr-2 text-right transition-all duration-300 max-xl:w-6/10 max-sm:w-8/10">
                {news.title || "No Name"}
              </div>
              <div className="h-full w-2/10 truncate pt-5 transition-all duration-300 max-lg:hidden">
                {news.updateDate.slice(0, 10) || "No Date"}
              </div>
              <div className="h-full w-2/10 pt-5 max-sm:hidden">
                {news.currentView || "No Price"}
              </div>
              <div className="h-full w-2/10 pt-5 max-xl:hidden">
                {news.currentLikeCount || "No Status"}
              </div>
            </div>
          ))
        ) : (
          <p className="mt-10 text-center"> اخباری یافت نشد </p>
        )}
      </div>

      {/* Pagination Controls */}
      {/* Pagination Controls */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        {/* Previous Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={`rounded-xl px-3 py-2 transition duration-300 ${
            currentPage === 1
              ? "cursor-not-allowed border"
              : "border"
          }`}
        >
          قبلی
        </button>

        {/* Page numbers */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={`rounded-xl border border-gray-300 px-4 py-2 transition duration-300 ${
                pageNumber === currentPage
                  ? "bg-blue-500 border"
                  : "border"
              }`}
            >
              {pageNumber}
            </button>
          ),
        )}

        {/* Next Button */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={`rounded-xl px-3 py-2 transition duration-300 ${
            currentPage === totalPages
              ? "cursor-not-allowed border"
              : "border"
          }`}
        >
          بعدی
        </button>
      </div>
    </div>
  );
};

export { Favenews };
