import { createSlice } from "@reduxjs/toolkit";
import { fetchTenses } from "../services/apiService";

export const TenseListSlice = createSlice({
    name: 'tenseList',
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

export const SelectedTenseSlice = createSlice({
    name: 'selectedTense',
    initialState: {
        value: {}
    },
    reducers: {
        update: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { update } = SelectedTenseSlice.actions;
