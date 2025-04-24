import React, { useState } from "react";

function ReplyComment({commentId}) {
  const [focusedCommentId, setFocusedCommentId] = useState(null); // Track focused comment by ID
  const handleFocus = (commentId) => {
    setFocusedCommentId(commentId); // Set the focused comment ID
  };

  const handleBlur = () => {
    setFocusedCommentId(null); // Reset focused comment when blur
  };

  return (
      <div
        className={`max-w-2/3 min-w-1/2 rounded-xl bg-gray-100 p-2 ${
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
            style={{ outline: "none", resize: "none" }} // Add this inline style to remove the focus outline
            className={`w-full pl-2 ${focusedCommentId === commentId ? "h-40 w-full" : "h-10 w-1/2"} transition-all duration-300`}
            placeholder="Write your reply here..."
            onFocus={() => handleFocus(commentId)} // On focus, set focused comment
            onBlur={handleBlur} // On blur, reset focus
          ></textarea>
        </div>
      </div>
  );
}

export default ReplyComment;
