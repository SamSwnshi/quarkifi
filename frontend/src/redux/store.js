import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieReducer from './movieSlice'
import  searchReducer from "./historySlice"; 

export const store = configureStore({
    reducer :{
        auth: userReducer,
        movies: movieReducer,
        searchHistory: searchReducer
    }
})