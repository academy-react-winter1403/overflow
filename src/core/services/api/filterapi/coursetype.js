import http from '../../interceptor/index';

export const Gettype = async () => {

    try {
         
        const respone  = await http.get("/CourseType/GetCourseTypes");
        
        return respone;

    } catch (error) {
        
        console.log('error from fetch type  :',error);

    }

}