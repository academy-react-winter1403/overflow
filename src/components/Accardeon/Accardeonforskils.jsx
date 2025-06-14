import { useEffect, useState } from "react";
import { Getskills } from "../../core/services/api/filterapi/skills";

const FilterAccordionforskills = ({
  setUrlParams,
  urlParams,
  setSearchParams,
}) => {
  const [openSection, setOpenSection] = useState(null);
  const [Skill, setSkill] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState({});

  const getSkillsInfo = async () => {
    const response = await Getskills();
    setSkill(response.flat());
  };

  useEffect(() => {
    getSkillsInfo();
  }, []);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const handleCheckboxChange = (event, id, levelName) => {
    const newParams = {
      ...urlParams,
      CourseTypeId: id,
      PageNumber: 1,
      LevelName: levelName,
    };
    setUrlParams(newParams);
    setSearchParams(newParams);

    setSelectedSkills((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const clearFilters = () => {
    setSelectedSkills({});
    const newParams = {
      ...urlParams,
      CourseTypeId: "",
      PageNumber: 1,
    };
    setUrlParams(newParams);
    setSearchParams(newParams);
  };

  return (
    <div className="space-y-2" dir="rtl">
      {/* Skills Filter */}
      <div className="hover:bg-deep-blue/10 shadow-deep-blue mt-10 rounded-lg border border-gray-200 bg-white p-4 shadow-2xs transition-all hover:shadow-sm dark:bg-gray-400 dark:text-white">
        <div
          className="font-iransans flex cursor-pointer items-center justify-between text-2xl"
          onClick={() => toggleSection("skills")}
        >
          <h3 className="font-medium text-gray-900">مهارت</h3>
          <span className="text-gray-500">
            {openSection === "skills" ? "−" : "+"}
          </span>
        </div>

        {/* Smooth expanding transition */}
        <div
          className={`scrollbar-none overflow-auto transition-all duration-300 ${
            openSection === "skills"
              ? "max-h-[500px] scale-100 opacity-100"
              : "max-h-0 scale-95 opacity-0"
          }`}
        >
          <div className="mt-3 space-y-2">
            {Skill.map((item, index) => (
              <label
                key={index}
                className="flex flex-row items-center space-x-2 transition-all duration-300 ease-in-out hover:pr-3"
              >
                <input
                  type="radio"
                  className="border-deep-blue checked:bg-deep-blue h-5 w-5 appearance-none rounded-full border transition-all duration-300 ease-in-out hover:scale-110 focus:bg-blue-300"
                  checked={selectedSkills[item.CourseTypeId] || false}
                  onChange={(event) =>
                    handleCheckboxChange(event, index, item.levelName)
                  }
                />
                <span className="font-iransans pr-2 font-bold">
                  {item.levelName}
                </span>
              </label>
            ))}
          </div>
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

export default FilterAccordionforskills;
