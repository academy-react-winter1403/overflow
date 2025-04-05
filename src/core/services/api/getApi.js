import http from "../interceptor";

export const getApi = async (url, key = null) => {
  try {
    const response = await http.get(url);
    // console.log("response", response);
    if (key == null) {
      return response;
    }
    if (key && response[key]) {
      return response[key];
    }
    else {
      return null;
    }
  } catch (error) {
    console.log("error", error);
    return false;
  }
};
