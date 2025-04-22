import { About } from "../../components/coursesPage/About";
import { Masters } from "../../components/coursesPage/master";
import { Top } from "../../components/coursesPage/top";
import { Coursesmap } from "../../components/coursesPage/Courses.map";
import { CommentSection } from "../../components/coursesPage/Commentsection";
import { Commentdiv } from "../../components/coursesPage/Commentdiv";
import { useParams } from "react-router";
import { getApi } from "../../core/services/api/getApi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getItem } from "../../core/services/common/storage.services";

const Courses = () => {
  const usetoken = getItem("token");

  const { id } = useParams();
  console.log("Course ID:", id);

  const [courseData, setCourseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCourseDetails = async () => {
    try {
      const response = await getApi(`/Home/GetCourseDetails?CourseId=${id}`);
      // console.log("Course details fetched:", response);
      setCourseData(response);
    } catch (err) {
      console.error("Error fetching course details:", err.message);
      setError("Failed to load course details.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getCourseDetails();
      console.log("token course :", usetoken);
    }
  }, [id]);

  if (isLoading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <div className="font-kalameh relative m-auto mt-10 mb-10 flex w-9/10 flex-col items-center justify-center">
      <Top data={courseData} />

      <div className="flex w-10/10 flex-row-reverse">
        <About data={courseData} />

        <div className="mt-10 flex w-5/10 flex-col items-center justify-center gap-10">
          <Masters data={courseData} />
          <Coursesmap data={courseData} />
        </div>
      </div>

      {/* comments */}

      <div className="mt-10 flex w-10/10 flex-col items-end gap-10">
        <CommentSection CourseId={id} data={courseData} />
        <Commentdiv courseId={id} />
      </div>
    </div>
  );
};

export { Courses };
