import http from '../../interceptor/index.js';

const GetComment = async () => {

  try {
  
    const response = await http.get('/Course/GetCourseCommnets/:CourseId');

    return response.data;

  } catch (error) {

    console.log(" from get comment", error.message);
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