import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Header from "./shared/Header/Header";

import SearchBox from "./Search/SearchBox";
import SavedMovies from "./SavedMovies/SavedMovies";
import PopularMovies from "./PopularMovies/PopularMovies";
import {Snackbar, Alert} from '@mui/material';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const movies = JSON.parse(window.localStorage.getItem("saved-movies"));
    if (movies && Array.isArray(movies)) {
      
      setMovies(movies);
    }
  }, [])

   const handleClose = useCallback((event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenModal(false);
  }, []);
  
  const handleAddMovie = useCallback((movie) => {
    setMovies((prevMovies) => {
      window.localStorage.setItem(
            "saved-movies",
            JSON.stringify([...prevMovies, movie])
      )
      return [...prevMovies, movie]})
    setOpenModal(true)

  }, []);

  const handleDeleteMovie =useCallback( (id) => {
    setMovies((prevMovies) => {
      const remainedMovies = prevMovies.filter((item) => item.id !== id)
      window.localStorage.setItem(
        "saved-movies",
        JSON.stringify(remainedMovies)
      );
      window.localStorage.setItem(
        id,
        JSON.stringify([
          { id: 0, active: false, raited: false },
          { id: 1, active: false, raited: false },
          { id: 2, active: false, raited: false },
          { id: 3, active: false, raited: false },
          { id: 4, active: false, raited: false },
        ])
      );

      return remainedMovies
    })

  },[]);

    return (
      <div className="App">
        <Header />
        <Snackbar open={openModal} autoHideDuration={6000} onClose={handleClose} anchorOrigin = {{ vertical: 'bottom', horizontal: 'left' }}>
          <Alert onClose={handleClose} severity="success">
            Movie added in My List!
          </Alert>
        </Snackbar>
        <SearchBox 
          onMovieAdd={handleAddMovie}
          savedMovies = {movies}
        />
        <PopularMovies />
        <SavedMovies
          savedMovies={movies}
          onMovieDelete={handleDeleteMovie}
        />
      </div>
    );
}

export default App;