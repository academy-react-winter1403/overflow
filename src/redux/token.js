import { createSlice } from "@reduxjs/toolkit";
const token=createSlice({
    name:"token",
    initialState:{
        token:""
    },
    reducers:{
        handletoken :(state,{payload})=>{
            state.token = payload

        }
    }
})
export const {handletoken}= token.actions
export default token.reducer;