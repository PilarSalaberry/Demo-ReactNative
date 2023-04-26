import { configureStore } from "@reduxjs/toolkit";
import  dataUsers  from "./createSlice";


export const store = configureStore({
    reducer: {
        dataUsers: dataUsers,
    }
})