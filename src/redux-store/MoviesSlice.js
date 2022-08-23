import data from "../third-assessment/Movies";
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movie',
    initialState: {
        data: data
    },
    reducers: {
        addMovie: (state, action) => {
            state.data.push(action.payload)
        },
        
        removeMovie: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload.id);
        },
    }
}
);
export default moviesSlice.reducer;
export const { addMovie, removeMovie } = moviesSlice.actions; 

