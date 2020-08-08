import React from 'react';
import UserCard from '../components/UserCard';
import styles from '../styles/modules/list.module.scss';

const List = () => {
  return (
    <article className={styles.list}>
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </article>
  );
};

export default List;