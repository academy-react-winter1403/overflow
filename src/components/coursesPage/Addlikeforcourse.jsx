import Like from "../../assets/Coursesimage/icons8-facebook-like-48.png";
// import Dislike from "../../assets/Coursesimage/dislike.png";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import {
  Addlikecourse,
  Adddislikecourse,
} from "../../core/services/api/GetCourses/Comment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router";
import { Addtofave } from "../../core/services/api/GetCourses/addtofave";
import addtofave from "../../assets/Coursesimage/icons8-add-to-favorites-482.png";

const Addlikeforcourse = ({ data, courseData }) => {
  // console.log("courseid:::::::::;", data);
  const [rating, setRating] = useState(0);
  // const [like, setLike] = useState([]);
  // const [dislike, setDislike] = useState([]);

  console.log(courseData);

  const addtofavorite = async () => {
    try {
      const response = await Addtofave(data);
      if (response) {
        toast.success("   به علاقمندی ها اضافه شد    ");
        Navigate(`/AllCourses/Courses/${data}`);
      }
      console.log("Reserve Response:", response);
    } catch (error) {
      console.error("Error reserving course:", error);
    }
  };
  const likecourse = async () => {
    const response = await Addlikecourse(data);

    if (response) {
      toast.success(" شما دوره را لایک کردید ");
      Navigate(
        `AllCourses/Courses/e6a4b34e-c88f-ef11-b6e6-82fc07f68400${data}`,
      );
    }

    console.log("Like response:", response);
    // setLike(response);
  };

  const dislikecourse = async () => {
    const response = await Adddislikecourse(data);

    if (response) {
      toast.success(" شما دوره را دیسلایک کردید");
      Navigate(
        `AllCourses/Courses/e6a4b34e-c88f-ef11-b6e6-82fc07f68400${data}`,
      );
    }

    console.log("Dislike response:", response);
    // setDislike(response);
  };

  return (
    <div className="font-iransans flex h-20 w-7/14 flex-row-reverse items-center gap-95 rounded-2xl border bg-white pr-5 text-3xl font-bold transition-all duration-300 max-2xl:gap-50 max-xl:gap-50 max-lg:w-10/10 max-sm:gap-25 dark:bg-gray-700">
      <div className="flex flex-row-reverse items-center gap-5 max-sm:hidden">
        <p>امتیاز</p>
        <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
      </div>
      <p className="sm:hidden">امتیاز</p>
      <div className="ml-5 flex flex-row items-center gap-5">
        <button
          className="w-10 shrink-0 pb-2 transition-all duration-300 hover:scale-130 max-sm:w-8"
          onClick={addtofavorite}
        >
          <img src={addtofave} />
          <ToastContainer />
        </button>

        <button
          onClick={likecourse}
          className="flex shrink-0 flex-row items-center text-2xl max-sm:h-6 max-sm:w-10"
        >
          <ToastContainer />
          <img
            className={`h-8 w-12 transition-all hover:scale-130 ${courseData.currentUserLike == "1" ? "bg-amber-400" : ""} duration-300`}
            src={Like}
          />
          {/* {courseData.currentUserLike? Like : Dislike } */}
        </button>

        <button
          onClick={dislikecourse}
          className="flex shrink-0 flex-row items-center text-2xl max-sm:h-6 max-sm:w-10"
        >
          <ToastContainer />
          <img
            className="h-8 w-12 rotate-180 transition-all duration-300 hover:scale-130"
            src={Like}
          />
        </button>
      </div>
    </div>
  );
};

export { Addlikeforcourse };
