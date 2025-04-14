import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Common/Card";
import { getApi } from "../../core/services/api/getApi";

const AllCourse = () => {
    const navigate = useNavigate();


    const [newCoursesData, setNewCoursesData] = useState([]);


    const [filters, setFilters] = useState({
        PageNumber: 1,
        RowsOfPage: 10,
        SortingCol: "lastUpdate",
    });


    const [activeSort, setActiveSort] = useState("lastUpdate");

    const getNewCoursesData = async () => {
        const queryParams = new URLSearchParams();
        for (const key in filters) {
            queryParams.append(key, filters[key]);
        }
        const response = await getApi(
            `/Home/GetCoursesWithPagination?${queryParams.toString()}`,
            "courseFilterDtos"
        );

        console.log("api response", response);

        setNewCoursesData(response);
    };


    useEffect(() => {
        getNewCoursesData();
    }, [filters]);


    const handleSorting = (sortingCol,SortType) => {
        setFilters((prev) => ({
            ...prev,
            SortingCol: sortingCol,
            PageNumber: 1,
            SortType:SortType|| "DESC"
        }));
        setActiveSort(sortingCol);
    };


    const handleNavigation = (id) => {
        navigate(`Courses/${id}`);
    };

    return (
        <div className="w-full bg-gray-50 flex justify-center m-auto flex-wrap ">

            <div className="border border-black h-16 w-full mt-14 mb-14 bg-white text-right leading-14 text-3xl">
                دوره ها
            </div>


            <div className="border border-black w-full h-18 bg-white rounded flex justify-center">
                <div
                    onClick={() => handleSorting("cost","ASC")}
                    className={`cursor-pointer w-[15%] h-full text-center leading-14 text-3xl ${activeSort === "cheapest" ? "text-blue-500 font-bold" : "text-gray-400"
                        }`}
                >
                    ارزان ترین
                </div>
                <div
                    onClick={() => handleSorting("cost","DESC")}
                    className={`cursor-pointer w-[15%] h-full text-center leading-14 text-3xl ${activeSort === "price" ? "text-blue-500 font-bold" : "text-gray-400"
                        }`}
                >
                    گران ترین
                </div>
                <div
                    onClick={() => handleSorting("currentRegistrants")}
                    className={`cursor-pointer w-[15%] h-full text-center leading-14 text-3xl ${activeSort === "bestseller" ? "text-blue-500 font-bold" : "text-gray-400"
                        }`}
                >
                    پرفروش ترین
                </div>
                <div
                    onClick={() => handleSorting("lastUpdate")}
                    className={`cursor-pointer w-[15%] h-full text-center leading-14 text-3xl ${activeSort === "lastUpdate" ? "text-blue-500 font-bold" : "text-gray-400"
                        }`}
                >
                    جدیدترین
                </div>
                <div className="border-l-2 w-[15%] h-[80%] m-auto text-center leading-10 text-3xl border-gray-300">
                    مرتب سازی
                </div>
                <div className="h-full w-[5%] border"></div>
                <input
                    className="h-18 w-[20%] border border-black text-right"
                    type="text"
                    placeholder="جستجو..."
                />
            </div>

            <div className="w-full flex border border-black  justify-center">
                <div className="w-[75%] border border-blue-500 pt-30 mr-3 flex flex-wrap flex-row gap-4 justify-center">
                    {
                        newCoursesData.map((item, index) => (
                            <Card
                                item={item}
                                index={index}
                                handleNavigation={handleNavigation}
                                key={index}
                            />
                        ))}
                </div>


                <div className="w-[25%] border border-black justify-items-center bg-white rounded-md">
                    <div className="w-8/10 h-12 mt-9 text-right text-blue-900 text-xl">فیلتر ها</div>
                    <div className="mt-4 w-8/10 h-10 border-2 border-gray-300 rounded-md"></div>
                    <div className="mt-4 w-8/10 h-10 border-2 border-gray-300 rounded-md"></div>
                    <div className="mt-4 w-8/10 h-10 border-2 border-gray-300 rounded-md"></div>
                    <div className="mt-4 w-8/10 h-34 border-2 border-gray-300 rounded-md mb-11"></div>
                </div>
            </div>
        </div>
    );
};

export { AllCourse };
