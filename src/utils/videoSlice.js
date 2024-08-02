import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        videos: [],
        searchVideos: [],
        categoryVideos: [],
        youtubeCategories: null
    },
    reducers: {
        addVideos: (state, action) => {
            state.videos = action.payload
        },
        appendVideos: (state, action) => {
            state.videos = [...state.videos, ...action.payload]
        },
        addSearchVideos: (state, action) => {
            state.searchVideos = action.payload
        },
        appendSearchVideos: (state, action) => {
            state.searchVideos = [...state.searchVideos, ...action.payload]
        },
        addYoutubeCategories: (state, action) => {
            state.youtubeCategories = action.payload
        }
    }
})

export const { addVideos, addSearchVideos, appendSearchVideos, appendVideos, addYoutubeCategories } = videoSlice.actions

export default videoSlice.reducer;