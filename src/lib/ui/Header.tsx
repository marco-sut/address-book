import React from 'react';
import styles from '../../styles/modules/header.module.scss';

const Header = ({text}: {text: string}) => {
  return (
    <header className={styles.header}>
      <h1>{text}</h1>
    </header>
  );
};

export default Header;