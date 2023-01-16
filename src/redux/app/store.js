import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productSlice";
import cartReducer from "../features/cartSlice";
// import uiReducer from "../features/uiSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    // ui: uiReducer
  },
});

export default store;
