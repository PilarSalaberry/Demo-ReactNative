import { createSlice } from "@reduxjs/toolkit";

const dataUsers = createSlice({
  name: "dataUsers",
  initialState: {
    dataUsers: [],
  },
  reducers: {
    setDataUsers: (state, action) => {
      state.dataUsers = action.payload;
    },
    clearUsers: (state) => {
      state.dataUsers = [];
    },
  },
});

export const {setDataUsers, clearUsers}  = dataUsers.actions;
export default dataUsers.reducer;
