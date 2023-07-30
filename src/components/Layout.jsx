import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styles from '../styles.module.css';

export const Layout = () => {
  return (
    <>
      <header>
        <ul className={styles.headerList}>
          <li className={styles.headerItem}>
            <NavLink className={styles.headerItemLink} to="/">
              Home
            </NavLink>
          </li>
          <li className={styles.headerItem}>
            <NavLink className={styles.headerItemLink} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
