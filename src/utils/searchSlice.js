import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "suggestion",
    initialState: {
        suggestion: []
    },
    reducers: {
        addSuggestion: (state, action) => {
            state.suggestion = {...state.suggestion, ...action.payload}
        }
    }
})

export const { addSuggestion } = searchSlice.actions

export default searchSlice.reducer