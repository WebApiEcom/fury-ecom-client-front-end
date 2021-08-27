import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "useranyone",
  initialState: {
    user: {},
    userid: 0,
    token: "",
    toCheckout: true
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
    setToCheckOut: (state, action) => {
      state.toCheckout = action.payload;
    },


  },
});

export const { setUserToken, setUser, getUserId, setToCheckOut } = userSlice.actions;

export default userSlice.reducer;
