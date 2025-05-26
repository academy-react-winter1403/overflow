import http from '../../interceptor/index';

export const Getskills = async () => {

    try {
         
        const respone  = await http.get("/CourseLevel/GetAllCourseLevel");
        
        return respone;

    } catch (error) {
        
        console.log('error from fetch skills  :',error);

    }

}