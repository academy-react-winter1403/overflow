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

    // const { data } = response || {}; 
    // console.log("Data fetched from API:", data);

    return response || []; 
  } catch (error) {
    console.error(`Error fetching comments for Course ID ${id}:`, error.message || error);
    return false; 
  }
};

const PostComment = async (commentData) => {
  try {
    
    const response = await http.post('/Course/AddCommentCourse', commentData,);
    
    return response.data;

  } catch (error) {

    console.log('error', error.message);
    return false;

  }
};

const Likecommnet = async () => {
  try {

          const token = getItem("token");
          console.log("token:",token) 
    const response = await http.post(`/Course/AddCourseCommentLike`);

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


export { GetComment,PostComment,Likecommnet,DisLikecommnet };