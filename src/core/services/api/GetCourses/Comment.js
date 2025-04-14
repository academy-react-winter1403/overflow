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

export { GetComment,PostComment };