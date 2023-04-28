import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    setProfileInfo(state, action) {
      return action.payload;
    },
    updateProfileInfo(state, action)  {
      state.profileInfo = action.payload;
    },
    clearUser: (state) => {
      state.profileInfo = [];
    },
  },
});

export const { setProfileInfo, updateProfileInfo, clearUser } = userSlice.actions;
export default userSlice.reducer;
