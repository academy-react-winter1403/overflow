import { getItem } from '../../common/storage.services.js';
import http from '../../interceptor/index.js';

export const Addreserve = async (courseId) => {
    try {
        const response = await http.post('/CourseReserve/ReserveAdd', {
            courseId: courseId, 

        })
        
        return response;
    } catch (error) {
        console.log('Error details:', error.response?.data);
        throw error;
    }
};

export const getreserve = async () => {

     const id = getItem("id"); 

    try {
        const response = await http.get(`/User/UserDetails/${id}`)
        // getItem(id);
        console.log("api get reserve :",response)

        return response;
    } catch (error) {
        console.log('Error getreserve:', error.response?.data);
        throw error;
    }
};

