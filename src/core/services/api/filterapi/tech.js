import http from '../../interceptor/index';

export const Gettechnology = async () => {

    try {
         
        const respone  = await http.get("/Home/GetTechnologies");
        
        return respone;

    } catch (error) {
        
        console.log('error from fetch teacher id :',error);

    }

}