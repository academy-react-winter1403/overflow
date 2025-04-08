
import http from '../../interceptor/index.js';

const SendVerifyMessage = async (phonenumber) => {
  try {
  const response = await http.post('/Sign/SendVerifyMessage', phonenumber);

    console.log("number;",response);

    return response;
  } catch (error) {

    console.log("Error response:", error.response);
    console.log("Error message:", error.message);
    console.log("Error config:", error.config);
    console.log("Error details:", error.response?.data || error.message);

      return false
  }
}

const VerifyMessage = async (user) => {
  try {
    const response = await http.post("/Sign/VerifyMessage", user);

    return response;
  } catch (error) {
    console.log("error",(error));
    return false;
  }
};


const Register = async (user) => {
  try {
    const response = await http.post("/Sign/Register", user);

    return response;
  } catch (error) {
    console.log("error",(error));
    return false;
  }
};

export {   
    SendVerifyMessage,
    VerifyMessage,
    Register };

