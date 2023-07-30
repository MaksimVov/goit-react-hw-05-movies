import { useState, useEffect } from 'react';
import { getMovies } from 'services/getMovies';
import { MoviesQueryList } from 'components/MoviesQueryList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(res => setMovies(res));
  }, []);

  return <MoviesQueryList moviesList={movies} />;
};

export default Home;
