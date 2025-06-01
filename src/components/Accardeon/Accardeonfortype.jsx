import { useEffect, useState } from "react";
import { Gettype } from "../../core/services/api/filterapi/coursetype";

const FilterAccordionforType = ({ setUrlParams, urlParams, setSearchParams }) => {
  const [openSection, setOpenSection] = useState(null);
  const [Type, setType] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState({});

  const getTypeInfo = async () => {
    const response = await Gettype();
    setType(response.flat());
  };

  useEffect(() => {
    getTypeInfo();
  }, []);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const handleCheckboxChange = (event, id,typeName) => {
    event.stopPropagation();
    const newParams = {
      ...urlParams,
      courseLevelId: id,
      PageNumber: 1,
      TypeName: typeName,
    };
    setUrlParams(newParams);
    setSearchParams(newParams);

    setSelectedTypes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const clearFilters = () => {
    setSelectedTypes({});
    const newParams = {
      ...urlParams,
      courseLevelId: "",
      PageNumber: 1,
    };
    setUrlParams(newParams);
    setSearchParams(newParams);
  };

  return (
    <div className="space-y-2" dir="rtl"> {/* Set right-to-left direction */}
      {/* Category Filter */}
      <div className="border hover:bg-deep-blue/10  shadow-deep-blue shadow-2xs hover:shadow-sm transition-all dark:shadow-gray-700 border-gray-200 rounded-lg p-4 mt-10 bg-white text-right dark:bg-gray-400 dark:text-black">
        <div
          className="cursor-pointer flex justify-between items-center text-2xl font-iransans"
          onClick={() => toggleSection("category")}
        >
          <h3 className="font-medium text-gray-900">نحوه برگزاری</h3>
          <span className="text-gray-500">{openSection === "category" ? "−" : "+"}</span>
        </div>

        {/* Smooth expanding transition */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            openSection === "category" ? "max-h-[500px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
          }`}
        >
          <div className="mt-3 space-y-2">
            {Type.map((item, index) => (
              <label
                key={index}
                className="flex items-center space-x-2 flex-row hover:pr-3 transition-all duration-300 ease-in-out"
              >
                <input
                  type="radio"
                  className="h-5 w-5 appearance-none rounded-full border border-deep-blue transition-all duration-300 ease-in-out checked:bg-deep-blue hover:scale-110 focus:bg-blue-300"
                  checked={selectedTypes[index] || false}
                  onChange={(event) => handleCheckboxChange(event, index,item.typeName)}
                />
                <span className="font-iransans font-bold">{item.typeName}</span>
              </label>
            ))}
          </div>
            <button
            className="font-iransans font-bold mt-3 px-4 py-1 bg-deep-blue text-white rounded hover:bg-blue-900 transition-all duration-300 dark:text-black"
            onClick={clearFilters}
          >
           فیلتر را پاک کنید
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterAccordionforType;