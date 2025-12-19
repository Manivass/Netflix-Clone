import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginslice.jsx"
const storere = configureStore({
    reducer : {
        login : loginSlice
    }
})

export default storere ;