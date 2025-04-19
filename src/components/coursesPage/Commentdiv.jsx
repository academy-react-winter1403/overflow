import React, { useState, useEffect } from "react";
import { GetComment, Likecommnet, DisLikecommnet,Getreply } from "../../core/services/api/GetCourses/Comment.js";

import Like from '../../assets/Coursesimage/like.png';
import disLike from '../../assets/Coursesimage/dislike.png';
import { getItem } from "../../core/services/common/storage.services.js";


const Commentdiv = ({ courseId }) => {

  console.log("couseid::::::::::::::::::::::::",courseId);
  const [comments, setComments] = useState([]);
  const [Openreply, setOpenreply] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // State to manage button text
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
      


      const response = await Likecommnet(commentId);

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
const handleReply = async (commentId, courseId) => { // Ensure courseId is the correct variable name
  try {
    // Check if both commentId and courseId are valid
    if (!commentId || !courseId) {
      alert("CommentId or CourseId is missing. Cannot fetch replies.");
      return;
    }

    console.log("Fetching replies with:", { courseId, commentId });

    // Make the API call
    const response = await Getreply(courseId, commentId);

    console.log("Getreply API response:", response);

    // Handle response
    if (response) {
      alert("Replies fetched successfully!");
      // Process or display replies as needed (e.g., update state or UI)
    } else {
      alert("No replies found for this comment.");
    }
  } catch (err) {
    console.error("Error fetching replies:", err.message || err);
    alert("Error fetching replies. Please try again later.");
  }
};

  const handlereply = () => {
    setOpenreply(!Openreply);
    setIsExpanded((prevState) => !prevState); // Toggle text state
  };

  useEffect(() => {
    fetchComments();
  }, [id]);

  return (
    <div className="rounded-4xl bg-white w-7/11 h-88">
      <div className="border-t-2 rounded-4xl border-deep-blue">
        <span className="top-4 right-84 text-deep-blue font-bold text-2xl">Comments:</span>
        <div className="overflow-y-auto h-80 flex flex-col gap-5 ">
          {isLoading ? (
            <p className="text-gray-600">Loading comments...</p>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="pl-2 text-right flex flex-col-reverse items-end justify-end border-b-2 border-gray-300 ">
                <div className="flex flex-col w-10/10 h-auto">
                  {/* Existing Comment Div */}
                  <div className="flex flex-row w-10/10 ">
                    <div className="flex flex-col w-2/10 gap-20 h-full text-left">
                      <div className="flex flex-row">{comment.insertDate.slice(0, 10)}<br />{comment.insertDate.slice(11, 19)}</div>
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
                      <div className="h-6/10"></div>
                    </div>
                  </div>

                  {/* New Reply Div */}
                  {Openreply && (
                    <div className="flex flex-row w-10/10">
                      <div className="flex flex-col w-full mt-5 gap-5 border-t-2 border-gray-300">
                        <textarea
                          className="w-full h-20 border border-gray-300 rounded-lg p-2 text-right"
                          placeholder="Write your reply here..."
                        ></textarea>
                        <button
                          className="flex items-center justify-center bg-gray-300 rounded-3xl p-2 w-1/10 text-xs"
                        >
                          Submit Reply
                        </button>
                      </div>
                    </div>
                  )}

                      <div className="gap-3 flex flex-row h-10/10">
                        <button

                          onClick={handlereply}
                          className="mt-1 mb-1 border w-1/10 h-7/10 rounded-3xl bg-deep-blue text-white font-bold transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700"
                        >
                          {isExpanded ? "مشاهده کمتر" : "مشاهده بیشتر"}
                        </button> 
                                 
                        <button

                          onClick={handleReply}
                          className="mt-1 mb-1 border w-1/10 h-7/10 rounded-3xl bg-deep-blue text-white font-bold transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700"
                        >
                          {isExpanded ? " کمتر" : " بیشتر"}
                        </button>

                      </div>
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