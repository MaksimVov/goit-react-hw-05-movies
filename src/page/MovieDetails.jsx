// import { useState, useEffect, useRef, Suspense } from 'react';
// import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
// import { getMovieDetails } from 'services/getMovies';
// import styles from '../styles.module.css';

// const MovieDetails = () => {
//   const [movieDetails, setMovieDetails] = useState(null);
//   const { movieDetailsId } = useParams();

//   const Location = useLocation();
//   const backLinkLocationRef = useRef(Location.state?.from ?? '/');

//   useEffect(() => {
//     getMovieDetails(movieDetailsId)
//       .then(res => {
//         setMovieDetails(res);
//       })
//       .catch(error => console.error('Error fetching movie details:', error));
//   }, [movieDetailsId]);

//   if (!movieDetails) {
//     return;
//   }

//   const { poster_path, original_title, overview, genres } = movieDetails;

//   return (
//     <>
//       <button>
//         <Link to={backLinkLocationRef.current}>Go back</Link>
//       </button>
//       <div className={styles.movieDetails}>
//         <img
//           className={styles.movieDetailsImg}
//           src={
//             poster_path
//               ? `https://image.tmdb.org/t/p/w500${poster_path}`
//               : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2MQQS_knNjQPkLzTyixP5F51QTPzXcOU6VkpoAPAe9Q&s`
//           }
//           alt=""
//         />
//         <div>
//           <h1>{original_title}</h1>
//           <h2>overview</h2>
//           <p>{overview}</p>
//           <h3>Genres</h3>
//           <ul className={styles.movieDetailsList}>
//             {genres && genres.map(({ name }) => <li key={name}>{name}</li>)}
//           </ul>
//         </div>
//       </div>
//       <div className={styles.additionalInformation}>
//         <p>Additional information</p>
//         <ul>
//           <li>
//             <Link to={'cast'}>Cast</Link>
//           </li>
//           <li>
//             <Link to={'reviews'}>Reviews</Link>
//           </li>
//         </ul>
//       </div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Outlet />
//       </Suspense>
//     </>
//   );
// };

// export default MovieDetails;

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/getMovies';
import { styled } from '@mui/system';
import { Button, Typography, Paper } from '@mui/material';

const BackButton = styled(Button)({
  backgroundColor: '#E50914',
  color: 'white',
  '&:hover': {
    backgroundColor: '#C90813',
  },
});

const MovieContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
  marginBottom: '20px',
});

const MoviePoster = styled('img')({
  width: '300px',
  height: '450px',
  borderRadius: '8px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
});

const MovieDetailsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

const GenresList = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  gap: '8px',
  margin: 0,
  padding: 0,
});

const GenreItem = styled('li')({
  fontSize: '14px',
  color: '#E50914', // Change to Netflix red
});

const AdditionalInfo = styled(Paper)({
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '8px',
  background: 'transparent', // No background
});

const NavLinkStyled = styled(Link)({
  color: '#E50914',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
  transition: 'color 0.3s',
  '&:hover': {
    color: '#C90813',
  },
});

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieDetailsId } = useParams();

  const Location = useLocation();
  const backLinkLocationRef = useRef(Location.state?.from ?? '/');

  useEffect(() => {
    getMovieDetails(movieDetailsId)
      .then(res => {
        setMovieDetails(res);
      })
      .catch(error => console.error('Error fetching movie details:', error));
  }, [movieDetailsId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { poster_path, original_title, overview, genres } = movieDetails;

  return (
    <>
      <BackButton component={Link} to={backLinkLocationRef.current}>
        Go back
      </BackButton>
      <MovieContainer>
        <MoviePoster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2MQQS_knNjQPkLzTyixP5F51QTPzXcOU6VkpoAPAe9Q&s`
          }
          alt=""
        />
        <MovieDetailsContainer>
          <Typography variant="h4">{original_title}</Typography>
          <Typography variant="h6">Overview</Typography>
          <Typography>{overview}</Typography>
          <Typography variant="subtitle1">Genres</Typography>
          <GenresList>
            {genres &&
              genres.map(({ name }) => (
                <GenreItem key={name}>{name}</GenreItem>
              ))}
          </GenresList>
        </MovieDetailsContainer>
      </MovieContainer>
      <AdditionalInfo>
        <NavLinkStyled to={`cast`}>Cast</NavLinkStyled>
        <NavLinkStyled to={`reviews`}>Reviews</NavLinkStyled>
      </AdditionalInfo>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
