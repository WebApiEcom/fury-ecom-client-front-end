import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ASYNC GET ALL PRODUCTS FUNCTION
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const { data } = await axios.get(
      `http://localhost:4000/fury/admin/products/`
    );
    return data;
  }
);

// ASYNC GET SPECIFIC PRODUCT FUNCTION
export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (productId) => {
    const { data } = await axios.get(
      `http://localhost:4000/fury/admin/products/${productId}`
    );
    return data;
  }
);

// SLICE
const productsSlice = createSlice({
  name: "products",
  initialState: {
    // STATES FOR GET ALL PRODUCTS
    products: [],
    productsIsLoading: true,

    // STATES FOR GET SPECIFIC PRODUCT
    product: {},
    productIsLoading: true,
  },

  reducers: {
    addPrice: (state, action) => {
      state.product.discountedPrice = action.payload;
    },
    substractPrice: (state, action) => {
      state.product.discountedPrice = action.payload;
    },
  },

  extraReducers: {
    // EVENTS OF GET ALL PRODUCTS API CALL
    [getProducts.pending]: (state, action) => {
      state.productsIsLoading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;

      state.productsIsLoading = false;
    },
    [getProducts.rejected]: (state, action) => {
      state.productsIsLoading = true;
    },

    // EVENTS OF GET SPECIFIC PRODUCT API CALL
    [getProduct.pending]: (state, action) => {
      state.productIsLoading = true;
    },
    [getProduct.fulfilled]: (state, { payload }) => {
      state.product = payload;

      // SET DISCOUNTED PRICE
      state.product.discountedPrice =
        state.product.prices.price -
        (state.product.prices.discount / 100) * state.product.prices.price;
      state.productIsLoading = false;
    },
    [getProduct.rejected]: (state, action) => {
      state.productIsLoading = true;
    },
  },
});

export default productsSlice.reducer;
export const { addPrice, substractPrice } = productsSlice.actions;
