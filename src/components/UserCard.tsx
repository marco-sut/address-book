import React from 'react';
import styles from '../styles/modules/usercard.module.scss';
import CtaButton from '../lib/ui/CtaButton';
import { Link } from 'react-router-dom';

const UserCard = () => {
  return (
    <figure className={styles['user-card']}>
      <div className={styles['user-card__thumb-wrapper']}>
        <img height="60px" src="/assets/person.svg" alt="Clementine Bauch" />
      </div>
      <figcaption className={styles["user-card__caption"]}>
        <strong className={styles['user-card__name']}>Clementine Bauch</strong>
        <span className={styles['user-card__email']}>Nathan@yesenia.net</span>
        <div className={styles['user-card__cta']}>
          <Link to="/details/1000">
            <CtaButton text="See Details" />
          </Link>
        </div>
      </figcaption>
    </figure>
  );
};

export default UserCard;