import React, { useState, useEffect } from "react";
import user from "../../assets/Header/user.png";

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
  const [Openreply, setOpenreply] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // State to manage button text
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("commentData", commentData);

  return (
    <div className=" w-full">
      <span>Comments:</span>
      <div className="text-gray-500 font-normal ">
        {isLoading ? (
          <p>Loading comments...</p>
        ) : error ? (
          <p>{error}</p>
        ) : commentData.length > 0 ? (
          commentData.map((comment) => (
            <div
              className="relative p-2 mb-5 bg-white/55  rounded-2xl min-h-45"
              key={comment.id}
            >
              <div className=" flex flex-row-reverse relative justify-between ">
                <div className="space-y-3 py-2 h-full w-24">
                  <img
                    className="bg-gray-500 rounded-full"
                    src={comment.pictureAddress || user}
                    alt="Author"
                  />
                  <p>{comment.author || "کاربر"}</p>

                  <div></div>
                </div>

                <div className="text-right p-2 m-3 grow-5 ">
                  <p className="font-bold text-lg">{comment.title}</p>
                  <p>{comment.describe}</p>
                </div>

                <p className="absolute top-2 left-3">
                  {new Date(comment.inserDate).toLocaleDateString("fa-IR")}
                </p>
              </div>

              <div className="relative mx-3 flex items-center justify-between">
                <div className="flex gap-3 ">
                  <button className="flex p-1 bg-deep-blue/25 rounded-xl cursor-pointer hover:bg-deep-blue/55 hover:scale-110 transition-all">
                    <img src={Like} alt="Like" className="inline-block" />
                    <p>{comment.likeCount > 0 ? comment.likeCount : ""}</p>
                  </button>
                  <button className="flex p-1 bg-deep-blue/25 rounded-xl cursor-pointer hover:bg-deep-blue/55 hover:scale-110 transition-all">
                    <img src={disLike} alt="Dislike" />
                    <p>
                      {comment.disslikeCount > 0 ? comment.disslikeCount : ""}
                    </p>
                  </button>
                </div>
                <div className=" bg-gray-100 rounded-xl p-2  ">
                  <div >
                    <button className="bg-deep-blue/10 pb-1 hover:text-black px-2 rounded-xl cursor-pointer">
                      ثبت پاسخ
                    </button>
                    <textarea placeholder="Write your reply here..."></textarea>
                  </div>
                </div>
              </div>
              {/* {Openreply && (
                <div>
                  <div>
                    <textarea placeholder="Write your reply here..."></textarea>
                    <button className="">Submit Reply</button>
                  </div>
                </div>
              )}

              <div>
                <button className="">
                  {isExpanded ? "مشاهده کمتر" : "مشاهده بیشتر"}
                </button>

                <button className="">{isExpanded ? " کمتر" : " بیشتر"}</button>
              </div> */}
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
