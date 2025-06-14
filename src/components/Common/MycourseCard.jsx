import * as Yup from "yup";
import SmartImage from "./SmartImage";
import fallbackcourse from "../../assets/Coursesimage/product-img.png";
import pay from "../../assets/userpanel/icons8-cash-in-hand-32.png";
import { useState } from "react";
import { Step1 } from "../../core/services/api/payment/Paymentstep1";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Close from "../../assets/userpanel/icons8-exit-48.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getItem,
  removeItem,
} from "../../core/services/common/storage.services";

function MycourseCard({ item, index, className = "" }) {
  const validationSchema = Yup.object({
    PaymentInvoiceNumber: Yup.string().required("شماره ضروری است"),
  });

  const [isOpen, setIsOpen] = useState(false);
  const [Step2, setStep2] = useState(false);
  const [retrievedImage, setRetrievedImage] = useState(null);
  const isPaid = item?.paymentStatus === "پرداخت شده";

  // Step 1: Handle Payment Submission & Fetch Image
  const HandlePaystep1 = async (values) => {
    const currentDate = new Date().toISOString();
    const formData = new FormData();
    formData.append("CourseId", item.courseId);
    formData.append("Paid", item.cost);
    formData.append("PeymentDate", currentDate);
    formData.append("PaymentInvoiceNumber", values.PaymentInvoiceNumber);

    console.log("Step 1 FormData:", formData);
    removeItem("paymentid");

    const response = await Step1(formData);
    if (response) {
      toast.success("پرداخت با موفقیت ثبت شد!");
      setStep2(true);
      fetchInvoiceImage(values.PaymentInvoiceNumber);
    }
  };

  // Step 2: Fetch the Invoice Image
  const fetchInvoiceImage = async (invoiceNumber) => {
    try {
      const response = await fetch(`/api/payment/image/${invoiceNumber}`);
      const data = await response.blob();
      setRetrievedImage(URL.createObjectURL(data));
      toast.success("تصویر پرداخت دریافت شد!");
    } catch (error) {
      console.error("Error fetching image:", error);
      toast.error("خطا در دریافت تصویر.");
    }
  };

  // Step 3: Upload the Image
  const HandlePaystep2 = async (e) => {
    const files = e.target.files[0];
    const payid = getItem("paymentid");
    const formData = new FormData();
    formData.append("PaymentId", payid);
    formData.append("Image", files);

    console.log("Step 2 FormData:", formData);
    const response = await Step2(formData);
    if (response) {
      toast.success("تصویر با موفقیت بارگذاری شد.");
    }
  };

  return (
    <div
      className={`${className} w-10/10 p-5 max-sm:relative max-sm:h-auto max-sm:w-10/10`}
    >
      <div
        className="relative flex h-20 w-10/10 cursor-pointer flex-row-reverse rounded-[29px] bg-gray-300 hover:bg-gray-400 dark:bg-gray-500"
        key={index}
      >
        <div>
          <SmartImage
            src={item?.tumbImageAddress}
            fallback={fallbackcourse}
            alt={item.title}
            className="mt-3 mr-5 h-13 w-13 rounded-full"
          />
        </div>

        {/* Description */}
        <div className="flex w-9/10 flex-row-reverse text-right">
          <h3 className="font-iransans h-full w-4/10 truncate pt-5 text-center text-xl font-bold text-gray-600 max-md:text-sm max-sm:h-10 max-sm:pr-3 max-sm:text-xs dark:text-white">
            {item.courseTitle}
          </h3>

          <div className="font-iransans w-4/10 pt-5 text-center text-xl max-xl:hidden max-sm:hidden">
            {item.fullName}
          </div>

          <div className="font-iransans w-4/10 pt-5 text-center text-2xl max-lg:hidden dark:text-white">
            {new Date(item.lastUpdate).toLocaleTimeString("fa-IR")}
          </div>

          <div className="flex w-4/10 justify-center truncate pt-5 text-xl font-bold max-md:w-3/10 max-md:text-sm dark:text-white">
            {Number(item.cost).toLocaleString("fa-IR")}
          </div>

          <div className="mt-3 w-1/10">
            <button
              onClick={() => {
                if (!isPaid) setIsOpen(true);
              }}
              className={`h-auto w-10/10 rounded border font-bold text-black transition-all duration-300 ${
                isPaid
                  ? "cursor-not-allowed bg-gray-400 opacity-50"
                  : "bg-[#436E8E]"
              }`}
              disabled={isPaid}
            >
              {isPaid ? "پرداخت شده" : <img src={pay} />}
            </button>

            {isOpen && (
              <div className="bg-opacity-50 fixed inset-0 z-50 flex flex-col-reverse items-center justify-end pt-40 backdrop-blur-sm">
                <Formik
                  initialValues={{ PaymentInvoiceNumber: "", Image: null }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => HandlePaystep1(values)}
                >
                  {() => (
                    <Form className="flex h-auto w-4/10 flex-col items-center gap-5 rounded-2xl border bg-white transition-all duration-300 max-sm:w-full max-sm:scale-90 dark:bg-gray-500">
                      <h2 className="font-iransans mt-10 text-2xl font-bold">
                        مراحل پرداخت
                      </h2>
                      <div className="dur flex h-auto w-6/10 flex-col gap-5 rounded-2xl bg-gray-200 p-5 transition-all duration-300 hover:scale-110 max-xl:w-6/10 max-lg:w-7/10 max-md:w-9/10 dark:bg-gray-400">
                        <p className="font-iransans font-bold">
                          لطفاً اطلاعات پرداخت خود را وارد کنید.
                        </p>
                        <Field
                          type="text"
                          name="PaymentInvoiceNumber"
                          placeholder="شناسه پرداخت"
                          className="h-10 w-full rounded-xl bg-gray-300 pr-3 text-right outline-none dark:text-gray-500"
                        />
                        <ErrorMessage
                          name="PaymentInvoiceNumber"
                          component="div"
                          className="pr-2 text-sm text-red-500"
                        />
                      </div>

                      {retrievedImage && (
                        <>
                          <img src={retrievedImage} alt="Invoice" />
                          <a href={retrievedImage} download="invoice_image.jpg">
                            <button>دانلود تصویر</button>
                          </a>
                        </>
                      )}

                      {Step2 && <input type="file" onChange={HandlePaystep2} />}
                      <button
                        type="submit"
                        className="mb-3 w-1/10 rounded bg-[#436E8E] py-2 text-center font-bold text-white transition-all duration-100 hover:scale-110"
                      >
                        ادامه
                      </button>
                    </Form>
                  )}
                </Formik>

                <button
                  onClick={() => setIsOpen(false)}
                  className="font-iransans mt-4 mb-3 flex w-4/10 flex-row justify-end rounded px-4 py-2 text-xl font-bold text-white"
                >
                  <img
                    className="transition-all duration-100 hover:scale-120"
                    src={Close}
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MycourseCard;
