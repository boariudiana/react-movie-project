import React from "react";
import {Card, CardActionArea, CardHeader, CardActions, Avatar, CardMedia, Typography, useMediaQuery, Button, Grid} from "@mui/material";
import styles from "./SavedMovies.module.css";
import DeleteIcon from '@mui/icons-material/Delete';
import MovieRaiting from "../MovieRaiting/MovieRaiting";
import theme from "../../src/theme";


const MovieItem = (props) => {
  const {movie} = props;
  const imgUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  return (
    <li className={styles.movie_item}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Card className={styles.root}>
          <CardHeader
            avatar={
              <Avatar alt="vote-range" src="" sx={{backgroundColor: "#032541",}}>
                {movie.vote_average}
              </Avatar>
            }
            title={movie.title}
            subheader={movie.release_date}
          />
          <CardActionArea>
            <CardMedia
              className={styles.media}
              image={
                movie.poster_path ? imgUrl : 'https://i.imgur.com/Z2MYNbj.png/large_movie_poster.png'
              }
              title={movie.title}
            />
          </CardActionArea>
          <CardActions className={styles.cardActions}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={() => props.onMovieDelete(movie.id)}
            >
              Delete
            </Button>
            <MovieRaiting movie={movie} />
          </CardActions>
        </Card>
      </Grid>
    </li>
  );
};

const SavedMovies = (props) => {
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={styles.movie_container}>
      {props.savedMovies && props.savedMovies.length > 0 ? (
        <ul className={styles.container}>
          <Grid
            container
            spacing={2}
            direction={matches ? "row" : "column"}
            justify="center"
            alignItems="center"
          >
            {props.savedMovies.map((movie) => (
              <MovieItem
                movie={movie}
                key={movie.id}
                onMovieDelete={props.onMovieDelete}
              />
            ))}
          </Grid>
        </ul>
      ) : (
        <Typography
           variant= "h6"
           color = "initial"
            >No saved movies</Typography>
      )}
    </div>
  );
};
export default SavedMovies;
