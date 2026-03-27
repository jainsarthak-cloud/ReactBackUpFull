import { configureStore } from '@reduxjs/toolkit'
import ThemeReducer from '../features/ThemeSlice'

export let store = configureStore({
    reducer: {
        theme: ThemeReducer,
    }
})