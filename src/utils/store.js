import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice"
import chatReducer from "./chatSlice"
import videoReducer from "./videoSlice"

const store = configureStore({
    reducer: {
        app: appReducer,
        search: searchReducer,
        chat: chatReducer,
        youtubeData: videoReducer
    }
})

export default store