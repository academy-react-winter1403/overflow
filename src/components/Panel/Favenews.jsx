import React, { useEffect, useState } from "react";
import profile from "../../assets/userpanel/Path 31.png";
import { favecoursenew } from "../../core/services/api/userpanelapi/panelapis";

const Favenews = () => {
  const [favenews, setFavenews] = useState([]);

  const [seachQurey, setseachQurey] = useState("");

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

  const filterfavoritenews = favenews.filter((news) =>
    news?.title?.toLowerCase().includes(seachQurey.toLowerCase()),
  );

  return (
    <div className="font-iransans flex h-full w-full flex-col pt-10 text-2xl font-bold">
      <div>
        <input 
        type="text"
        placeholder="جستجو دوره..."
          className="w-1/2 rounded-lg border border-gray-400 p-2 text-right"
          value={seachQurey}
          onChange={(news) => setseachQurey(news.target.value)}
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
      {filterfavoritenews.length > 0 ? (
        filterfavoritenews.map((reserve, index) => (
          <div
            key={index}
            className="m-auto mt-5 flex h-18 w-11/12 flex-row-reverse items-center justify-start gap-2 rounded-2xl bg-gray-200 pr-5 hover:bg-gray-400 dark:bg-gray-500"
          >
            <img
              className="tru h-12 w-12 rounded-[50px]"
              src={reserve.currentImageAddressTumb || profile}
              alt="Course profile"
            />
            <div className="h-full w-4/10 truncate pt-5 pr-2 text-right transition-all duration-300 max-xl:w-6/10 max-sm:w-8/10">
              {reserve.title || "No Name"}
            </div>
            {/* <div className="w-2/10 h-full">{reserve.currentRate || 'No Teacher'}</div> */}
            <div className="h-full w-2/10 truncate pt-5 transition-all duration-300 max-lg:hidden">
              {reserve.updateDate.slice(0, 10) || "No Date"}
            </div>
            <div className="h-full w-2/10 pt-5 max-sm:hidden">
              {reserve.currentView || "No Price"}
            </div>
            <div className="h-full w-2/10 pt-5 max-xl:hidden">
              {reserve.currentLikeCount || "No Status"}
            </div>
          </div>
        ))
      ) : (
        <p className="mt-10 text-center"> اخباری یافت نشد </p> // Corrected JSX element syntax
      )}
    </div>
  );
};

export { Favenews };
