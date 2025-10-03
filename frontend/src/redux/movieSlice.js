import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    details: null,
    loading: false,
    error: null,
    search: [],
    currentQuery: null,
    currentPage: 1,
    moviesPerPage: 10,
    hasMore: true,
    isSearching: false,
};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearDetails: (state) => {
            state.details = null;
        },

        fetchMoviesStart: (state) => {
            state.loading = true;
            state.error = null;
            state.isSearching = false;
        },
        fetchMoviesSuccess: (state, action) => {
            state.loading = false;
            const allMovies = action.payload;
            const startIndex = (state.currentPage - 1) * state.moviesPerPage;
            const newMovies = allMovies.slice(
                startIndex,
                startIndex + state.moviesPerPage
            );

            if (state.currentPage === 1) {
                state.list = newMovies;
            } else {
                state.list = [...state.list, ...newMovies];
            }

            state.hasMore = allMovies.length > state.list.length;
        },

        incrementPage: (state) => {
            state.currentPage += 1;
        },

        fetchDetailsStart: (state) => {
            state.loading = true;
            state.details = null;
            state.error = null;
        },
        fetchDetailsSuccess: (state, action) => {
            state.loading = false;
            state.details = action.payload;
        },

        searchMoviesStart: (state, action) => {
            state.loading = true;
            state.isSearching = true;
            state.currentQuery = action.payload;
            state.search = [];
            state.error = null;
        },
        searchMoviesSuccess: (state, action) => {
            state.loading = false;
            state.isSearching = false;
            state.search = action.payload.titles || action.payload.results || action.payload;
        },
        clearSearch: (state) => {
            state.search = [];
            state.currentQuery = null;
            state.isSearching = false;
            state.currentPage = 1;
            state.hasMore = true;
        },
    },
});

export const {
    setLoading,
    setError,
    clearDetails,
    fetchMoviesStart,
    fetchMoviesSuccess,
    incrementPage,
    fetchDetailsStart,
    fetchDetailsSuccess,
    searchMoviesStart,
    searchMoviesSuccess,
    clearSearch,
} = moviesSlice.actions;

export default moviesSlice.reducer;
