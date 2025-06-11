import http from  '../../interceptor/index'

export const Step1 = async () => {

    const respone = await http.get('/CoursePayment/StudentAddPeyment');

    return respone;
}