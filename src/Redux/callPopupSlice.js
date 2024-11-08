import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVisible: false
}

export const callPopupSlice = createSlice({
    name:'call',
    initialState,
    reducers:{
        showPopup:(state)=>{
            state.initialState = true
            console.log(true);
        },
        hidePopup: (state)=>{
            state.initialState = false
        }
    }
})

export const {showPopup, hidePopup} = callPopupSlice.actions;
export default callPopupSlice.reducer;