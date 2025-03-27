import http from "../interceptor";

export const Register = async (user) => {
  try {
    const response = await http.post("/Sign/Register", user);

    return response;
  } catch (error) {
    console.log("error",(error));
    return false;
  }
};
