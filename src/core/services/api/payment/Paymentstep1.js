import http from  '../../interceptor/index'

export const Step1 = async (formData) => {

    const respone = await http.post('/CoursePayment/StudentAddPeyment',formData);

    return respone;
}