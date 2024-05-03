import { createSlice } from "@reduxjs/toolkit";
import { fetchTenses, fetchVerbs } from "../services/apiService";

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

export const VerbListSlice = createSlice({
    name: 'verbList',
    initialState: {
        data: [],
        loading: false, 
        error: null
    },
    reducers: {
        // Reducers synchrones ici si nécessaire
        updateVerbList: (state, action) => {
            state.data = state.data.filter(verb => verb.id !== action.payload.id)
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchVerbs.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchVerbs.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchVerbs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { updateVerbList } = VerbListSlice.actions;

export const SelectedTenseSlice = createSlice({
    name: 'selectedTense',
    initialState: {
        value: {}
    },
    reducers: {
        updateSelectedTense: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { updateSelectedTense } = SelectedTenseSlice.actions;

export const SelectedVerbListSlice = createSlice({
    name: 'selectedVerbList',
    initialState: {
        data: []
    },
    reducers: {
        updateSelectedVerbList: (state, action) => {
            state.data.push(action.payload);
        }
    }
});

export const { updateSelectedVerbList } = SelectedVerbListSlice.actions;
