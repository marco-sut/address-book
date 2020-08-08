import React from 'react';
import styles from '../../styles/modules/navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navbar__logo}>
        <img height="36px" src="/assets/logo.svg" alt="UBS Logo" />
      </Link>
      <ul>
        <li>
        <Link to="/">Address Book</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;