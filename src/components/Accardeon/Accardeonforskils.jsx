import { useEffect, useState } from "react";
import { Getskills } from "../../core/services/api/filterapi/skills";

const FilterAccordionforskills = ({setFilters}) => {
  const [openSection, setOpenSection] = useState(null);
  const [Skill, setSkill] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState({});

  const getSkillsInfo = async () => {
    const response = await Getskills();
    setSkill(response.flat());
    // console.log(response);
  };

  useEffect(() => {
    getSkillsInfo();
  }, []);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const handleCheckboxChange = (event, id) => {
    // event.stopPropagation();
     setFilters((prev) => ({
      ...prev,
      CourseTypeId: id,
    }));
    setSelectedSkills((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const clearFilters = () => {
    setSelectedSkills({});
    setFilters((prev) => ({
      ...prev,
      CourseTypeId: null, 
    }));
  };
  return (
    <div className="space-y-2" dir="rtl">
      {/* Skills Filter */}
      <div className="border border-gray-200 rounded-lg p-4 mt-10 bg-white dark:bg-gray-400 dark:text-black">
        <div
          className="cursor-pointer flex justify-between items-center text-2xl font-iransans"
          onClick={() => toggleSection("skills")}
        >
          <h3 className="font-medium text-gray-900">مهارت</h3>
          <span className="text-gray-500">{openSection === "skills" ? "−" : "+"}</span>
        </div>

        {/* Smooth expanding transition */}
        <div
          className={`overflow-auto transition-all duration-300 ${
            openSection === "skills" ? "max-h-[500px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
          }`}
        >
          <div className="mt-3 space-y-2">
            {Skill.map((item, index) => (
              <label
                key={index}
                className="flex items-center space-x-2 flex-row hover:pr-3 transition-all duration-300 ease-in-out"
              >
                <input
                  type="Radio"
                  className="rounded text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
                  checked={selectedSkills[item.CourseTypeId] || false}
                  onChange={(event) => handleCheckboxChange(event, index)}
                />
                <span className="font-iransans pr-2 font-bold">{item.levelName}</span>
              </label>
            ))}
          </div>
            <button
            className="font-iransans font-bold mt-3 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-all duration-300 dark:text-black"
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