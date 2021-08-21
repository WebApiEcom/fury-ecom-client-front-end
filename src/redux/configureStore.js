import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import productsSlice from "./productsSlice";

const reducer = combineReducers({
  user: userSlice,
  products: productsSlice,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: true })],
});

export default store;
