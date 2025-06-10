import http from "../../interceptor/index";

export const Getpaymentdetail = async () => {
  const respone = await http.get(`/CoursePayment?CourseId=aa30e715-8632-f011-b702-b3b6924eae77`);
    console.log(respone)
  return respone;
};
