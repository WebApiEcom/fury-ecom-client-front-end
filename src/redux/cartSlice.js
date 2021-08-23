import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
   name: "cartanyone",
   initialState: {
      shoppingCart: [],
      orderTotal: 0,
   },
   reducers: {
      setCart: (state, action) => {
         state.shoppingCart = action.payload;
      },
      setCartTotal: (state, action) => {
         state.orderTotal = action.payload;
      },
   },
});

export const { setCart, setCartTotal } = cartSlice.actions;

export default cartSlice.reducer;
