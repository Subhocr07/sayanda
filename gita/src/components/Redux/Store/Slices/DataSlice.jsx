import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: [],
    reducers: {
        SubmitQuestion(state, action) { },
        SuggestionClick(state, action) { },
        CallBackRes(state, action) { },
        Logout(state, action) { },

    }
})

export default dataSlice.reducer