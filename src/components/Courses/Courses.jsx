import { Coursesmap } from './Courses.map';
import { Master } from './master';
import { CommentSection } from './CommentSection';
import { Commentdiv } from './Commentdiv';
import About from './About';
import { Top } from './Top';



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