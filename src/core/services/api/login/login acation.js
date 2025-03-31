import http from '../../interceptor';

const Sendloginrequest = async (logininfo) => {
  try {
  const response = await http.post('/Sign/Login', logininfo);

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
<<<<<<<< HEAD:src/core/services/api/Register/RegisterPages.js

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

========
export { Sendloginrequest };
>>>>>>>> c7e56083e815e5e61302e2a79d274c2ee971fb55:src/core/services/api/login/login acation.js
