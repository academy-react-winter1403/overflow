import { Hero, NewCourses, News, BestSellers, Services, SiteStats, CourseCategories } from '../../components/Landing';

function Landing() {
  return (
    <>
      <div className=" gap-8 flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white duration-200 align-center ">
        {/* <Hero/> */}
        {/* <NewCourses /> */}
        <News />
        {/* <BestSellers /> */}
        {/* <Services /> */}
        {/* <SiteStats /> */}
        {/* <CourseCategories /> */}
      </div>
    </>
  );
}

export default Landing;
