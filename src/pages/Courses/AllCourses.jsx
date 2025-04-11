import { ErrorMessage, Field, Form, Formik } from "formik";
import Card from "../../components/Common/Card";
const AllCourse = () => {



    return (
        <div className="w-11/13 bg-gray-50 flex justify-center m-auto flex-wrap ">
            <div className="border border-black h-16 w-full mt-14 mb-14 bg-white text-right leading-14 text-3xl "> دوره ها</div>
            <div className=" border border-black w-full h-18 bg-white rounded flex justify-center"  >
                <div className=" w-15/100 h-full text-center leading-14 text-3xl text-gray-400">ارزان ترین</div>
                <div className=" w-15/100 h-full text-center leading-14 text-3xl text-gray-400">گران ترین</div>
                <div className=" w-15/100 h-full text-center leading-14 text-3xl text-gray-400">پرفروش ترین</div>
                <div className=" w-15/100 h-full text-center leading-14 text-3xl text-gray-400">جدیدترین</div>
                <div className="border-l-3 w-15/100 h-8/10 m-auto text-center leading-10 text-3xl border-gray-300">مرتب سازی</div>
                <div className="h-full w-5/100 border"></div>
                <input className="h-18 w-20/100 border border-black text-right" type="text" />


            </div>
            <img src="" alt="" />
            <div className="w-full flex border border-black mt-12 justify-center" >
                <div className="w-75/100 border berder-black h-15 mr-3     ">

                </div>
                <div className="w-25/100 border border-black  justify-items-center bg-white rounded-md " >
                    <div className=" w-8/10 h-12 mt-9 text-right text-blue-900 text-xl " >فیلتر ها </div>
                    <div className="mt-4 w-8/10 borderblack h-10 border-2 border-gray-300 rounded-md"></div>
                    <div className="mt-4 w-8/10 borderblack h-10 border-2 border-gray-300 rounded-md"></div>
                    <div className="mt-4 w-8/10 borderblack h-10 border-2 border-gray-300 rounded-md mt-4 "></div>
                    <div className="mt-4 w-8/10 borderblack h-34 border-2 border-gray-300 rounded-md mt-4 mb-11 "></div>
                </div>
            </div>
        </div>
    )
}

export { AllCourse }