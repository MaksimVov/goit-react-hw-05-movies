import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesQuery } from 'services/getMovies';
import { MoviesQueryList } from 'components/MoviesQueryList';
import { SearchBar } from 'components/SearchBar';

const Movies = () => {
  const [search, setSearch] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const moviesId = searchParams.get('query');

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  useEffect(() => {
    if (!moviesId) {
      return;
    }

    getMoviesQuery(moviesId)
      .then(res => setSearch(res))
      .catch(error => console.log(error));
  }, [moviesId]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} onValue={moviesId} />
      <MoviesQueryList moviesList={search} />
    </>
  );
};

export default Movies;
