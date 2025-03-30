import http from '../../interceptor';
import { getItem } from '../../common/storage.services';


const newPasswordRequst = async (Newpas) => {
  try {
    const storedId = getItem("id");
    const dataforsend={
        userId : storedId,
        newPassword : Newpas,
        resetValue : " "

    }
  const response = await http.post('/Sign/Reset', dataforsend);


    console.log(";",response);

    return response;
  } catch (error) {

    console.log("Error response:", error.response);
    console.log("Error message:", error.message);
    console.log("Error config:", error.config);
    console.log("Error details:", error.response?.data || error.message);

      return false
  }
}
export { newPasswordRequst };