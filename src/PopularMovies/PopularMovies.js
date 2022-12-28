import { React, useEffect, useState } from "react";
import { getPopularMovies } from "../shared/API";
import { Grid, Typography } from "@mui/material";
import styles from "./PopularMovies.module.css";
import theme from "../theme";

const PopularMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies().then((res) => {
            setMovies(res.data.results);
        });
    }, []);

    return (
        <div className={styles.layout}>
            <Typography variant="h6" color="primary" align="center" style={{padding: '20px'}}>
                Most popular movies
            </Typography>
            <div sx= {{
                 display: "flex",
                 flexWrap: "wrap",
                 justifyContent: "space-around",
                 overflow: "hidden",
                 backgroundColor: theme.palette.background.paper,
            }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 1, }}
                >
                    {movies.map((movie) => (
                        <Grid item xs={6} sm={4} md={2} key={movie.poster_path}>
                            <Typography
                                variant="h3"
                                color="primary"
                                key={movie.poster_path}
                            >
                                <img
                                    src={`http://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                                    alt={movie.title}
                                />
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default PopularMovies;
