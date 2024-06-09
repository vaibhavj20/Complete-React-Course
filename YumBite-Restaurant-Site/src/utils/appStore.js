import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    //appreducer
    //contains small reducers
    cart: cartReducer,
  },
});

export default appStore;
