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
  },
});

export const { setProfileInfo, updateProfileInfo } = userSlice.actions;
export default userSlice.reducer;
