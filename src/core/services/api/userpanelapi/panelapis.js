import { getItem } from "../../common/storage.services.js";
import http from "../../interceptor/index.js";


const Getmyreserveapi = async () => {

    const token = getItem("token");

    if (!token) {
      throw new Error("Authentication token is missing. Please log in.");
    }
    try {

        const response = await http.get('/SharePanel/GetMyCoursesReserve');
        console.log('Response from get reserve:', response);
        
        return response;
    } catch (error) {
        if (error.response) {
            console.error('Error Response:', error.response);
        } else if (error.request) {
            console.error('Error Request:', error.request);
        } else {
            console.error('Error Message:', error.message);
        }
        console.error('Full Error Details:', error);
    }
};

const Getprofile = async () => {

    const token = getItem("token");

    if (!token) {
      throw new Error("Authentication token is missing. Please log in.");
    }
    try {
        const response = await http.get('/SharePanel/GetProfileInfo');
        console.log('Response from get profile info:', response);
        return response;
    } catch (error) {
        if (error.response) {
            console.error('Error Response:', error.response);
        } else if (error.request) {
            console.error('Error Request:', error.request);
        } else {
            console.error('Error Message:', error.message);
        }
        console.error('Full Error Details:', error);
    }
};

// تابع برای آپدیت کردن پروفایل کاربر
const UpdateProfileInfo = async (profileData) => {
    try {
      const response = await http.put('/SharePanel/UpdateProfileInfo', {
        LName: profileData.lName,
        FName: profileData.fName,
        UserAbout: profileData.userAbout,
        LinkdinProfile: profileData.linkdinProfile,
        TelegramLink: profileData.telegramLink,
        ReceiveMessageEvent: profileData.receiveMessageEvent,
        HomeAdderess: profileData.homeAdderess,
        NationalCode: profileData.nationalCode,
        Gender: profileData.gender,
        BirthDay: profileData.birthDay,
        Latitude: profileData.latitude,
        Longitude: profileData.longitude
      });
  
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Failed to update profile');
      }
  
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error; 
    }
  };
  
const favecourse = async () =>{

    try {
        const respone = await http.get('/SharePanel/GetMyFavoriteCourses');

        return respone;
    
    } catch (error) {
        console.log('error from get fave :', error);
    }
}

const favecoursenew = async () =>{

    try {
        const respone = await http.get('/SharePanel/GetMyFavoriteNews');

        return respone;
    
    } catch (error) {
        console.log('error from get news :', error);
    }
}

const Getmycourse = async () =>{

    try {
        const respone = await http.get('/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=5&SortingCol=DESC&SortType=LastUpdate&Query=');

        return respone;
    
    } catch (error) {
        console.log('error from get news :', error);
    }
}

const Getsecurityinfo = async () => {

    try {

        const respone = await http.get('/SharePanel/GetSecurityInfo');

        return respone;

    } catch (error) {
        console.log('error from security :',error)
    }
}


const Mycomment = async () => {

    try {
        const respone = await http.get('/SharePanel/GetMyCoursesComments');

        return respone;

    } catch (error) {
        console.log('error from getmycomment :',error);
    }
}

const Mynewscomment = async () => {

    try {
        const respone = await http.get('/SharePanel/GetMyNewsComments');

        return respone;

    } catch (error) {
        console.log('error from getmycomment :',error);
    }
}

export { 
    Getmyreserveapi, 
    Getprofile, 
    UpdateProfileInfo, 
    favecourse, 
    favecoursenew,
    Getmycourse,
    Getsecurityinfo,
    Mycomment,
    Mynewscomment };
