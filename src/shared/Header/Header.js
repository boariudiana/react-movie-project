import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Movie🎥List</Typography>
          <ul className={styles.ul}>
            <li>
              <NavLink activeClassName={styles.active} to='/home'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} to='/my-list'>
                My List
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} to='/popular-movies'>
                Popular Movies
              </NavLink>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
