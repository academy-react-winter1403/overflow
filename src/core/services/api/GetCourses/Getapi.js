import http from '../../interceptor/index.js';

const GetCourses = async () => {
  try {

    const response = await http.get('/Home/GetCoursesTop?Count=5');
    return response.data;
    
  } catch (error) {
    console.log("Error fetching courses:", error.message);
    return false;

  }
};
// Ensure you import the necessary library  

const Getteachers = async (token) => {
  try {
    const response = await http.get('/Course/TeacherCourseList?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=Expire&Query', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching teachers:", error.message);
    return false;
  }
};

export { GetCourses,Getteachers };