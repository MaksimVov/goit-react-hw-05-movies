import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../page/Home'));
const Movies = lazy(() => import('../page/Movies'));
const MovieDetails = lazy(() => import('page/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieDetailsId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
