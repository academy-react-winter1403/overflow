import { Link } from 'react-router';
import productimg from '../../assets/Coursesimage/product-img.png';
import { Field, Formik, Form } from 'formik';

const Courses = () => {
  return (
    <div className="flex justify-center relative">

      <div className="absolute top-[-250px] w-[1350px] h-[450px] bg-gray-900 rounded-2xl">
        <h2 className="absolute top-[100px] right-[100px] text-amber-50 text-3xl">
          آموزش کاربردی RestFul API در لاراول
        </h2>
        <p className="absolute top-[170px] right-[100px] text-amber-50 w-[450px] h-[53px] text-right text-xs">
          در دوره آموزشی RESTful API در لاراول شیوه پیاده‌سازی REST API در پروژه‌های
          لاراولی را به صورت عملی و کاربردی (براساس نیاز بازار کار) یاد خواهید گرفت.
        </p>
        <div className="absolute left-[-35px] top-[50px] w-[580px] h-[307px]">
          <img src={productimg} alt="Product" />
        </div>
        <div className="absolute top-[300px] right-[100px] text-amber-50 w-[285px] h-[79px] font-bold text-2xl leading-17 rounded-3xl bg-cyan-800">

            <Link to='/'>
            خرید نقدی دوره
            </Link>

        </div>
        <span className="absolute top-[300px] right-[450px] text-left leading-17 font-bold text-2xl w-[285px] h-[79px] text-amber-50">
          ۷۹۰.۰۰۰ تومان
        </span>
      </div>

      {/* Comments Section */}
      <div className="absolute top-[980px] right-[-674px] w-[830px] h-[350px] bg-white rounded-2xl">
        <h5 className="absolute top-[30px] right-[100px] text-3xl font-bold text-sky-800">
          نظرات
        </h5>
        <Formik initialValues={{ feedback: '' }}>
          {() => (
            <Form>
              <div className="absolute top-[90px] right-[100px] w-[630px] h-[170px]">
                <Field
                  as="textarea"
                  name="feedback"
                  className="w-full h-full border-2 rounded-2xl text-right p-2"
                  placeholder="نظر خود را بنویسید..."
                />
              </div>
              <button
                type="submit"
                className="absolute top-[280px] right-[100px] border-2 rounded-2xl bg-sky-800 w-[147px] h-[52px] text-amber-50 leading-11"
              >
                ارسال نظر
              </button>
            </Form>
          )}
        </Formik>
        <div className="absolute top-[320px] right-[100px] w-[630px]">
          <h5 className="text-2xl font-bold text-sky-800">لیست نظرات</h5>
        </div>
      </div>
    </div>
  );
};

export { Courses };