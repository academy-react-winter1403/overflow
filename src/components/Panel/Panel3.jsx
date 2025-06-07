import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Card from "../Common/Card";

import { Getmycourse } from "../../core/services/api/userpanelapi/panelapis";

const Panel3 = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const [newCoursesData, setNewCoursesData] = useState([]);

  const getNewCoursesData = async () => {
    try {
      const response = await Getmycourse();
      if (Array.isArray(response.listOfMyCourses)) {
        setNewCoursesData(response.listOfMyCourses);
      } else {
        console.error("Unexpected response format:", response);
      }
    } catch (error) {
      console.error("Error fetching courses data:", error);
    }
  };

  useEffect(() => {
    getNewCoursesData();
  }, []);

  const handleNavigation = (id) => {
    console.log(id);
    navigate(`/Courses/${id}`);
  };

  const filtermycours = newCoursesData.filter(
    (mycourse) => mycourse?.courseTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mycourse?.describe?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mycourse?.fullName?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="font-kalameh flex w-10/10 flex-row-reverse flex-wrap ">

      <div className="flex w-10/10 flex-row-reverse flex-wrap">
            <div>
        <input
          type="text"
          placeholder="جستجو دوره..."
          className="w-90 rounded-lg mt-5 mr-5 border border-gray-400 p-2 text-right max-sm:w-50"
          value={searchQuery}
          onChange={(mycourse) => setSearchQuery(mycourse.target.value)}
        />
      </div>
        <div className="mt-10 flex h-155 w-10/10 flex-row-reverse flex-wrap justify-center gap-8 max-lg:h-150 max-lg:overflow-auto max-sm:h-full max-sm:overflow-auto">
          {filtermycours.length > 0 ? (
            filtermycours.map((course, index) => (
              <Card
                item={course}
                index={index}
                handleNavigation={handleNavigation}
                key={index}
              />
            ))
          ) : (
            <p className="font-iransans m-auto text-center text-3xl">
              دوره ای وجود ندارد
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export { Panel3 };
