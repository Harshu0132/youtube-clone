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

export const { addVideos, addSearchVideos, addCategoryVideos } = videoSlice.actions

export default videoSlice.reducer;