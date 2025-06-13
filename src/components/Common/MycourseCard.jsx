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
  const isPaid = item?.paymentStatus === "پرداخت شده";

  const HandlePaystep1 = async (values) => {
    const currentDate = new Date().toISOString();

    const formData = new FormData();
    formData.append("CourseId", item.courseId);
    formData.append("Paid", item.cost);
    formData.append("PeymentDate", currentDate);
    formData.append("PaymentInvoiceNumber", values.PaymentInvoiceNumber);

    console.log(formData);

    removeItem("paymentid");

    const response = await Step1(formData);
    if (response) {
      toast.success("ورود موفقیت‌آمیز بود");
      setStep2(true);
    }
  };
  const HandlePaystep2 = async (e) => {
    const files = e.target.files[0];
    const payid = getItem("paymentid");
    const formData = new FormData();
    formData.append("PaymentId", payid);
    formData.append("Image", files);
    console.log("formDatastep2", formData);

    const response = await Step2(formData);

    if (response) {
      toast.success("ورود موفقیت‌آمیز بود");
    }
  };

  return (
    <div
      className={`${className}w-10/10 p-5 max-sm:relative max-sm:h-auto max-sm:w-10/10`}
    >
      {/*  */}
      <div
        className="rounded-[29px relative flex h-20 w-10/10 cursor-pointer flex-row-reverse rounded-2xl bg-gray-300 hover:bg-gray-400 dark:bg-gray-500"
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

          <div className="font-iransans font-semibol w-4/10 pt-5 text-center text-xl max-xl:hidden max-xl:w-6/10 max-sm:hidden">
            {item.fullName}
          </div>

          <div className="font-iransans w-4/10 pt-5 text-center text-2xl max-lg:hidden dark:text-white">
            {new Date(item.lastUpdate).toLocaleTimeString("fa-IR")}
          </div>
          <div className="text-deep-blue flex w-4/10 justify-center truncate pt-5 text-xl font-bold max-md:w-3/10 max-md:text-sm dark:text-white">
            {Number(item.cost).toLocaleString("fa-IR")}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-10 w-10 max-md:hidden dark:text-white"
            >
              <path d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"></path>
            </svg>
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
                {!Step2 && (
                  <Formik
                    initialValues={{ PaymentInvoiceNumber: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => HandlePaystep1(values)}
                  >
                    {() => (
                      <Form className="flex h-auto w-4/10 flex-col items-center gap-5 rounded-2xl border bg-white transition-all duration-300 max-sm:w-full max-sm:scale-90 dark:bg-gray-500">
                        <h2 className="font-iransans mt-10 text-2xl font-bold">
                          مراحل پرداخت
                        </h2>
                        <div className="flex h-auto w-6/10 flex-col gap-5 rounded-2xl bg-gray-200 p-5 transition-all duration-300 hover:scale-110 max-xl:w-6/10 max-lg:w-7/10 max-md:w-9/10 dark:bg-gray-400">
                          <p className="font-iransans font-bold">
                            لطفاً اطلاعات پرداخت خود را وارد کنید.
                          </p>
                          <Field
                            type="text"
                            name="PaymentInvoiceNumber"
                            placeholder=" شناسه پرداخت"
                            className="h-10 w-full rounded-xl bg-gray-300 pr-3 text-right outline-none dark:text-gray-500"
                          />
                          <ErrorMessage
                            name="PaymentInvoiceNumber"
                            component="div"
                            className="pr-2 text-sm text-red-500"
                          />
                        </div>

                        <button
                          type="submit"
                          className="mb-3 w-1/10 rounded bg-[#436E8E] py-2 text-center font-bold text-white transition-all duration-100 hover:scale-110 max-lg:w-3/10 max-md:w-3/10"
                        >
                          ادامه
                          <ToastContainer />
                        </button>
                      </Form>
                    )}
                  </Formik>
                )}

                {Step2 && (
                  <form className="flex h-auto w-4/10 flex-col items-center gap-5 rounded-2xl border bg-white transition-all duration-300 max-sm:w-full max-sm:scale-90 dark:bg-gray-500">
                    <h2 className="font-iransans mt-10 text-2xl font-bold">
                      مراحل پرداخت
                    </h2>
                    <div className="flex h-auto w-6/10 flex-col gap-5 rounded-2xl bg-gray-200 p-5 transition-all duration-300 hover:scale-110 max-xl:w-6/10 max-lg:w-7/10 max-md:w-9/10 dark:bg-gray-400">
                      <p className="font-iransans font-bold">
                        لطفاً اطلاعات پرداخت خود را وارد کنید.
                      </p>
                      <input
                        type="file"
                        name="Image"
                        placeholder=" شناسه پرداخت"
                        className="h-10 w-full rounded-xl bg-gray-300 pr-3 text-right outline-none dark:text-gray-500"
                      />
                      <div
                        className="pr-2 text-sm text-red-500"
                        id="error-message"
                      ></div>
                    </div>

                    <button
                      type="submit"
                      className="mb-3 w-1/10 rounded bg-[#436E8E] py-2 text-center font-bold text-white transition-all duration-100 hover:scale-110 max-lg:w-3/10 max-md:w-3/10"
                    >
                      ادامه
                    </button>
                  </form>
                )}
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
