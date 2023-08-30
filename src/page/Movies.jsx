import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, CssBaseline, Typography } from '@mui/material';
import { getMoviesQuery } from 'services/getMovies';
import { MoviesQueryList } from 'components/MoviesQueryList';
import { SearchBar } from 'components/SearchBar';
import { getMoviesQueryResult } from 'services/getMovies';
import { LoadMoreBtn } from 'components/loadMoreBtn/LoadMoreBtn';

const Movies = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalResults, setTotalResults] = useState(null);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);

  const moviesId = searchParams.get('query');

  const handleSubmit = query => {
    setSearchParams({ query });
    setPage(1);
    setAllMovies([]);
  };

  useEffect(() => {
    if (!moviesId) {
      return;
    }
    getMoviesQueryResult(moviesId).then(res =>
      setTotalResults(res.total_results)
    );

    getMoviesQuery(moviesId, page)
      .then(newMovies => {
        setAllMovies(prevMovies => {
          const uniqueMovies = newMovies.filter(
            newMovie =>
              !prevMovies.some(prevMovie => prevMovie.id === newMovie.id)
          );

          const remainingPages = Math.ceil(totalResults / 19) - page;
          setShowBtn(remainingPages > 0);

          return [...prevMovies, ...uniqueMovies];
        });
      })
      .catch(error => console.log(error));
  }, [moviesId, page, totalResults]);

  const loadMoreBtn = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <CssBaseline />
      <Container>
        <Typography variant="h4" gutterBottom>
          Explore Movies
        </Typography>
        <SearchBar onSubmit={handleSubmit} />
        {totalResults ? <MoviesQueryList moviesList={allMovies} /> : <h1></h1>}

        {showBtn && <LoadMoreBtn onClick={loadMoreBtn} />}
      </Container>
    </>
  );
};

export default Movies;
