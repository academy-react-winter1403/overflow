import React, { useState } from "react";

function SendReplyComment({commentId}) {
  const [focusedCommentId, setFocusedCommentId] = useState(null); 
  const handleFocus = (commentId) => {
    setFocusedCommentId(commentId); 
  };

  const handleBlur = () => {
    setFocusedCommentId(null); 
  };

  return (
      <div
        className={`max-w-2/3 min-w-1/2 rounded-xl bg-gray-100 dark:text-amber-50 dark:bg-deep-blue/35 p-2 ${
          focusedCommentId === commentId ? "h-40 w-full" : "h-10 w-1/2"
        } transition-all duration-300`}
      >
        <div className="flex w-full items-center justify-between">
          {focusedCommentId == commentId && (
            <button className="cursor-pointer rounded-xl px-2 pb-1 hover:text-black">
              ثبت
            </button>
          )}
          <textarea
            style={{ outline: "none", resize: "none" }} 
            className={`w-full pl-2 ${focusedCommentId === commentId ? "h-40 w-full" : "h-10 w-1/2"} transition-all duration-300`}
            placeholder="Write your reply here..."
            onFocus={() => handleFocus(commentId)} 
            onBlur={handleBlur} 
          ></textarea>
        </div>
      </div>
  );
}

export default SendReplyComment;
