import http from "../interceptor";

export const getnewscountApi = async () => {

    const respone = http.get("/SharePanel/GetMyFavoriteNews");

    return respone;
  
};
export const getcoursecountApi = async () => {

    const respone = http.get("/SharePanel/GetMyFavoriteCourses");

    return respone;
  
};
