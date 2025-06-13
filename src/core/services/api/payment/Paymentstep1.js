import { setItem } from '../../common/storage.services';
import http from  '../../interceptor/index'

export const Step1 = async (formData) => {

    const respone = await http.post('/CoursePayment/StudentAddPeyment',formData);
    setItem("paymentid",respone.id);
    return respone;
}

export const Step2 = async (formData) => {

    const respone = await http.post('/CoursePayment/StudentAddPeymentImage',formData);
    return respone;
}