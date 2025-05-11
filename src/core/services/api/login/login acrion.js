import { Navigate } from 'react-router';
import http from '../../interceptor';

const Sendloginrequest = async (logininfo) => {
  try {
  const response = await http.post('/Sign/Login', logininfo);

    console.log("login responsee",response);

    return response;
  } catch (error) {

    console.log("Error response:", error.response);
    console.log("Error message:", error.message);
    console.log("Error config:", error.config);
    console.log("Error details:", error.response?.data || error.message);

      return false
  }
}
const Twostep = async (logininfo,code) => {
  try {
  const response = await http.post(`/Sign/LoginTwoStep?VrifyCode=${code}`, logininfo);

    console.log("login responsee",response);
    Navigate("/")
    return response;
  } catch (error) {

    console.log("Error response:", error.response);
    console.log("Error message:", error.message);
    console.log("Error config:", error.config);
    console.log("Error details:", error.response?.data || error.message);

      return false
  }
}
export { Twostep,Sendloginrequest };