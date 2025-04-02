import productimg from '../../assets/Coursesimage/product-img.png';
const Coursesmap = () => {
  return (
   
         <div className='absolute top-[610px] left-[-675px]  rounded-4xl bg-white w-[470px] h-[320px]'>
   
             <div className='relative  rounded-4xl bg-white w-[470px] h-[320px] '>
         
               <span className='absolute right-[40px] top-[20px] text-sky-800 font-bold text-2xl'>دوره های مشابه</span>
               <div className='absolute right-[40px] top-[70px] w-[390px] h-[60px] rounded-2xl  border-2'>
                 <img className='ml-[305px] mt-[8px] w-[70px] rounded-2xl ' src={productimg} />
                 <p className='mt-[-35px] mr-[35px]'>آموزش کاربردی RestFul API در لاراول</p>
               </div>
               
             </div>
   
         </div>
  )
}

export  {Coursesmap}