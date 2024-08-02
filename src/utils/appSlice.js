import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
        isDarkMode: false
    },
    reducers: {
        toggleMenuOpen: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu: (state) => {
            state.isMenuOpen = false
        },
        openMenu: (state) => {
            state.isMenuOpen = true
        },
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode
        }
    }
})

export const { toggleMenuOpen, closeMenu, openMenu, toggleDarkMode } = appSlice.actions
export default appSlice.reducer