import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./Slices/DataSlice"

const store = configureStore({
    reducer: {
        datas: dataSlice
    },
})

export default store