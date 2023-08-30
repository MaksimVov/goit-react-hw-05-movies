// // import { useState, useEffect } from 'react';
// // import { getMovies } from 'services/getMovies';
// // import { MoviesQueryList } from 'components/MoviesQueryList';

// // const Home = () => {
// //   const [movies, setMovies] = useState([]);

// //   useEffect(() => {
// //     getMovies().then(res => setMovies(res));
// //   }, []);

// //   return <MoviesQueryList moviesList={movies} />;
// // };

// // export default Home;

// import { useState, useEffect } from 'react';
// import { getMovies } from 'services/getMovies';
// import { MoviesQueryList } from 'components/MoviesQueryList';

// import { Container, CssBaseline } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles(theme => ({
//   container: {
//     paddingTop: theme.spacing(6),
//   },
// }));

// const Home = () => {
//   const classes = useStyles();
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     getMovies().then(res => setMovies(res));
//   }, []);

//   return (
//     <>
//       <CssBaseline />
//       <Container className={classes.container}>
//         <MoviesQueryList moviesList={movies} />
//       </Container>
//     </>
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import { getMovies } from 'services/getMovies';
import { MoviesQueryList } from 'components/MoviesQueryList';

import { Container, CssBaseline } from '@mui/material';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(res => setMovies(res));
  }, []);

  return (
    <>
      <CssBaseline />
      <Container>
        <MoviesQueryList moviesList={movies} />
      </Container>
    </>
  );
};

export default Home;
