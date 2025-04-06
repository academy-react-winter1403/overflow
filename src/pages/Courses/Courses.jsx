import { About } from "../../components/coursesPage/About";
import { Masters } from "../../components/coursesPage/master";
import { Top } from "../../components/coursesPage/top";
import { Coursesmap } from "../../components/coursesPage/Courses.map";
import { CommentSection } from "../../components/coursesPage/Commentsection";
import { Commentdiv } from "../../components/coursesPage/Commentdiv";




const Courses = () => {
  return (
    <div className=" flex justify-center relative">
           
        <Top />
               
        <About />

        <Masters />

        <Coursesmap />

        <CommentSection />

        <Commentdiv />

    </div>
  );
};

export { Courses };