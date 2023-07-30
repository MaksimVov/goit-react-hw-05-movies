import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetailsActor } from 'services/getMovies';
import styles from '../styles.module.css';

const Cast = () => {
  const [Cast, setCast] = useState([]);
  const { movieDetailsId } = useParams();

  useEffect(() => {
    getMovieDetailsActor(movieDetailsId)
      .then(res => setCast(res))
      .catch(error => console.log(error));
  }, []);

  return (
    <ul>
      {Cast.map(({ profile_path, original_name, character }) => (
        <li>
          <img
            className={styles.castImg}
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt=""
          />
          <p className={styles.castText}>{original_name}</p>
          <p className={styles.castText}>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
