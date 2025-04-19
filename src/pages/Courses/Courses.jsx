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

const Courses = () => {

  const usetoken = useSelector((state) => state.token);


  const { id } = useParams(); 
  console.log("Course ID:", id);

  const [courseData, setCourseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCourseDetails = async () => {
    try {
      const response = await getApi(`/Home/GetCourseDetails?CourseId=${id}`);
      console.log("Course details fetched:", response);
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
      console.log("token :",usetoken)
    }
  }, [id]);

  if (isLoading) {
    return <div className="loading-spinner">Loading...</div>; 
  }

  if (error) {
    return <div className="text-red-600">{error}</div>; 
  }

  return (
    <div className="flex justify-center items-center align flex-col relative mt-10 mb-10 w-9/10 m-auto font-kalameh">
      <Top data={courseData} />

      <div className="flex flex-row-reverse w-10/10">
        <About data={courseData} />

        <div className="flex justify-center flex-col items-center gap-10 mt-10 w-5/10">
          <Masters data={courseData} />
          <Coursesmap data={courseData} />
        </div>
      </div>

                      {/* comments */}

      <div className="flex flex-col w-10/10 mt-10 gap-10 items-end ">
        <CommentSection CourseId={id} data={courseData} />
        <Commentdiv courseId={id} /> 
      </div>
    </div>
  );
};

export { Courses };