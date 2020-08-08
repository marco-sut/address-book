import React, { ReactNode } from 'react';
import styles from '../../styles/modules/content.module.scss';

const Content = ({children}: {children: ReactNode}) => {
  return (
    <section className={styles.content}>
      <div className={styles.content__inner}>
        {children}
      </div>
    </section>
  );
};

export default Content;