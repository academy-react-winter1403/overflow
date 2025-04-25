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
        console.log('Response from get proflie info:', response);
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


export {Getmyreserveapi,Getprofile}