import { configureStore } from "@reduxjs/toolkit";
import token from "./token";
const store = configureStore({
    reducer:{
        token:token
    },
})
export default store