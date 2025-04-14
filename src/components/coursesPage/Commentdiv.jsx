import React, { useState, useEffect } from "react";
import { GetComment } from "../../core/services/api/GetCourses/Comment";

const Commentdiv = ({ courseId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchComments = async () => {
    if (!courseId) {
      console.error("Course ID is missing.");
      setError("Invalid course ID.");
      return;
    }

    setIsLoading(true); 
    setError(null); 

    try {
      const fetchedData = await GetComment(courseId); 
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
  }, [courseId]);

  return (
    <div className="rounded-4xl bg-white w-4/10 h-88 mr-9">
      <div className="border-t-2 rounded-4xl border-deep-blue">
        <span className="top-4 right-84 text-deep-blue font-bold text-2xl">Comments:</span>
        <div className="top-16 px-4 overflow-y-auto h-[300px]">
          {isLoading ? (
            <p className="text-gray-600">Loading comments...</p>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : comments.length > 0 ? (
            comments.map((comment, index) => (
              <p key={index} className="text-gray-600">
                {comment}
              </p>
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