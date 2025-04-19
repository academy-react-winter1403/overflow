import { getItem } from '../../common/storage.services.js';
import http from '../../interceptor/index.js';

const GetComment = async (id) => {

  if (!id) {
    console.error("Invalid ID provided to GetComment.");
    return false; 
  }

  try {

    const response = await http.get(`/Course/GetCourseCommnets/${id}`); 
    
    console.log("Full API response:", response);


    return response || []; 
  } catch (error) {
    console.error(`Error fetching comments for Course ID ${id}:`, error.message || error);
    return false; 
  }
};

const PostComment = async (commentData) => {
  try {
    const token = getItem("token"); 

    if (!token) {
      throw new Error("Authentication token is missing. Please log in.");
    }

    const response = await http.post('/Course/AddCommentCourse', commentData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", 
      },
    });

    console.log("Response Data:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error in PostComment:", error.message || error.response?.data || "Unknown error");


    console.log("Error Response:", error.response?.data);

    return false; 
  }
};

const Likecommnet = async (commentId) => {
  try {
    
    const token = getItem("token");
    if (!token) {
      throw new Error("Authentication token is missing. Please log in.");
    }
    console.log("Token:", token);

    
    const response = await http.post(
      `/Course/AddCourseCommentLike`,
      { commentId }, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Raw response:", response);

   
    if (!response || !response.data) {
      throw new Error("API response is undefined or missing required fields.");
    }

    return response.data; 
  } catch (error) {
    console.error("Error submitting like:", error);
    throw error;
  }
};


const DisLikecommnet = async () => {
  try {

    const response = await http.post(
      `/Course/AddCourseCommentDissLike?CourseCommandId=<uuid>`
    );

    console.log("Raw response:", response);

    if (!response || !response.data) {
      throw new Error("API response is undefined or missing required fields.");
    }

    return response.data;
  } catch (error) {
    console.error("Error submitting like:", error);
    throw error;
  }
};

const Getreply = async (CourseId, CommentId) => {
  try {

    if (!CourseId || !CommentId) {
      throw new Error("CourseId or CommentId is missing or invalid.");
    }

    console.log("Fetching replies for:", { CourseId, CommentId });


    const reply = await http.get(`/Course/GetCourseReplyCommnets/${CourseId}/${CommentId}`);

    console.log("Data from reply API:", reply);

    return reply.data; 
  } catch (error) {
    console.error("Error fetching reply:", error.response?.data || error.message);

    if (error.response) {
      console.log("Response Data:", error.response.data);
    }

    throw error; 
  }
};


export { 
        GetComment,
        PostComment,
        Likecommnet,
        DisLikecommnet,
        Getreply };