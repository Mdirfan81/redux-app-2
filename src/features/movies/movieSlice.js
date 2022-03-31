import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../../common/api/movieAPI";
import { APIKey } from "../../common/api/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    // const dispatch = useDispatch();
    const response = await movieAPI.get(
      `?apikey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
    // dispatch(addMovies(response.data));
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "Friends";
    // const dispatch = useDispatch();
    const response = await movieAPI.get(
      `?apikey=${APIKey}&s=${seriesText}&type=series`
    );
    return response.data;
    // dispatch(addMovies(response.data));
  }
);

const initialState = {
  movies: {},
  shows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload; // this is in redux tollkit, this approach is followed. not like below.
      //   {...state, payload} // in the initial redux it will make a copy and change the state
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetch successfully!.");
      return { ...state, movies: payload };
    },

    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected.");
      // return { ...state, movie: payload };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetch successfully of Shows!.");
      return { ...state, shows: payload };
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies; //state.nameOfTheReducer.stateName/propertyName
export const getAllShows = (state) => state.movies.shows; //state.nameOfTheReducer.stateName/propertyName
export default movieSlice.reducer;
