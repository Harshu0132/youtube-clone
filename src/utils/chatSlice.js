import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        liveChat: []
    },
    reducers: {
        addLiveChat: (state, action) => {
            state.liveChat.splice(100,1)
            state.liveChat.unshift(action.payload)
        }
    }
})

export const { addLiveChat } = chatSlice.actions;

export default chatSlice.reducer;   