import http from "../interceptor";

export const VerifyMessage = async (user) => {
  try {
    const response = await http.post("/Sign/VerifyMessage", user);

    return response;
  } catch (error) {
    console.log("error",(error));
    return false;
  }
};
