import React, { useEffect, useState , useRef, useCallback} from "react";
import { searchMovies } from "../shared/API";
import styles from "./SearchBox.module.css";
import MovieList from "../MovieList/MovieList";
import { TextField } from "@mui/material";
import { useDebounce } from "../utils/customHooks";


const SearchBox = ({onMovieAdd, savedMovies }) => {

  const [term, setTerm] = useState("");
  const searchedTerm = useDebounce(term, 500);
  const [movies, setMovies] = useState([]);

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
    setMovies([]);
    onMovieAdd(movie);
  }, [onMovieAdd]);

  return (
    <div >
      <div>
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
