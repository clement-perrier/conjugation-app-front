import { configureStore } from "@reduxjs/toolkit"
import { TenseListSlice, SelectedTenseSlice, VerbListSlice, SelectedVerbListSlice } from "./slices"

const store = configureStore({
    reducer: {
        tenseList: TenseListSlice.reducer,
        selectedTense: SelectedTenseSlice.reducer,
        verbList: VerbListSlice.reducer,
        selectedVerbList: SelectedVerbListSlice.reducer
    },
})

export default store;