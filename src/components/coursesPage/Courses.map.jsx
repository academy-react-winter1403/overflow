
import productimg from '../../assets/Coursesimage/product-img.png';


const Coursesmap = ({data}) => {

const courseData = data || {};
console.log("courseData",courseData)

  return (
    <div className=" top-[610px] left-[-675px] rounded-4xl bg-white w-[470px] h-[320px]">
      <div className="relative rounded-4xl bg-white w-[470px] h-[320px]">
        <span className=" right-[40px] top-[20px] text-sky-800 font-bold text-2xl">دوره های مشابه</span>
        {courseData.length > 0 ? (
          courseData.map((courseData, index) => (
            <div
              key={index}
              className=" right-[40px] top-[70px] w-[390px] h-[60px] rounded-2xl border-2"
            >
              <img
                className="ml-[305px] mt-[8px] w-[70px] rounded-2xl"
                src={courseData.image || productimg}
                alt={courseData.title}
              />
              <p className="mt-[-35px] mr-[35px]">{courseData.title}</p>
            </div>
          ))
        ) : (
          <p className=" right-[40px] top-[70px] text-gray-500">هیچ دوره‌ای یافت نشد</p>
        )}
      </div>
    </div>
  );
};

export { Coursesmap };