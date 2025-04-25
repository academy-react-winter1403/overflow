import { getItem } from "../../common/storage.services.js";
import http from "../../interceptor/index.js";

// تابع برای گرفتن داده‌های رزرو شده کاربر
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

// تابع برای گرفتن پروفایل کاربر
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
        const response = await http.put(
            '/SharePanel/UpdateProfileInfo', 
            {
                LName: profileData.lName,
                FName: profileData.fName,
                UserAbout: profileData.userAbout,
                LinkdinProfile: profileData.linkdinProfile,
                TelegramLink: profileData.telegramLink,
                ReceiveMessageEvent: profileData.receiveMessageEvent,
                HomeAdderess: profileData.homeAdderess,
                NationalCode: profileData.nationalCode,
                Gender: profileData.gender,
                BirthDay: profileData.birthDay,  // مطمئن شوید که تاریخ به فرمت درست است
                Latitude: profileData.latitude,
                Longitude: profileData.longitude
            }
        );
        
        if (response.status === 200) {
            return response.data; // در صورت موفقیت، داده‌ها را برمی‌گرداند
        } else {
            throw new Error('Failed to update profile');
        }
    } catch (error) {
        console.error('Error updating profile:', error);
        throw error; // برای مدیریت خطا در سایر بخش‌ها
    }
};

export { Getmyreserveapi, Getprofile, UpdateProfileInfo };
