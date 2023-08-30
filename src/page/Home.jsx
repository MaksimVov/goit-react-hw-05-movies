import React, { useState, useEffect } from 'react';
import { getMovies } from 'services/getMovies';
import { MoviesQueryList } from 'components/MoviesQueryList';

import { Container, CssBaseline } from '@mui/material';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(res => setMovies(res));
  }, []);

  return (
    <>
      <CssBaseline />
      <Container>
        <MoviesQueryList moviesList={movies} />
      </Container>
    </>
  );
};

export default Home;
