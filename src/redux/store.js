import { configureStore } from "@reduxjs/toolkit"
import { TenseListSlice } from "./slices"
import { SelectedTenseSlice } from "./slices";

const store = configureStore({
    reducer: {
        tenseList: TenseListSlice.reducer,
        selectedTense: SelectedTenseSlice.reducer
    },
})

export default store;