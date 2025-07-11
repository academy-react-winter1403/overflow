import Like from "../../assets/Coursesimage/like.png";
import Dislike from "../../assets/Coursesimage/dislike.png";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import { Addlikecourse, Adddislikecourse } from "../../core/services/api/GetCourses/Comment";

const Addlikeforcourse = ({ data }) => {
  console.log("courseid:::::::::;", data);
  const [rating, setRating] = useState(0);
  const [like, setLike] = useState([]);
  const [dislike, setDislike] = useState([]);

  const likecourse = async () => {
    const response = await Addlikecourse(data);
    console.log("Like response:", response);
    setLike(response);
  };

  const dislikecourse = async () => {
    const response = await Adddislikecourse(data); // Correct API call
    console.log("Dislike response:", response);
    setDislike(response);
  };

  return (
    <div className="font-kalameh flex h-20 w-7/14 flex-row-reverse items-center gap-95 rounded-2xl bg-white pr-5 text-3xl font-bold transition-all duration-300 max-lg:w-10/10 dark:bg-gray-700">
      <div className="flex flex-row-reverse items-center gap-5">
        <p>امتیاز</p>
        <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
      </div>

      <div className="flex flex-row gap-5">
        <button onClick={likecourse} className="flex flex-row items-center text-2xl">
          <img className="h-10 w-10" src={Like} />
        </button>
        
        <button onClick={dislikecourse} className="flex flex-row items-center text-2xl">
          <img className="h-10 w-10" src={Dislike} />
        </button>
      </div>
    </div>
  );
};

export { Addlikeforcourse };