import React, { useEffect, useState , useRef, useCallback} from "react";
import { searchMovies } from "../../shared/API";
import styles from "./SearchBox.module.css";
import MovieList from "../MovieList/MovieList";
import { TextField, Snackbar, Alert } from "@mui/material";
import { useDebounce } from "../../utils/customHooks";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../../store/movieSlice";


const SearchBox = () => {
  
  const [term, setTerm] = useState("");
  const searchedTerm = useDebounce(term, 500);
  const [movies, setMovies] = useState([]);

  const savedMovies = useSelector(state => state.movie.movies)
  const openModal = useSelector((state) => state.movie.isOpenModal);

  const dispatch = useDispatch()

  const inputRef = useRef(null)
  
  useEffect(()=>{
    inputRef.current.focus()
  }, [])

  useEffect( () => {
    if(searchedTerm) {
      searchMovies(searchedTerm).then((res) => setMovies(res.data.results))
    } else if (searchedTerm === "") {
      setMovies([]);
    }
  }, [searchedTerm])

  const localMovieAdd = useCallback((movie) => {
    dispatch(movieActions.addMovie(movie));
  }, [dispatch]);

  const handleClose = useCallback(
    (event, reason) => {
      if (reason === "clickaway") {
        return;
      }

      dispatch(movieActions.handdleModalClose());
    },
    [dispatch]
  );

  console.log(searchedTerm)

  return (
    <div >
      <Snackbar
          open={openModal}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Alert onClose={handleClose} severity="success">
            Movie added in My List!
          </Alert>
        </Snackbar>
      <div>
        <TextField
          id="filled-search"
          label="Search for a movie..."
          type="search"
          variant="filled"
          className={styles.search}
          inputRef={inputRef}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
      </div>
      <MovieList 
              movies={movies} 
              onMovieAdd={localMovieAdd} 
              savedMovies = {savedMovies}
      />

    </div>
  );
};

export default SearchBox;
