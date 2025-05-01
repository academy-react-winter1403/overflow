import http from "../../interceptor/index.js";

const Addreserve = async () =>{

    try {

        const response = await http.post('/CourseReserve/ReserveAdd');
        console.log('reserve respone : ',response);
        return response;

    } catch (error) {
        console.log('error form post reserve :', error);
    }
}

export {Addreserve};