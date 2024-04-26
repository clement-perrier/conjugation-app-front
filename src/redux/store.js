import { configureStore } from "@reduxjs/toolkit"
import tenseReducer from "./tenseSlice";

const store = configureStore({
    reducer: {
        tenses: tenseReducer
    },
})

export default store;