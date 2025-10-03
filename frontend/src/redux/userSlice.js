import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isAuth: false,
    user:null,
}

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login: (state,action) =>{
            state.isAuth = true,
            state.user = {username: action.payload.username || "Guest"}
        },
        logout: (state) =>{
            state.isAuth = false,
            state.user = null
        }
    }
})

export const {login,logout} = userSlice.actions
export default userSlice.reducer;