import { createSlice } from "@reduxjs/toolkit";

const loginslice = createSlice(
    {
        name : "login",
        initialState : {
            toggleLogin : false ,
            signOutBrowse :  true  , 
        },
        reducers : {
            toggle : (state) => {
                state.toggleLogin = !state.toggleLogin ;
            },
            signOutButton : (state  ) => {
                state.signOutBrowse = !state.signOutBrowse 
            }
        }
    }
)

export const {toggle , signOutButton } = loginslice.actions ;
export default loginslice.reducer ; 
