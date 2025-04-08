
import productimg from '../../assets/Coursesimage/product-img.png';


const Coursesmap = ({data}) => {

const courseData = data || {};
console.log("courseData",courseData)

  return (
    <div className="rounded-4xl  bg-white w-9/10 h-5/10 mr-13 overflow-auto">

      <div className="flex text-right flex-col h-auto">

        <span className=" mt-3 mr-6 text-sky-800 font-bold text-2xl ">دوره های مشابه</span>

        <div className=' flex flex-row flex-wrap justify-end'>
          
          <div className='flex flex-row-reverse border border-gary-300 mt-5 mr-5 rounded-3xl h-13 w-9/10 '>
            <img className='w-18 rounded-3xl m-2 ' src={productimg} />
            <p className='mt-3'>sadasdasdADsdaklfjhakfhDFKFH</p>
          </div>         

        </div>

      </div>



    </div>
  );
};

export { Coursesmap };