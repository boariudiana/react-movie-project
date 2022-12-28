import axios from 'axios';

const REACT_APP_API_KEY = '55f9174ebea5265515dc6a958c2990ea'

export const searchMovies = (query) => {
  const apiKey = REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US`
  return axios.get(URL)
}

export const popularMovies = () => {
  const apiKey = REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  return axios.get(URL)
}

export const getMovieDetail = (id) => {
  const apiKey = REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
  return axios.get(URL)
}

export const getWatchProvider = (id) => {
  const apiKey = REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${apiKey}`;
  return axios.get(URL)
}