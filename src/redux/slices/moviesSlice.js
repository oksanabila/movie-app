import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import { moviesService, genreService } from '../../services';


const initialState = {
    movies: [],
    genres: [],
    currentPage: 1,
    isLoading: false,
    error: null,
};

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (page, { dispatch }) => {
        try {
            const { data } = await moviesService.getByNumber(page);
            return data.results;
        } catch (error) {
            dispatch(setError(error.message));
            throw error;
        }
    }
);

export const fetchGenres = createAsyncThunk(
    'movies/fetchGenres',
    async (_, { dispatch }) => {
        try {
            const { data } = await genreService.getAll();
            return data.genres;
        } catch (error) {
            dispatch(setError(error.message));
            throw error;
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(fetchGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
            });
    },
});

export const {reducer: moviesReducer, actions: {setError, setCurrentPage}} = moviesSlice;
