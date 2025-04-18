import http from '../../interceptor';

const Setnewpass = async (newpass) => {
  try {
    const response = await http.post("/Sign/Reset", newpass);

    return response;
  } catch (error) {
    console.log("error",(error));
    return false;
  }
};
export{Setnewpass}
