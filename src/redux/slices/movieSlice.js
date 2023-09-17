import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {movieService} from "../../services";


const initialState = {
    movie: null,
    isLoading: false,
    error: null,
};

export const fetchMovie = createAsyncThunk(
    'movie/fetchMovie',
    async (movieId) => {
        try {
            const { data } = await movieService.getById(movieId);
            return data;
        } catch (error) {
            throw error;
        }
    }
);

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovie.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchMovie.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movie = action.payload;
            })
            .addCase(fetchMovie.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const { reducer: movieReducer } = movieSlice;
