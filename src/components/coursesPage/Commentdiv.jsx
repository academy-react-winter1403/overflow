import React, { useState, useEffect } from "react";
import { GetComment, Likecommnet, DisLikecommnet } from "../../core/services/api/GetCourses/Comment.js";

import Like from '../../assets/Coursesimage/like.png';
import disLike from '../../assets/Coursesimage/dislike.png';

const Commentdiv = ({ courseId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [id, setid] = useState(courseId);

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

  const handleLike = async (commentId) => {
    try {
      const token = "your-authentication-token"; // Replace with your actual token
      const response = await Likecommnet(commentId, token);

      console.log("API response:", response);

      if (response && response.success) {
        console.log("Like submitted successfully:", response);
        await fetchComments();
      } else {
        alert("Failed to submit like: Invalid response format.");
      }
    } catch (err) {
      alert("Error submitting like:", err.message || err);
    }
  };

  const handleDislike = async (commentId) => {
    try {
      const token = "your-authentication-token"; 
      const response = await DisLikecommnet(commentId, token);

      console.log("API response:", response);

      if (response && response.success) {
        console.log("Dislike submitted successfully:", response);
        await fetchComments();
      } else {
        alert("Failed to submit dislike: Invalid response format.");
      }
    } catch (err) {
      alert("Error submitting dislike:", err.message || err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [id]);

  return (
    <div className="rounded-4xl bg-white w-7/11 h-88">
      <div className="border-t-2 rounded-4xl border-deep-blue">
        <span className="top-4 right-84 text-deep-blue font-bold text-2xl">Comments:</span>
        <div className="overflow-y-auto h-80 flex flex-col gap-5">
          {isLoading ? (
            <p className="text-gray-600">Loading comments...</p>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="pl-2 h-80 text-right flex flex-row items-end justify-end border-b-2 border-gray-300">
                <div className="flex flex-col w-2/10 gap-20 h-full">
                  <div className="flex flex-row">{comment.insertDate}</div>
                  <div className="flex flex-row gap-5 pb-5">
                    <button
                      onClick={() => handleLike(comment.id)}
                      className="text-2xl flex flex-row items-center justify-center w-3/10 bg-gray-300 rounded-3xl"
                    >
                      <img src={Like} alt="Like" />
                      <p>{comment.likeCount}</p>
                    </button>
                    <button
                      onClick={() => handleDislike(comment.id)}
                      className="text-2xl flex flex-row items-center justify-center bg-gray-300 rounded-3xl w-3/10"
                    >
                      <img src={disLike} alt="Dislike" />
                      <p>{comment.disslikeCount}</p>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col w-8/10 justify-end h-full gap-2">
                  <p className="pr-5 text-2xl font-bold">{comment.title}</p>
                  <p className="flex flex-row justify-end pr-5 text-2xl">{comment.author}</p>
                  <p className="text-gray-600 h-20 pr-5 pt-3 text-right">{comment.describe}</p>
                </div>
                <div className="w-1/10 flex flex-col h-full">
                  <img className="w-full h-7/10 rounded-full" src={comment.pictureAddress} alt="Author" />
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