import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { styled } from '@mui/system';

const MoviesList = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  padding: 0,
  margin: 0,
});

const MovieItem = styled('li')({
  marginRight: '20px',
  marginBottom: '20px',
  width: '200px',
  textAlign: 'center',
  '& a': {
    textDecoration: 'none',
    color: 'black',
    display: 'block',
    '&:hover': {
      color: '#E50914',
    },
  },
});

const MovieImage = styled('img')({
  width: '100%',
  height: '300px',
  objectFit: 'cover',
});

export const MoviesQueryList = ({ moviesList }) => {
  const location = useLocation();

  return (
    <MoviesList>
      {moviesList &&
        moviesList.map(({ title, name, id, poster_path }) => (
          <MovieItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <MovieImage
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt=""
              />
              {title || name}
            </Link>
          </MovieItem>
        ))}
    </MoviesList>
  );
};
