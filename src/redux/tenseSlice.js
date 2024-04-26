import { createSlice } from "@reduxjs/toolkit";
import { fetchTenses } from "../services/apiService";

const tenseSlice = createSlice({
    name: 'tenses',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {
        // Reducers synchrones ici si nécessaire
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTenses.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTenses.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchTenses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default tenseSlice.reducer;