import { About } from "../../components/coursesPage/About";
import { Masters } from "../../components/coursesPage/master";
import { Top } from "../../components/coursesPage/top";
import { Coursesmap } from "../../components/coursesPage/Courses.map";
import { CommentSection } from "../../components/coursesPage/Commentsection";
import { Commentdiv } from "../../components/coursesPage/Commentdiv";
import { useParams } from "react-router";
import { getApi } from "../../core/services/api/getApi";
import { useEffect, useState } from "react";
import { getItem } from "../../core/services/common/storage.services";
import Comment from "../../components/Comment/Comment";
import { useGetCourseComment } from "../../core/services/api/GetCourses/Comment";

const Courses = () => {
  const usetoken = getItem("token");

  const { id } = useParams();
  console.log("Course ID:", id);

  const [courseData, setCourseData] = useState(null);
  const { data: commentsData, isLoading, error } = useGetCourseComment(id);

  const getCourseDetails = async () => {
    const response = await getApi(`/Home/GetCourseDetails?CourseId=${id}`);
    // console.log("Course details fetched:", response);
    setCourseData(response);
  };

  useEffect(() => {
    if (id) {
      getCourseDetails();
      // console.log("token course :", usetoken);
    }
  }, [id]);

  if (isLoading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
<<<<<<< HEAD
    <div className="flex justify-center items-center align flex-col relative mt-10 mb-10 w-9/10 m-auto font-kalameh transition-all duration-300">
      <Top data={courseData} />

      <div className="flex flex-row-reverse w-10/10 transition-all duration-300 border-2 border-green-500 max-lg:justify-center">
        <About data={courseData} />

        <div className="flex justify-center flex-col items-center gap-10 mt-10 w-5/10 max-lg:hidden transition-all duration-300">
=======
    <div className="font-kalameh relative m-auto mt-10 mb-10 flex w-9/10 flex-col items-center justify-center">
      <Top data={courseData} />

      <div className="flex w-10/10 flex-row-reverse">
        <About data={courseData} />

        <div className="mt-10 flex w-5/10 flex-col items-center justify-center gap-10">
>>>>>>> 73bdaa5cabcc374f93553aff8f6f04d8f563a75c
          <Masters data={courseData} />
          <Coursesmap data={courseData} />
        </div>
      </div>

      {/* comments */}

      {/* <div className="mt-10 flex w-10/10 flex-col items-end gap-10">
        <CommentSection CourseId={id} data={courseData} />
        <Commentdiv courseId={id} />
      </div> */}

      <Comment commentData={commentsData} type={"Course"} />
    </div>
  );
};

export { Courses };
