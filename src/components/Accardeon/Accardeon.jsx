import { useEffect, useState } from "react";
import { Getteacherid } from "../../core/services/api/filterapi/teacerid";

const FilterAccordion = ({ setFilters }) => {
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
    console.log(":", id);
    setFilters((prev) => ({
      ...prev,
      TeacherId: id,
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
      <div className="mt-10 rounded-lg border border-gray-200 bg-white p-4">
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
          className={`overflow-auto transition-all duration-300 ${
            openSection === "category"
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-3 space-y-2">
            {teacher.map((item, index) => (
              <label
                key={index}
                className="flex flex-row items-center space-x-2 transition-all duration-300 ease-in-out hover:pr-3"
              >
                <input
                  type="radio"
                  className="transform rounded text-blue-500 transition-all duration-300 ease-in-out hover:scale-105"
                  checked={selectedTeachers[index] || false}
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
        </div>
      </div>
    </div>
  );
};

export default FilterAccordion;
