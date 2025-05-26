import http from '../../interceptor/index';

export const Getteacherid = async () => {

    try {
         
        const respone  = await http.get("/Home/GetTeachers");
        
        return respone;

    } catch (error) {
        
        console.log('error from fetch teacher id :',error);

    }

}