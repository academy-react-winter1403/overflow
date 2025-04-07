import { About } from "../../components/coursesPage/About";
import { Masters } from "../../components/coursesPage/master";
import { Top } from "../../components/coursesPage/top";
import { Coursesmap } from "../../components/coursesPage/Courses.map";
import { CommentSection } from "../../components/coursesPage/Commentsection";
import { Commentdiv } from "../../components/coursesPage/Commentdiv";
import { useParams } from "react-router";
import { getApi } from "../../core/services/api/getApi";
import { useEffect, useState } from "react";




const Courses = () => {

    const  {id}  = useParams();
    console.log(id)
    const [courseData, setCourseData] = useState(null);
  
    const getCourseDetails = async () => {
      const response = await getApi(
        `/Home/GetCourseDetails?CourseId=${id}`
      );
      console.log("getCourseDetails", response);
      setCourseData(response);
    };
  
    useEffect(() => {
      getCourseDetails();
    }, [id]);
  
    if (!courseData) {
      return <div>Loading...</div>;
    }
  return (
    
    <div className="border-2 flex justify-center align flex-col relative mt-10">
           
        <Top data={courseData} />
               
        <div className=" border-2 border-amber-500 flex flex-row-reverse g-10 w-10/10">
          <About data={courseData} />

          <div className="flex justify-center flex-col items-center gap-10 mt-10 w-5/10">
          <Masters  data={courseData}/>

          {/* <Coursesmap data={courseData} /> */}

        </div>

        </div>
{/* 
        <CommentSection />

        <Commentdiv /> */}

    </div>
  );
};

export { Courses };