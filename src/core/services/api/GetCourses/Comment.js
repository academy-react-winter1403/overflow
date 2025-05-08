import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getItem } from "../../common/storage.services.js";
import http from "../../interceptor/index.js";

const PostComment = async (commentData) => {
  try {
    const token = getItem("token");

    if (!token) {
      throw new Error("Authentication token is missing. Please log in.");
    }

    const response = await http.post("/Course/AddCommentCourse", commentData);

    console.log("Response Data:", commentData);

    return response.data;
  } catch (error) {
    console.error(
      "Error in PostComment:",
      error.message || error.response?.data || "Unknown error",
    );

    console.log("Error Response:", error.response?.data);

    return false;
  }
};




const Sendreply = async (replydata) => {
  try {
    const reply = await http.post(`/Course/AddReplyCourseComment`, replydata);

    // console.log("Data from reply API:", reply);

    return reply;
  } catch (error) {
    console.error(
      "Error fetching reply:",
      error.response?.data || error.message,
    );

    if (error.response) {
      console.log("Response Data:", error.response.data);
    }

    throw error;
  }
};

const GetComment = async (id) => {
  const response = await http.get(`/Course/GetCourseCommnets/${id}`);

  console.log("in vlg GetComment response:", response);
  // console.log("get cm ID:", id);

  return response || [];
};

export const useGetCourseComment = (id) => {
  return useQuery({
    queryKey: ["coursecomments", id],
    queryFn: () => GetComment(id),

  });
};


// News Comment and Like
const NewsLikecommnet = async (commentId, state) => {
  const token = getItem("token");
  if (!token) {
    throw new Error("Please log in.");
  }

  // Log the received values to ensure they are correct
  // console.log("Comment ID:", commentId, "State:", state);

  const response = await http.post(
    `/News/CommentLike/${commentId}?LikeType=${state}`, // URL should correctly include state
  );

  // console.log("Raw response:", response);

  if (!response || !response) {
    throw new Error("API response is undefined or missing required fields.");
  }

  return response;
};

export const useNewsLikecommnet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, state }) => NewsLikecommnet(id, state),
    onSuccess: () => {
      // Invalidate query for comments
      queryClient.invalidateQueries(["newscomments"]);
    },
  });
};

const Likecommnet = async (commentId,state) => {
  const token = getItem("token");
  if (!token) {
    throw new Error("Authentication token is missing. Please log in.");
  }
  const response = await http.post(
    `/Course/AddCourseComment${state}?CourseCommandId=${commentId}`,
  );
  return response;
};

// const DisLikecommnet = async (commentId) => {
//   const token = getItem("token");
//   if (!token) {
//     throw new Error("Authentication token is missing. Please log in.");
//   }
//   const response = await http.post(
//     `/Course/AddCourseCommentDissLike?CourseCommandId=${commentId}`,
//   );

//   // console.log("Raw response:", response);

//   return response;
// };

export const useCourseLikecommnet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, state }) => Likecommnet(id, state),
    onSuccess: () => {
      // Invalidate query for comments
      queryClient.invalidateQueries(["coursecomments"]);
    },
  });
};


const Addlikecourse = async (CourseId) => {
  try {

    if (!CourseId) {
      throw new Error("CourseId is required and must be valid");
    }

    
    const response = await http.post(`/Course/AddCourseLike?CourseId=${CourseId}`)

    return response;
  } catch (error) {
    
    console.error("Error liking course:", error.response?.data || error.message);

    
    throw error;
  }
};

const Adddislikecourse = async (CourseId) =>{

  if (!CourseId) {
    throw new Error("CourseId is required and must be valid");
  }

  try {
    const respone = await http.post(`/Course/AddCourseDissLike?CourseId=${CourseId}`);
    
    return respone;

  } catch (error) {

    console.log('dislike course :',error)

    throw error;
}
}


const Getreply = async (CourseId, CommentId) => {
  try {
    if (!CourseId || !CommentId) {
      throw new Error("CourseId or CommentId is missing or invalid.");
    }


    const reply = await http.get(
      `/Course/GetCourseReplyCommnets/${CourseId}/${CommentId}`,
    );

    console.log("Data from reply API:", reply);

    return reply;
  } catch (error) {
    console.error(
      "Error fetching reply:",
      error.response?.data || error.message,
    );

    if (error.response) {
      console.log("Response Data:", error.response.data);
    }

    throw error;
  }
};
export const UseGetReply = (CourseId, CommentId) => {
  return useQuery({
    queryKey:["reply", CourseId, CommentId],
    queryFn: () => Getreply(CourseId, CommentId),
    enabled: !!CourseId && !!CommentId, 

  })}
export {
  NewsLikecommnet,
  GetComment,
  PostComment,
  Likecommnet,
  Getreply,
  Sendreply,
  Addlikecourse,
  Adddislikecourse
};
