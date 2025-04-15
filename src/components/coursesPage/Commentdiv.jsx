import React, { useState, useEffect } from "react";
import { GetComment } from "../../core/services/api/GetCourses/Comment";

const Commentdiv = ({ courseId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [id, setid] = useState(courseId)
  const fetchComments = async () => {
    if (!id) {
      console.error("Course ID is missing.");
      setError("Invalid course ID.");
      return;
    }

    setIsLoading(true); 
    setError(null); 

    try {
      const fetchedData = await GetComment(id); 
      if (fetchedData) {
        console.log("Fetched comments:", fetchedData);
        setComments(fetchedData);
      } else {
        console.log("No comments fetched.");
        setComments([]);
      }
    } catch (err) {
      console.error("Error fetching comments:", err.message || err);
      setError("Failed to load comments.");
    } finally {
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    fetchComments(); 
  }, [id]);

  return (
    <div className="rounded-4xl bg-white w-7/11 h-88">
      <div className="border-t-2 rounded-4xl border-deep-blue">
        <span className="top-4 right-84 text-deep-blue font-bold text-2xl">Comments:</span>
        <div className=" overflow-y-auto h-[300px] border-2 border-red-500 flex flex-col gap-5">
          {isLoading ? (
            <p className="text-gray-600">Loading comments...</p>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : comments.length > 0 ? (
            comments.map((comment, index) => (

              <div className="h-20 text-right border flex flex-row items-end justify-end">

                <div className="border-2 border-amber-600">
                  {comment.insertDate}
                </div>

                <p key={index} className="text-gray-600 h-20 pr-10 pt-10">
                  {comment.describe}
                </p>

                <div className="w-1/10 border-2 border-red-500">
                  <img className="w-8/10 rounded-4xl ml-2" src={comment.pictureAddress} />
                </div>


              </div>

            ))
          ) : (
            <p className="text-gray-600">No comments available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export { Commentdiv };