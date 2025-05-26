import { useEffect, useState } from "react";
import { Getteacherid } from "../../core/services/api/filterapi/teacerid";

const FilterAccordion = (setFilters) => {
  const [openSection, setOpenSection] = useState(null);
  const [teacher, setTeacher] = useState([]);
  const [selectedTeachers, setSelectedTeachers] = useState({});

  const getTeacherInfo = async () => {
    const response = await Getteacherid();
    setTeacher(response.flat());
  };

  useEffect(() => {
    getTeacherInfo();
  }, []);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const handleCheckboxChange = (event, id) => {
    console.log(":",id)
      setFilters((prev) => ({
    ...prev,
    teacherid: id,
     }));
    event.stopPropagation();
    setSelectedTeachers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-2" dir="rtl">
      {/* Category Filter */}
      <div className="border border-gray-200 rounded-lg p-4 mt-10 bg-white">
        <div
          className="cursor-pointer flex justify-between items-center text-2xl font-iransans"
          onClick={() => toggleSection("category")}
        >
          <h3 className="font-medium text-gray-900">اساتید</h3>
          <span className="text-gray-500">{openSection === "category" ? "−" : "+"}</span>
        </div>

        {/* Smooth expanding transition */}
        <div
          className={`overflow-auto transition-all duration-300 ${
            openSection === "category" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-3 space-y-2">
            {teacher.map((item, index) => (
              <label
                key={index}
                className="flex items-center space-x-2 flex-row hover:pr-3 transition-all duration-300 ease-in-out"
              >
                <input
                  type="radio"
                  className="rounded text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
                  checked={selectedTeachers[index] || false}
                  onChange={(event) => handleCheckboxChange(event, item.teacherId)}
                />
                <span className="font-iransans pr-2 font-bold">{item.fullName}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterAccordion;