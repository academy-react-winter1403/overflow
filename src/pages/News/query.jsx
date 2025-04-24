// src/components/Comment.jsx
import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getComments, likeComment } from "../api/comments";  // Import API functions

const Comment = ({ postId }) => {
  const queryClient = useQueryClient();

  // Fetch comments using useQuery
  const { data: comments, isLoading, error } = useQuery(
    ["comments", postId], // Query key for comments by postId
    () => getComments(postId) // Fetch comments API function
  );

  // Like comment mutation using useMutation
  const likeMutation = useMutation(likeComment, {
    onSuccess: () => {
      // Invalidate and refetch comments to update like count
      queryClient.invalidateQueries(["comments", postId]);
    },
  });

  const handleLike = (commentId) => {
    likeMutation.mutate(commentId); // Trigger like mutation
  };

  if (isLoading) {
    return <p>Loading comments...</p>;
  }

  if (error) {
    return <p>Error fetching comments: {error.message}</p>;
  }

  return (
    <div>
      <h3>Comments:</h3>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.author}</p>
          <p>{comment.text}</p>
          <button onClick={() => handleLike(comment.id)}>
            Like ({comment.likeCount})
          </button>
        </div>
      ))}
    </div>
  );
};

export default Comment;