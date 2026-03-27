import { createSlice } from "@reduxjs/toolkit";

let ThemeSlice = createSlice({
    name: "theme",
    initialState: {
        value: false
    },
    reducers: {
        setTheme: (state) => {
            state.value = !state.value;
        }
    }
})

export const { setTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer