import { About } from "../../components/coursesPage/About";
import { Masters } from "../../components/coursesPage/master";
import { Top } from "../../components/coursesPage/top";
import { Coursesmap } from "../../components/coursesPage/Courses.map";
import Comment from "../../components/Comment/Comment";
import { useParams } from "react-router-dom";
import { getApi } from "../../core/services/api/getApi";
import { useEffect, useState } from "react";
import { useGetCourseComment } from "../../core/services/api/GetCourses/Comment";

const Courses = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const { data: commentsData, isLoading, error } = useGetCourseComment(id);

  const getCourseDetails = async () => {
    try {
      const response = await getApi(`/Home/GetCourseDetails?CourseId=${id}`);
      setCourseData(response);
    } catch (err) {
      console.error("Error fetching course details:", err);
    }
  };

  useEffect(() => {
    if (id) {
      getCourseDetails();
    }
  }, [id]);

  if (isLoading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600">Oops! {error.message || "Something went wrong."}</div>;
  }

  return (
    <div className="relative m-auto mt-10 mb-10 flex w-9/10 flex-col items-center font-kalameh">
      {/* Top Section */}
      <Top data={courseData} />

      {/* About and Masters Section */}
      <div className="mt-10 flex w-full flex-row-reverse transition-all duration-300 max-lg:justify-center">
        <About data={courseData} />

        <div className="max-lg:hidden mt-10 w-1/2 flex flex-col items-center gap-10  transition-all duration-300">
          <Masters data={courseData} />
          <Coursesmap data={courseData} />
        </div>
      </div>

      {/* Comments Section */}
      <Comment commentData={commentsData} type={"Course"} />
    </div>
  );
};

export { Courses };