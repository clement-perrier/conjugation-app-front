import { createSlice } from "@reduxjs/toolkit";
import { fetchTenses, fetchVerbs } from "../services/apiService";
import { asyncListInitialState, listInitialState, objectInitialState } from "./states";

export const TenseListSlice = createSlice({
    name: 'tenseList',
    initialState: asyncListInitialState,
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
    initialState: asyncListInitialState,
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
    initialState: objectInitialState,
    reducers: {
        updateSelectedTense: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { updateSelectedTense } = SelectedTenseSlice.actions;

export const SelectedVerbListSlice = createSlice({
    name: 'selectedVerbList',
    initialState: listInitialState,
    reducers: {
        addSelectedVerb: (state, action) => {
            state.data.push(action.payload);
        },
        removeSelectedVerb: (state, action) => {
            state.data = state.data.filter(verb => verb.id !== action.payload.id)
        }
    }
});

export const { addSelectedVerb, removeSelectedVerb } = SelectedVerbListSlice.actions;
