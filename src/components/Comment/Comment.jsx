import React, { useState } from "react";
import user from "../../assets/Header/user.png";
import ReplyComment from "./ReplyComment.jsx";
import {
  GetComment,
  Likecommnet,
  DisLikecommnet,
  Getreply,
  Sendreply,
} from "../../core/services/api/GetCourses/Comment.js";
import Like from "../../assets/Coursesimage/like.png";
import disLike from "../../assets/Coursesimage/dislike.png";
import { getItem } from "../../core/services/common/storage.services.js";

const Comment = ({ commentData, id, commentsCount }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("commentData", commentData);
  const handelLike=


  return (
    <div className="w-full">
      <h3 className="text-deep-blue m-4 text-2xl font-bold">Comments:</h3>
      <div className="font-normal text-gray-500">
        {isLoading ? (
          <p>Loading comments...</p>
        ) : error ? (
          <p>{error}</p>
        ) : commentData.length > 0 ? (
          commentData.map((comment) => (
            <div
              className="relative mb-5 min-h-45 rounded-2xl bg-white/55 p-2"
              key={comment.id}
            >
              <div className="relative flex flex-row-reverse justify-between">
                <div className="h-full w-24 space-y-3 py-2">
                  <img
                    className="rounded-full bg-gray-500"
                    src={comment.pictureAddress || user}
                    alt="Author"
                  />
                  <p>{comment.author || "کاربر"}</p>
                </div>

                <div className="m-3 grow-5 p-2 text-right">
                  <p className="text-lg font-bold">{comment.title}</p>
                  <p>{comment.describe}</p>
                </div>

                <p className="absolute top-2 left-3">
                  {new Date(comment.inserDate).toLocaleDateString("fa-IR")}
                </p>
              </div>

              <div className="relative mx-3 flex items-center justify-between">
                <div className="flex gap-3">
                  <button 
                  className="bg-deep-blue/25 hover:bg-deep-blue/55 flex cursor-pointer rounded-xl p-1 transition-all hover:scale-110">
                    <img src={Like} alt="Like" className="inline-block" />
                    <p className="p-1">
                      {comment.likeCount > 0 ? comment.likeCount : ""}
                    </p>
                  </button>
                  <button className="bg-deep-blue/25 hover:bg-deep-blue/55 flex cursor-pointer rounded-xl p-1 transition-all hover:scale-110">
                    <img src={disLike} alt="Dislike" />
                    <p className="p-1">
                      {comment.dissLikeCount > 0 ? comment.dissLikeCount : ""}
                    </p>
                  </button>
                </div>

                <>
                <ReplyComment commentId={comment.id} />
                  
                </>
              </div>
            </div>
          ))
        ) : (
          <p>No comments available.</p>
        )}
      </div>
    </div>
  );
};

export default Comment;
