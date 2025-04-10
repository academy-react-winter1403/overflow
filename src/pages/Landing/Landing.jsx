import { Hero, NewCourses, News, BestSellers, Services, SiteStats, CourseCategories } from '../../components/Landing';
import Footer from '../Layout/Footer';

function Landing() {
  return (
    <>
      <div className=" gap-8 flex flex-col text-black dark:bg-gray-900 dark:text-white duration-200 align-center ">
        <Hero/>
        <NewCourses />
        <News />
        <BestSellers />
        <Services />
        <SiteStats />
        <CourseCategories />
        <Footer />
      </div>
    </>
  );
}

export default Landing;
