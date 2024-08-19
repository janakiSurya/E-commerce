import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Reducers/ProductReducer"; // Correct relative path
import cartReducer from "./Reducers/CartReducer"; // Correct relative path
import LoginReducer from "./Reducers/LoginReducer";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    login: LoginReducer,
  },
});

export default store;
