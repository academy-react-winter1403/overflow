import React, { useState } from "react";
import user from "../../assets/Header/user.png";
import SendReplyComment from "./SendReplyComment.jsx";
import Like from "../../assets/Coursesimage/like.png";
import disLike from "../../assets/Coursesimage/dislike.png";

import {
  useCourseLikecommnet,
  UseGetReply,
  useNewsLikecommnet,
} from "../../core/services/api/GetCourses/Comment.js";
import SmartImage from "../Common/SmartImage.jsx";

function Comments({ comment, type, index }) {
  // Handel News Comment Like and Dislike
  const newsLikecommnets = useNewsLikecommnet();
  const handelLikeNews = (id, state) => {
    newsLikecommnets.mutate({ id, state });
  };
  const [commentId, setcommentId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [isExpanded, setisExpanded] = useState(false);
  // get reply of coments
  const { data: replyData } = UseGetReply(courseId, commentId);

  // Handel Course Comment Like and Dislike
  const courseLikecommnets = useCourseLikecommnet();

  const handelLikeCourse = (id, state) => {
    courseLikecommnets.mutate({ id, state });
  };
  const handelLike = (id, state) => {
    console.log(index);
    if (type === "Course") {
      const courseState = state === "true" ? "Like" : "DissLike";
      handelLikeCourse(id, courseState);
    } else if (type === "News") {
      handelLikeNews(id, state);
    }
  };

  return (
    <div className="mb-5">
      <div className="relative mr-10 flex flex-row-reverse rounded-2xl border-r-2 border-deep-blue bg-white/55 p-2 dark:bg-gray-800">
        <div className="absolute -top-3 -right-10 z-30 h-18 w-18 space-y-3 py-2">
          <SmartImage
            className="rounded-full bg-gray-500 h-18 dark:bg-gray-600"
            src={comment.pictureAddress || user}
            alt="Author"
            fallback={user}
          />
        </div>
        <div className="mr-10 h-full w-full">
          <div className=" relative min-h-45" key={index}>
            <div className=" relative flex flex-row-reverse justify-between">
              <div className="m-1 grow-5 p-2 text-right">
                <p className="dark:text-gray-300 text-deep-blue">
                  {comment.author || "کاربر"}
                </p>

                <p className="text-lg font-bold dark:text-gray-200">
                  {comment.title}
                </p>
                <p className="dark:text-gray-400">{comment.describe}</p>
              </div>

              <p className="absolute top-2 left-3 dark:text-gray-400">
                {new Date(
                  comment.inserDate || comment.insertDate,
                ).toLocaleDateString("fa-IR")}
              </p>
            </div>
            <div className="relative mx-3 flex items-center justify-between">
              <div className="flex gap-3">
                <button
                  onClick={() => handelLike(comment.id, "true")}
                  className="bg-deep-blue/25 hover:bg-deep-blue/55 flex cursor-pointer rounded-xl p-1 transition-all hover:scale-110 dark:bg-gray-700"
                >
                  <img src={Like} alt="Like" className="inline-block" />
                  <p className="p-1 dark:text-gray-300">
                    {comment.likeCount > 0 ? comment.likeCount : ""}
                  </p>
                </button>
                <button
                  onClick={() => handelLike(comment.id, "false")}
                  className="bg-deep-blue/25 hover:bg-deep-blue/55 flex cursor-pointer rounded-xl p-1 transition-all hover:scale-110 dark:bg-gray-700"
                >
                  <img src={disLike} alt="Dislike" />
                  <p className="p-1 dark:text-gray-300">
                    {comment.dissLikeCount > 0 ? comment.dissLikeCount : ""}
                    {comment.disslikeCount > 0 ? comment.disslikeCount : ""}
                  </p>
                </button>
              </div>

              <>
                <SendReplyComment commentId={comment.id} />
              </>
            </div>
            <button
              onClick={() => {
                setisExpanded((prev) => !prev);
                setcommentId(comment.id);
                setCourseId(comment.courseId);
              }}
              className=" hover:text-gray-500 hover:scale-105 cursor-pointer p-1 text-[12px] font-semibold text-gray-700 transition-all dark:text-gray-100"
            >
              {isExpanded
                ? " پنهان کردن "
                : ` نمایش ${comment.acceptReplysCount.toLocaleString("fa-IR")} پاسخ `}
            </button>

            {isExpanded && replyData && replyData.length > 0
              ? replyData.map((reply, index) => (
                  <Comments comment={reply} type={"Course"} index={index} />
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
