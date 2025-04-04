import About from "../../components/coursesPage/About";
import { Commentdiv } from "../../components/coursesPage/Commentdiv";
import { CommentSection } from "../../components/coursesPage/Commentsection";
import { Coursesmap } from "../../components/coursesPage/Courses.map";
import { Master } from "../../components/coursesPage/master";
import { Top } from "../../components/coursesPage/top";




const Courses = () => {
  return (
    <div className="flex justify-center relative">
           
        <Top />
               
        <About />

        <Master />

        <Coursesmap />

        <CommentSection />

        <Commentdiv />

    </div>
  );
};

export { Courses };