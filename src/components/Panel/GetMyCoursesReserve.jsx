import { useEffect, useState } from "react";
import { Getmyreserveapi } from "../../core/services/api/userpanelapi/panelapis";

import profile from "../../assets/Coursesimage/IMG_6504.png";

const GetMyCoursesReserve = () => {
  const [Reservecourse, setReservecourse] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getapi = async () => {
    try {
      const getresponse = await Getmyreserveapi();

      if (!getresponse || getresponse.length === 0) {
        return;
      }

      setReservecourse(getresponse);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    getapi();
  }, []);

  const filteredReserve = Reservecourse.filter(
    (reserve) =>
      reserve?.courseName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reserve?.description?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="font-kalameh flex h-full w-full flex-col text-2xl font-bold ">
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="جستجو دوره..."
          className="w-1/2 rounded-lg border border-gray-400 p-2 text-right"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="border-deep-blue flex w-10/10 flex-row-reverse justify-center gap-20 border-b-4 pr-10 max-md:justify-start max-md:gap-8 max-md:text-xl ">
        <p className="w-5/10 pr-25 text-right max-sm:pr-15">نام دوره</p>
        <p className="w-5/10 pr-35 text-right max-lg:pr-5 max-md:hidden max-sm:hidden">
          تاریخ شروع
        </p>
      </div>

        <div className=" h-full overflow-auto">
      {filteredReserve.length > 0 ? (
        filteredReserve.map((reserve, index) => (
          <div
            key={index}
            className=" m-auto mt-5 flex h-20 w-11/12 flex-row-reverse items-center justify-start gap-2 rounded-2xl bg-gray-200 p-2 pr-5 hover:bg-gray-400 dark:bg-gray-500"
          >
            <img className="h-12 w-12" src={profile} alt="Course profile" />
            <div className="h-full w-6/10 pt-4 pr-3 text-right max-lg:truncate max-md:truncate max-sm:truncate">
              {reserve.courseName || "No Name"}
            </div>
            <div className="h-full w-5/10 pt-4 max-lg:truncate max-md:hidden max-sm:hidden">
              {reserve.reserverDate || "No Date"}
            </div>
          </div>
        ))
      ) : (
        <p className="mt-10 text-center">"دوره‌ای یافت نشد"</p>
      )}</div>
    </div>
  );
};

export { GetMyCoursesReserve };
