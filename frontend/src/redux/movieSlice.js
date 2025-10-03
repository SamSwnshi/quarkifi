import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const movieSlice = createSlice({
    name: "movies",
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.loading = action.payload;
        },
        fetchMovie: (state) => {
            state.loading = true;
            state.error = null;
            state.isSearching = false;
        },
    },
});

export const { } = movieSlice.actions;

export default movieSlice.reducer;
