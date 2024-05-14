import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = 'http://localhost:8080';

const apiService = axios.create({
    baseURL: API_BASE_URL,
  });

export const FetchAllTenses = async () => {
    try {
        return await apiService.get('tense/list/all');
    } catch (error) {
        throw(error);
    }
}

export const fetchTenses = createAsyncThunk(
    'tenses/fetchTenses',
    async () => {
        const response = await apiService.get('tense/list/language-id/1');
        return response.data;
    }
);

export const fetchVerbs = createAsyncThunk(
    'verbs/fetchVerbs',
    async () => {
        const response = await apiService.get('verb/list/language-id/1');
        return response.data;
    }
)