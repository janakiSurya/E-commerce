// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      sessionStorage.setItem("isLoggedIn", "true");
    },
    logout: (state) => {
      state.isLoggedIn = false;
      sessionStorage.removeItem("isLoggedIn");
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
