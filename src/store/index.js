import { configureStore } from "@reduxjs/toolkit"
import DataSlice from "./dataSlice"

const store = configureStore({
    reducer:{
        data:DataSlice
    }
})
export default store