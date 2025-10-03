import { createSlice } from "@reduxjs/toolkit";

const loadHistory = () => {
    try {
      
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

            state.history = state.history.filter((t) => t !== newSearch);
            
            state.history.unshift(newSearch);

            if (state.history.length > 5) {
                state.history.pop();
            }

            try {
                
                localStorage.setItem("searchHistory", JSON.stringify(state.history));
            } catch (e) {
                console.error("Could not save search history to local storage", e);
            }
        },
    },
});


export const { addSearch } = searchHistorySlice.actions;


export default searchHistorySlice.reducer;