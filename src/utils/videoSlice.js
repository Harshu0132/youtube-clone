import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        videos: [],
        searchVideos: [],
        categoryVideos: []
    },
    reducers: {
        addVideos: (state, action) => {
            console.log("I'm calling");
            state.videos = action.payload
        },
        appendVideos: (state, action) => {
            state.videos = [...state.videos, ...action.payload]
        },
        addSearchVideos: (state, action) => {
            state.searchVideos = action.payload
        },
        addCategoryVideos: (state, action) => {
            state.categoryVideos = [...state.videos, ...action.payload]
        }
    }
})

export const { addVideos, addSearchVideos, addCategoryVideos, appendVideos } = videoSlice.actions

export default videoSlice.reducer;