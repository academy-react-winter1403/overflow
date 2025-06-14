import { useState, useEffect } from "react";
import { Mynewscomment } from "../../core/services/api/userpanelapi/panelapis";

const Mynewssetcomment = () => {
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMycomment = async () => {
    try {
      const response = await Mynewscomment();

      setComment(response.myNewsCommetDtos);
    } catch (err) {
      console.error("Error fetching comment:", err);
      setError("Failed to load comments.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMycomment();
  }, []);

  return (
    <>
      <h2 className="text-deep-blue mt-5 mb-4 text-center text-3xl font-semibold">
        نظر دوره
      </h2>

      <div className="flex h-auto w-10/10 flex-col space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700">
        <div className="border-deep-blue m-auto flex w-10/10 flex-row-reverse justify-center border-b-2 max-sm:hidden">
          <p className="font-iransans w-2/10 truncate pt-5 font-bold max-lg:w-4/10">
            عنوان دوره
          </p>
          <p className="font-iransans w-2/10 truncate pt-5 font-bold max-lg:w-4/10">
            عنوان
          </p>
          <p className="font-iransans w-2/10 truncate pt-5 font-bold max-lg:w-4/10">
            توضیحات
          </p>
          <p className="font-iransans w-1/10 truncate pt-5 text-left font-bold max-lg:hidden">
            تعداد لایک‌ها
          </p>
          <p className="font-iransans w-1/10 truncate pt-5 text-left font-bold transition-all duration-300 max-xl:w-2/10 max-xl:text-center max-lg:hidden">
            تعداد دیسلایک‌ها
          </p>
          <p className="font-iransans w-1/10 truncate pt-5 text-left font-bold max-xl:hidden max-lg:hidden">
            تعداد پاسخ‌ها
          </p>
        </div>
        <div className="h-145 overflow-auto p-5">
          {" "}
          {loading ? (
            <div className="text-center text-gray-500">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : comment ? (
            typeof comment === "string" ? (
              <p className="text-gray-800">{comment}</p>
            ) : Array.isArray(comment) ? (
              comment?.length > 0 ? (
                comment?.map((c, index) => (
                  <div
                    key={index}
                    className="mb-2 flex h-18 w-10/10 flex-row-reverse gap-5 rounded-2xl bg-gray-300 pr-10 text-gray-800 transition-all duration-300 hover:bg-gray-400 max-sm:h-50 max-sm:flex-col max-sm:w-full  max-sm:items-center max-sm:pr-0 dark:bg-gray-500"
                  >
                    <p className="max-sm:scale-90 max-sm:pt-2 font-iransans w-2/10 truncate  pt-5 font-bold transition-all duration-300 max-lg:w-4/10 max-sm:flex max-sm:w-full max-sm:flex-row max-sm:justify-end max-sm:gap-5">
                      {c.courseTitle}
                      <p className="w-3/10 border-l-2 p-2 sm:hidden">عنوان دوره</p>
                    </p>
                    <p className="max-sm:scale-90 max-sm:pt-2 font-iransans w-2/10 truncate  pt-5 font-bold transition-all duration-300 max-lg:w-3/10 max-sm:flex max-sm:w-full max-sm:flex-row max-sm:justify-end max-sm:gap-5">
                      {c.title}
                      <p className="w-3/10 border-l-2 p-2 sm:hidden">عنوان</p>
                    </p>
                    <p className="max-sm:scale-90 max-sm:pt-2 font-iransans w-2/10 truncate  pt-5 font-bold transition-all duration-300 max-lg:w-4/10 max-sm:flex max-sm:w-full max-sm:flex-row max-sm:justify-end max-sm:gap-5">
                      {c.describe}
                      <p className="w-3/10 border-l-2 p-2 sm:hidden">
                        توضیحات
                      </p>
                    </p>
                    <p className="font-iransans w-1/10 truncate pt-5 font-bold max-lg:hidden">
                      {c.likeCount}
                    </p>
                    <p className="font-iransans w-1/10 truncate pt-5 font-bold transition-all duration-300 max-xl:w-2/10 max-lg:hidden">
                      {c.dislikeCount}
                    </p>
                    <p className="font-iransans w-1/10 truncate pt-5 font-bold max-xl:hidden max-lg:hidden">
                      {c.replyCount}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500">
                  {" "}
                  کامنتی وجود ندارد{" "}
                </div>
              )
            ) : (
              <pre className="text-gray-700">
                {JSON.stringify(comment, null, 2)}
              </pre>
            )
          ) : (
            <div className="text-center text-gray-500"> کامنتی وجود ندارد </div>
          )}
        </div>
      </div>
    </>
  );
};

export { Mynewssetcomment };
