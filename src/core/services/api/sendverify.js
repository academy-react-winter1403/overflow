import http from '../interceptor';

 const SendVerifyMessage = async (user) => {
  try {
    const response = await http.post("/Sign/SendVerifyMessage", user);

    return response;

  } catch (error) {

    console.log("error",(error));
    
    return false;
  }
};
export {SendVerifyMessage}