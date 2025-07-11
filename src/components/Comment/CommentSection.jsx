import React, { useEffect, useState } from "react";

import Comments from "./Comments.jsx";

const CommentSection = ({ commentData, type }) => {
  return (
    <div className="w-9/10">
      <h3 className="text-deep-blue m-4 text-2xl font-bold dark:text-gray-300">
        Comments:
      </h3>
      <div className="font-normal text-gray-500 dark:text-gray-400">
        {commentData.length > 0 ? (
          commentData?.map((comment, index) => (
            <Comments comment={comment} index={index} type={type} />
          ))
        ) : (
          <p className="dark:text-gray-400">No comments available.</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
