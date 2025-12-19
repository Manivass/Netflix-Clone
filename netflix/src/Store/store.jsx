import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginslice.jsx"
const store = configureStore({
    reducer : {
        login : loginSlice
    }
})

export default store ;