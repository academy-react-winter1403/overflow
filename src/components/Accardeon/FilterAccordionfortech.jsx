import { useEffect, useState } from "react";

import { Gettechnology } from "../../core/services/api/filterapi/tech";

const FilterAccordionfortech = ({setUrlParams,urlParams,setSearchParams,}) => {
  const [openSection, setOpenSection] = useState(null);
  const [tech, setTech] = useState([]);
  const [selectedTech, setSelectedTech] = useState({});

  const getTechinfo = async () => {
    const response = await Gettechnology();

    const filteredTech = response
      .flat()
      .filter((tech) => tech.techName && tech.techName.trim() !== "");
    setTech(filteredTech);
  };

  useEffect(() => {
    getTechinfo();
  }, []);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const handleCheckboxChange = (event, id, techName) => {
    event.stopPropagation();
    const newParams = {
      ...urlParams,
      id: id,
      PageNumber: 1,
      techName: techName,
    };
    setUrlParams(newParams);
    // setSearchParams(newParams);

    setSelectedTech((prev) => ({
      [id]: !prev[id],
    }));
  };

  const clearFilters = () => {
    setSelectedTech({});
    const newParams = {
      ...urlParams,
      id: "",
      PageNumber: 1,
    };
    setUrlParams(newParams);
    // setSearchParams(newParams);
  };

  return (
    <div className="space-y-2" dir="rtl">
      {/* Category Filter */}
      <div className="hover:bg-deep-blue/10 shadow-deep-blue mt-10 rounded-lg border border-gray-200 bg-white p-4 shadow-2xs transition-all hover:shadow-sm dark:bg-gray-400 dark:text-white">
        <div
          className="font-iransans flex cursor-pointer items-center justify-between text-2xl"
          onClick={() => toggleSection("category")}
        >
          <h3 className="font-medium text-gray-900"> دسته بندی ها </h3>
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
            {tech.map((items) => (
              <label
                key={items.id}
                className="flex flex-row items-center space-x-2 transition-all duration-300 ease-in-out hover:pr-3"
              >
                <input
                  type="radio"
                  className="border-deep-blue checked:bg-deep-blue h-5 w-5 appearance-none rounded-full border transition-all duration-300 ease-in-out hover:scale-110 focus:bg-blue-300"
                  checked={selectedTech[items.id] || false}
                  onChange={(event) =>
                    handleCheckboxChange(event, items.id, items.techName)
                  }
                />
                <span className="font-iransans pr-2 font-bold">
                  {items.techName}
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

export default FilterAccordionfortech;
