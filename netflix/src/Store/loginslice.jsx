import { createSlice } from "@reduxjs/toolkit";

const loginslice = createSlice(
    {
        name : "login",
        initialState : {
            toggleLogin : false
        },
        reducers : {
            toggle : (state) => {
                state.toggleLogin = !state.toggleLogin ;
            }
        }
    }
)

export const {toggle} = loginslice.actions ;
export default loginslice.reducer ; 
