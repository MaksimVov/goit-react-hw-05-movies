import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesQuery } from 'services/getMovies';
import { MoviesQueryList } from 'components/MoviesQueryList';
import { SearchBar } from 'components/SearchBar';

const Movies = () => {
  const [search, setSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const moviesId = searchParams.get('moviesId') ?? '';

  const updateQueryString = e => {
    const moviesIdValue = e.target.value;
    if (moviesIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ moviesId: moviesIdValue });
  };

  const handleSubmit = async (e, query) => {
    e.preventDefault();
    setSearchParams({ moviesId: query });
  };

  useEffect(() => {
    try {
      getMoviesQuery(moviesId).then(res => setSearch(res));
    } catch (error) {
      console.error(error);
    }
  }, [searchParams]);

  return (
    <>
      <SearchBar
        onHandleSubmit={handleSubmit}
        onMoviesId={moviesId}
        onUpdateQueryString={updateQueryString}
      />
      <MoviesQueryList moviesList={search} />
    </>
  );
};

export default Movies;
