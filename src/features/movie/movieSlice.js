import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommend: null,
    newDisney: null,
    original: null,
    trending: null
}

const movieSlice = createSlice({ 
    name: 'movie',
    initialState,
    reducers:{
        setMovies: (state,action) => {
            state.recommend = action.payload.recommend;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
            state.newDisney = action.payload.newDisney;

        },
    },
});

export const {setMovies} = movieSlice.actions

export const selectRecommend = state => state.movie.recommend;
export const selectnewDisney = state => state.movie.newDisney;
export const selectoriginal = state => state.movie.original;
export const selecttrending = state => state.movie.trending;

export default movieSlice.reducer;