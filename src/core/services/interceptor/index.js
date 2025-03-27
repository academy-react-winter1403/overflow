import axios from "axios";
 
 const baseURL ="https://classapi.sepehracademy.ir/api";

console.log("Base URL:", baseURL); 

const instance = axios.create({
  baseURL: baseURL, 
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (err) => {
  console.log(err);

  if (err.response.status >= 400 && err.response.status < 500) {
    alert("Client error: " + err.response.status);
  }

  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
  opt.headers["MessageTest"] = "Hello world!";
  return opt;
});

export default instance;
