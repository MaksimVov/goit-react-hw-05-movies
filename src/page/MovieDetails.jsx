import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/getMovies';
import styles from '../styles.module.css';

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
    return;
  }

  const { poster_path, original_title, overview, genres } = movieDetails;

  return (
    <>
      <button>
        <Link to={backLinkLocationRef.current}>Go back</Link>
      </button>
      <div className={styles.movieDetails}>
        <img
          className={styles.movieDetailsImg}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2MQQS_knNjQPkLzTyixP5F51QTPzXcOU6VkpoAPAe9Q&s`
          }
          alt=""
        />
        <div>
          <h1>{original_title}</h1>
          <h2>overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul className={styles.movieDetailsList}>
            {genres && genres.map(({ name }) => <li key={name}>{name}</li>)}
          </ul>
        </div>
      </div>
      <div className={styles.additionalInformation}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
