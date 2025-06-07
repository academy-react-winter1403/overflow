import http from "../../services/interceptor/index";

export const getnewscountApi = async () => {

    const respone = await http.get("/SharePanel/GetMyFavoriteNews");

    return respone;
  
};
export const getcoursecountApi = async () => {

    const respone = await http.get("/SharePanel/GetMyFavoriteCourses");

    return respone;
  
};
