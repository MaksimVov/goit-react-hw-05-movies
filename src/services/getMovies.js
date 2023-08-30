import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDI5NDI3NDZkZGQwNzIzZTk5YzYyNDVmZDkwM2JlZCIsInN1YiI6IjY0YmQyNTNhMGVkMmFiMDBlMmRhYjY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.usFVKO1fi_bibknfzjxz84ON7pNr7gg38J8efPhFlyU';

export async function getMovies() {
  const { data } = await axios.get('/trending/movie/day');
  return data.results;
}

export async function getMoviesQuery(query, page) {
  const { data } = await axios.get(`/search/movie?query=${query}&page=${page}`);
  return data.results;
}

export async function getMoviesQueryResult(query) {
  const { data } = await axios.get(`/search/movie?query=${query}`);
  return data;
}

export async function getMovieDetails(movieId) {
  const { data } = await axios.get(`movie/${movieId}`);
  return data;
}

export async function getMovieDetailsActor(movieId) {
  const { data } = await axios.get(`movie/${movieId}/credits`);
  return data.cast;
}

export async function getMovieDetailsReviews(movieId) {
  const { data } = await axios.get(`movie/${movieId}/reviews`);
  return data.results;
}
