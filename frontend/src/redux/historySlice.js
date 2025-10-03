import { createSlice } from "@reduxjs/toolkit";

const loadHistory = () => {
    try {
        // --- FIX IS HERE: Change getItems to getItem ---
        const history = localStorage.getItem("searchHistory");
        
        if (history === null) {
            return [];
        }
        return JSON.parse(history).slice(0, 5);
    } catch (error) {
        console.error("Could not load search history from local storage", error);
        return [];
    }
};

const initialState = {
    history: loadHistory(),
};

const searchHistorySlice = createSlice({
    name: "searchHistory",
    initialState,
    reducers: {
        addSearch: (state, action) => {
            const newSearch = action.payload.trim();
            if (!newSearch) return;

            // Remove existing term to move it to the front
            state.history = state.history.filter((t) => t !== newSearch);
            // Add to the front
            state.history.unshift(newSearch);

            // Keep only the last 5 terms
            if (state.history.length > 5) {
                state.history.pop();
            }

            try {
                // Also ensure the save method is correct (setItem is correct)
                localStorage.setItem("searchHistory", JSON.stringify(state.history));
            } catch (e) {
                console.error("Could not save search history to local storage", e);
            }
        },
    },
});

// --- MINOR CORRECTION: Export the action creator correctly ---
// The action creator is named after the reducer function: 'addSearch'
export const { addSearch } = searchHistorySlice.actions;

// --- FIX IS HERE: Export the reducer correctly ---
// You need to export the default reducer from the slice object itself
export default searchHistorySlice.reducer;