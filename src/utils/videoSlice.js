import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        videos: [],
        searchVideos: []
    },
    reducers: {
        addVideos: (state, action) => {
            state.videos = action.payload
        },
        addSearchVideos: (state, action) => {
            state.searchVideos = action.payload
        }
    }
})

export const { addVideos, addSearchVideos } = videoSlice.actions

export default videoSlice.reducer;