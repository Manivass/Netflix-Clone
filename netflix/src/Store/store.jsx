import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginslice.jsx";
import userSlice from "./userSlice.jsx";
const store = configureStore({
  reducer: {
    login: loginSlice,
    user: userSlice,
  },
});

export default store;
