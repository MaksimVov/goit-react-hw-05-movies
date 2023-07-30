import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { getMoviesQuery } from 'services/getMovies';
import { MoviesQueryList } from 'components/MoviesQueryList';

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

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const moviesData = await getMoviesQuery(moviesId);
      setSearch(moviesData);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={moviesId} onChange={updateQueryString} />
        <button type="submit">Click</button>
      </form>
      <MoviesQueryList moviesList={search} />
    </>
  );
};

export default Movies;
