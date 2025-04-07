import http from '../../interceptor/index.js';

const TopCourses = async () => {
  try {

    const response = await http.get('/Home/GetCoursesTop?Count=5');
    return response.data;
    
  } catch (error) {
    console.log("Error fetching courses:", error.message);
    return false;

  }
};


const Getteachers = async (token) => {
  try {
    const response = await http.get('/Home/GetTeachers', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log('Error fetching teachers:', error.message);
    return false;
  }
}

export { TopCourses,Getteachers };
