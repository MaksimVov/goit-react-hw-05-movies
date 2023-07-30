import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export const MoviesQueryList = ({ moviesList }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {moviesList.map(({ title, name, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
