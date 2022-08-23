import { configureStore } from "@reduxjs/toolkit";
import authReducer from './AuthSlice'
import movieReducer from './MoviesSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        movie: movieReducer
    }
});

export default store;