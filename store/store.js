import { configureStore } from "@reduxjs/toolkit";
import  dataUsers  from "./createSlice";
import userSlice from "./userSlice";


export const store = configureStore({
    reducer: {
        dataUsers: dataUsers,
        userSlice: userSlice,
    }
})