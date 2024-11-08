import { configureStore } from "@reduxjs/toolkit";
import callReducer from './callPopupSlice'

export const store = configureStore({
    reducer:{
        call: callReducer
    }
})