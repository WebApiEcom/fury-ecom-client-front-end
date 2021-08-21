import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartanyone",
    initialState: {
        shoppingCart:[]
    },
    reducers: {

      setCart: (state, action) => {
        //   const userData = action.payload;
        //   return { ...state, ...userData };
        state.shoppingCart = action.payload;
      }
    },
  });
  
  export const { setCart} = cartSlice.actions;
  
  export default cartSlice.reducer;
  