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
        addCategoryVideos: (state, action) => {
            state.categoryVideos = [...state.videos, ...action.payload]
        },
        addYoutubeCategories: (state, action) => {
            state.youtubeCategories = action.payload
        }
    }
})

export const { addVideos, addSearchVideos, addCategoryVideos, appendVideos, addYoutubeCategories } = videoSlice.actions

export default videoSlice.reducer;