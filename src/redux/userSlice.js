import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
   name: "useranyone",
   initialState: {
      user: {},
      demo: "kaveesha",
      userid: 0,
      token: "",
   },
   reducers: {
      setUser: (state, action) => {
         state.user = action.payload;
      },
      getUserId: (state, action) => {
         state.userid = action.payload;
      },
      setUserToken: (state, action) => {
         state.token = action.payload;
      },
   },
});

export const { setUserToken, setUser, getUserId } = userSlice.actions;

export default userSlice.reducer;
