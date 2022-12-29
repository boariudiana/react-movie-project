import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./shared/Header/Header";

import SearchBox from "./components/Search/SearchBox";
import SavedMovies from "./components/SavedMovies/SavedMovies";
import PopularMovies from "./components/PopularMovies/PopularMovies";
import {Snackbar, Alert} from '@mui/material';
import { movieActions } from "./store/movieSlice";

const App = () => {
  const dispatch = useDispatch()

  const openModal = useSelector((state) => state.movie.isOpenModal)
  console.log('isOpen', openModal)
  const handleClose = useCallback((event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(movieActions.handdleModalClose());
  }, [dispatch]);
  

    return (
      <div className="App">
        <Header />
        <Snackbar open={openModal} autoHideDuration={6000} onClose={handleClose} anchorOrigin = {{ vertical: 'bottom', horizontal: 'left' }}>
          <Alert onClose={handleClose} severity="success">
            Movie added in My List!
          </Alert>
        </Snackbar>
        <SearchBox />
        <PopularMovies />
        <SavedMovies
        />
      </div>
    );
}

export default App;