import { useEffect, useState } from "react";
import { Getteacherid } from "../../core/services/api/filterapi/teacerid";

const FilterAccordion = ({ setUrlParams, urlParams, setSearchParams }) => {
  const [openSection, setOpenSection] = useState(null);
  const [teacher, setTeacher] = useState([]);
  const [selectedTeachers, setSelectedTeachers] = useState({});

  const getTeacherInfo = async () => {
    const response = await Getteacherid();
    const filteredTeachers = response
      .flat()
      .filter((teacher) => teacher.fullName && teacher.fullName.trim() !== "");
    setTeacher(filteredTeachers);
  };

  useEffect(() => {
    getTeacherInfo();
  }, []);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const handleCheckboxChange = (event, id) => {
    const newParams = {
      ...urlParams,
      TeacherId: id,
      PageNumber: 1,
    };
    setUrlParams(newParams);
    // setSearchParams(newParams);

    setSelectedTeachers((prev) => ({
      [id]: !prev[id],
    }));
  };

  const clearFilters = () => {
    setSelectedTeachers({});
    const newParams = {
      ...urlParams,
      TeacherId: "",
      PageNumber: 1,
    };
    setUrlParams(newParams);
    // setSearchParams(newParams);
  };

  return (
    <div className="space-y-2" dir="rtl">
      {/* Category Filter */}
      <div className="mt-10 rounded-lg border border-gray-200 bg-white p-4 dark:bg-gray-400 dark:text-black">
        <div
          className="font-iransans flex cursor-pointer items-center justify-between text-2xl"
          onClick={() => toggleSection("category")}
        >
          <h3 className="font-medium text-gray-900">اساتید</h3>
          <span className="text-gray-500">
            {openSection === "category" ? "−" : "+"}
          </span>
        </div>

        {/* Smooth expanding transition */}
        <div
          className={`scrollbar-none hover:scrollbar-none overflow-x-visible overflow-y-auto transition-all duration-300 ${
            openSection === "category"
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
          style={{
            scrollbarWidth: "none",
            "-ms-overflow-style": "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <div className="mt-3 space-y-2">
            {teacher.map((item) => (
              <label
                key={item.teacherId}
                className="flex flex-row items-center space-x-2 transition-all duration-300 ease-in-out hover:pr-3"
              >
                <input
                  type="radio"
                  className="h-5 w-5 appearance-none rounded-full border border-deep-blue transition-all duration-300 ease-in-out checked:bg-deep-blue hover:scale-110 focus:bg-blue-300"
                  checked={selectedTeachers[item.teacherId] || false}
                  onChange={(event) =>
                    handleCheckboxChange(event, item.teacherId)
                  }
                />
                <span className="font-iransans pr-2 font-bold">
                  {item.fullName}
                </span>
              </label>
            ))}
          </div>

          {/* Clear Filter Button */}
          <button
            className="font-iransans bg-deep-blue mt-3 rounded px-4 py-1 font-bold text-white transition-all duration-300 hover:bg-blue-900 dark:text-black"
            onClick={clearFilters}
          >
            فیلتر را پاک کنید
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterAccordion;
