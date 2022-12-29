import { createSlice } from '@reduxjs/toolkit';

const savedMovies = localStorage.getItem("saved-movies") ? JSON.parse(
    window.localStorage.getItem(
      "saved-movies"
    )
  ) : [];
  

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movies: savedMovies,
    isOpenModal: false,
  },
  reducers: {
    addMovie(state, action) {
        window.localStorage.setItem(
            "saved-movies",
            JSON.stringify([
              ...state.movies,
              action.payload,
            ])
          )
        state.movies= [...state.movies, action.payload]
        state.isOpenModal = true;
    },
    deleteMovie(state, action) {
        const remainedMovies =
        state.movies.filter(
          (item) =>
            item.id !== action.payload
        );
      window.localStorage.setItem(
        "saved-movies",
        JSON.stringify(remainedMovies)
      );
      window.localStorage.setItem(
        action.payload,
        JSON.stringify([
          {
            id: 0,
            active: false,
            raited: false,
          },
          {
            id: 1,
            active: false,
            raited: false,
          },
          {
            id: 2,
            active: false,
            raited: false,
          },
          {
            id: 3,
            active: false,
            raited: false,
          },
          {
            id: 4,
            active: false,
            raited: false,
          },
        ])
      );
      state.movies = remainedMovies
    },
    handdleModalClose(state, action) {
        state.isOpenModal = false
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice;