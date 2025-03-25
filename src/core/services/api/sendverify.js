import http from '../interceptor';

const SendVerifyMessage = async (user) => {
  try {

    console.log("User data:", user);

    const response = await http.post("/Sign/SendVerifyMessage", user);

    return response;

  } catch (error) {

    console.log("Error response:", error.response);
    console.log("Error message:", error.message);
    console.log("Error config:", error.config);
    console.log("Error details:", error.response?.data || error.message);

    return false;
  }
};
export { SendVerifyMessage };