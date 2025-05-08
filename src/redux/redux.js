import { configureStore } from "@reduxjs/toolkit";
import token from "./token";
import darkModeReducer from "./darkModeSlice";

const store = configureStore({
    reducer:{
        token:token,
        darkMode:darkModeReducer,
    },
})
export default store