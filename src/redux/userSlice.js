import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "useranyone",
  initialState: {
    authenticatedUser: {},
  },
  reducers: {
    getUser: () => {},

    setUser: (state, action) => {
      state.authenticatedUser = action.payload;
    },

    clearUser: (state, action) => {
      state.authenticatedUser = null;
    },
  },
});

export const { getUser, setUser } = userSlice.actions;

export default userSlice.reducer;
