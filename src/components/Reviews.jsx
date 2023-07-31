import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetailsReviews } from 'services/getMovies';

const Reviews = () => {
  const [Reviews, setReviews] = useState(null);
  const { movieDetailsId } = useParams();

  useEffect(() => {
    getMovieDetailsReviews(movieDetailsId)
      .then(res => setReviews(res))
      .catch(error => console.log(error));
  }, [movieDetailsId]);

  if (!Reviews) {
    return;
  }

  return (
    <ul>
      {Reviews.length
        ? Reviews.map(({ author, content }) => (
            <li key={author}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        : 'We don`t have any reviews for this movie.'}
    </ul>
  );
};

export default Reviews;
