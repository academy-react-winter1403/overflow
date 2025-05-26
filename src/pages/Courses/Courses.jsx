import { About } from "../../components/coursesPage/About";
import { Masters } from "../../components/coursesPage/master";
import { Top } from "../../components/coursesPage/top";
import { Coursesmap } from "../../components/coursesPage/Courses.map";
import { useParams } from "react-router-dom";
import { getApi } from "../../core/services/api/getApi";
import { useEffect, useState } from "react";
import { useGetCourseComment } from "../../core/services/api/GetCourses/Comment";
import SendNewComment from "../../components/Comment/SendNewComment";
import { Addlikeforcourse } from "../../components/coursesPage/Addlikeforcourse";
import CommentSection from "../../components/Comment/CommentSection";

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
    return (
      <div className="text-red-600">
        Oops! {error.message || "Something went wrong."}
      </div>
    );
  }

  return (
    <div className="font-kalameh relative m-auto mt-10 mb-10 flex w-9/10 flex-col items-center ">
      {/* Top Section */}

        <Top data={courseData} id={id} />


      {/* About and Masters Section */}
      <div className="mt-10 flex w-full flex-row-reverse transition-all duration-300 max-lg:justify-center">
        <About data={courseData} />

        <div className="mt-10 flex w-1/2 flex-col items-center gap-10 transition-all duration-300 max-lg:hidden">
          <Masters data={courseData} />
          <Coursesmap data={courseData} />
        </div>
      </div>

        <div className=" pt-10 flex flex-col  w-10/10 items-end">
          
          <Addlikeforcourse data={id} />
          <SendNewComment id={id} />
        </div>

      {/* Comments Section */}
      <CommentSection commentData={commentsData} type={"Course"} />
    </div>
  );
};

export { Courses };
