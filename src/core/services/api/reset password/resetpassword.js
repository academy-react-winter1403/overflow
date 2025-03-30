import http from '../../interceptor';
import { setItem } from '../../common/storage.services';

const Sendresetpassrequest = async (email) => {
  try {
  const response = await http.post('/Sign/ForgetPassword', email);


    console.log(";",response);
    setItem("id",response.id)
    return response;
  } catch (error) {

    console.log("Error response:", error.response);
    console.log("Error message:", error.message);
    console.log("Error config:", error.config);
    console.log("Error details:", error.response?.data || error.message);

      return false
  }
}
export { Sendresetpassrequest };