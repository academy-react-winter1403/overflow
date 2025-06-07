import React, { useEffect, useState } from "react";
import profile from "../../assets/userpanel/Path 31.png";
import { favecourse } from "../../core/services/api/userpanelapi/panelapis";
import SmartImage from "../Common/SmartImage";

const Fave = () => {
  const [fave, setFave] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");

  const getFaveCourse = async () => {
    try {
      const response = await favecourse();

      setFave(response.favoriteCourseDto || []);
    } catch (error) {
      console.error("Error fetching favorite courses:", error);
    }
  };

  useEffect(() => {
    getFaveCourse();
  }, []);

  const filterfavoritecourse = fave.filter(
    (favorite) =>
      favorite?.courseTitle
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      favorite?.describe?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="font-kalameh flex h-185 w-full flex-col overflow-auto pt-10 text-2xl font-bold">
      <div>
        <input
          type="text"
          placeholder="جستجو دوره..."
          className="w-1/2 rounded-lg border border-gray-400 p-2 text-right"
          value={searchQuery}
          onChange={(search) => setsearchQuery(search.target.value)}
        />
      </div>

      <div className="border-deep-blue flex flex-row-reverse justify-center border-b-4 pr-35 max-md:justify-start max-md:gap-8 max-md:text-xl">
        <p className="w-4/10 text-right transition-all duration-300 max-xl:mr-[-65px] max-lg:mr-[-185px] max-lg:w-5/10 max-md:mr-[-80px]">
          نام دوره
        </p>
        <p className="w-3/10 text-right transition-all duration-300 max-xl:mr-[-65px] max-lg:w-5/10 max-lg:text-center max-md:hidden">
          مدرس دوره
        </p>
        <p className="w-3/10 pr-5 text-right transition-all duration-300 max-lg:hidden">
          سطح دوره
        </p>
        <p className="w-3/10 pr-6 text-right transition-all duration-300 max-lg:hidden">
          وضعیت
        </p>
      </div>

      <div className="overflow-auto h-full ">
        {filterfavoritecourse.length > 0 ? (
          filterfavoritecourse.map((item, index) => (
            <div
              key={index}
              className=" m-auto mt-3 flex h-20 w-11/12 flex-row-reverse items-center justify-start gap-3 rounded-2xl bg-gray-200 pr-5 hover:bg-gray-400 dark:bg-gray-500"
            >
              <div className="flex w-1/10 flex-row justify-end transition-all duration-300 max-xl:hidden">
                <SmartImage
                  src={item?.tumbImageAddress}
                  fallback={profile}
                  alt={item.title}
                  className="h-12 w-12 rounded-[50px]"
                />
              </div>
              <div className="h-17 w-3/10 truncate pt-5 pr-5 text-right transition-all duration-300 max-lg:w-5/10 max-md:w-10/10">
                {item.courseTitle || "No Name"}
              </div>
              <div className="h-full w-3/10 truncate pt-5 text-right transition-all duration-300 max-md:hidden">
                {item.teacheName || "No Teacher"}
              </div>
              <div className="h-full w-3/10 pt-5 text-right transition-all duration-300 max-lg:hidden">
                {item.levelName.slice(0, 10) || "No Date"}
              </div>
              {/* <div className="pt-5 w-2/10 h-full">{item.price || 'No Price'}</div> */}
              <div className="h-full w-2/10 truncate pt-5 text-right transition-all duration-300 max-lg:hidden">
                {item.typeName || "No Status"}
              </div>
            </div>
          ))
        ) : (
          <p className="mt-10 text-center">دوره ای وجود ندارد</p>
        )}
      </div>
    </div>
  );
};

export { Fave };
