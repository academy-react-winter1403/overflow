import leftimg from "../../assets/ep/Path 3.png";
import Locationicon from "../../assets/ep/Image 2.png";
import map from "../../assets/ep/map.png";
import line from "../../assets/ep/Path 22.png";
import { Field, Formik } from "formik";
import { Form } from "react-router";
import Footer from "../../pages/Layout/Footer";

const Idk = () => {
    return (
    <div className="relative mt-20 flex h-150 w-10/10 flex-col ">
        <img className="absolute left-[-450px]" src={leftimg} />
        <img className="absolute top-100 left-380" src={Locationicon} />
        <img className="absolute top-130 left-348" src={line} />

        <div className="z-20 m-auto flex h-150 w-5/10 flex-col items-center justify-center transition-all duration-300 max-xl:w-8/10">
        <div className="text-deep-blue mb-5 ml-110 h-15 w-5/10 text-4xl font-bold transition-all duration-300 max-md:text-2xl max-md:ml-0 max-sm:text-xl max-sm:w-10/10 ">
            انتقادها و پیشنهادات
        </div>

        <div className="flex h-100 w-8/10 flex-row rounded-4xl bg-white max-sm:relative ">
            <Formik initialValues={{ gmail: "" }}>
            <Form className=" max-m:w-10/10 flex w-10/10 flex-col gap-5 rounded-4xl bg-white pt-15 dark:bg-gray-400 max-sm:absolute  ">
                <Field
                type="text"
                name="gmail"
                placeholder=" ایمل"
                className=" max-md:ml-[0px] max-md:scale-90 ml-[-50px] h-15 w-8/10 rounded-3xl border-2 border-gray-300 bg-white pr-5 text-right outline-0 transition-all duration-300 max-md:w-10/10 dark:border-gray-400 dark:bg-gray-800 dark:text-white"
                />

                <Field
                type="text"
                name="text"
                placeholder=" متن پیام"
                className="max-md:ml-[0px] max-md:scale-90 ml-50 h-50 w-8/10 rounded-3xl border-2 border-gray-300 bg-white pr-5 text-right outline-0 transition-all duration-300 max-md:w-10/10 dark:border-gray-400 dark:bg-gray-800 dark:text-white"
                />
            </Form>
            </Formik>
        </div>

        <button className="bg-deep-blue absolute top-127 mt-[-50px] h-13 w-1/10 rounded-3xl font-bold text-white transition-all duration-300 max-lg:w-3/10 max-sm:w-2/10 max-sm:text-sm">
            ارسال پیام
        </button>
        </div>

        <div className="z-20 m-auto mt-50 flex w-7/10 flex-col gap-10 max-sm:mt-20 ">
        <p className="text-deep-blue m-auto text-right text-4xl font-bold max-sm:text-2xl">
            یه سر بیا پیشمون
        </p>
        <img src={map} />
        <span className="text-deep-blue mb-150 text-center text-2xl font-bold max-sm:text-sm max-sm:mb-0" >
            ما در شهرستان ساری بلوار خزر و پژوهشگاه دکتر بحرالعلومی منتظر حضور گرم
            شما دوستان عزیزمون هستیم
        </span>
        </div>

        <Footer />
    </div>
    );
};

export { Idk };
