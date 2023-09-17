import { configureStore } from '@reduxjs/toolkit';

import {moviesReducer, movieReducer} from "./slices";


const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movie: movieReducer,
    },
});

export {store};
