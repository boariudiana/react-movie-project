import React from "react";
import { Button, Paper, Grid, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import styles from "./MovieList.module.css";

const MovieList = (props) => {
 console.log('savedmovie', props.savedMovies);
  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {props.movies.map((movie) => (
          <Paper key = {movie.id}>
            <li className={styles.listItem}  >
              <Grid container >
                <Grid item md={4} xs={6} sm = {5} align = "left">
                  <img
                    onClick = {() => props.onClickedMovie(movie.id)}
                    src={movie.poster_path ?`https://image.tmdb.org/t/p/w154${movie.poster_path}`:   'https://i.imgur.com/Z2MYNbj.png/large_movie_poster.png'}
                    alt={movie.title}
                    
                  />
                </Grid>
                <Grid   container item 
                     md={8} xs={6} sm = {7} 
                     direction ="row"
                      justify= "flex-start"
                       alignItems = "flex-start"
                       >
                  <Grid item md={12} sm = {12} xs={12} lg = {12} xl = {12} >
                    <Typography 
                      variant="h6"
                      align="left"
                      color="primary"
                    >
                      {movie.title}
                    </Typography>
                    <Typography 
                       variant = "body1"
                       align= "left"
                       color = "initial"
                       
                    >
                      ({movie.release_date})
                      </Typography>
                      <Typography 
                       noWrap
                        className = {styles.overview}
                         variant = "body1"
                         align= "left">{movie.overview}</Typography>
                  </Grid> 
                  <Grid item md={4} xs={4} sm = {4} lg = {3} xl = {2}>
                    <Button
                      className={styles.addMovie}
                      color="secondary"
                      onClick={(e) => {
                        e.preventDefault();
                        props.onMovieAdd(movie);
                      }}
                      disabled = {props.savedMovies.filter((item) => item.id === movie.id).length > 0 ? true: false }
                    >
                     <AddIcon/>
                     Add movie
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </li>
          </Paper>
        ))}
      </ul>
    </div>
  );
};
export default MovieList;
