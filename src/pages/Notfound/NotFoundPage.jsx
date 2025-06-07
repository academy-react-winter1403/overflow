import { useNavigate } from "react-router-dom";
import notfound from "../../assets/404notfound/404 notfound.webp";
import { useState, useEffect } from "react";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Small delay for a smoother transition
  }, []);

  return (
    <div
      className={`bg-[#2daae0] font-iransans flex h-screen flex-col items-center justify-center text-center transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={notfound}
        alt="Lost in the web"
        className="mb-6 w-5/10 rounded-lg overflow-hidden"
      />

      <div className="absolute top-170">
        <p className="mt-4 text-2xl font-iransans font-bold">صفحه مورد نظر یافت نشد!</p>
        <p className="mt-2 text-lg text-gray-600">
          آدرس وارد شده اشتباه است یا این صفحه وجود ندارد.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 rounded-lg bg-deep-blue font-iransans font-bold px-6 py-2 text-white transition-transform duration-500 hover:scale-105"
        >
          بازگشت به صفحه اصلی
        </button>
      </div>
    </div>
  );
};


export { NotFoundPage };
