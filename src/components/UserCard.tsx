import React from 'react';
import styles from '../styles/modules/usercard.module.scss';
import CtaButton from '../lib/ui/CtaButton';
import { Link } from 'react-router-dom';

const UserCard = ({ id, name, email }: {id: number, name: string, email: string}) => {
  return (
    <figure className={styles['user-card']}>
      <div className={styles['user-card__thumb-wrapper']}>
        <img height="60px" src="/assets/person.svg" alt={name} />
      </div>
      <figcaption className={styles["user-card__caption"]}>
        <strong className={styles['user-card__name']}>{name}</strong>
        <span className={styles['user-card__email']}>{email}</span>
        <div className={styles['user-card__cta']}>
          <Link to={`/details/${id}`}>
            <CtaButton text="See Details" />
          </Link>
        </div>
      </figcaption>
    </figure>
  );
};

export default UserCard;