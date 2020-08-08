import React from 'react';
import styles from '../../styles/modules/ctabutton.module.scss';

const CtaButton = ({text}: {text: string}) => {
  return (
    <button className={styles.button}>
      {text}
    </button>
  );
};

export default CtaButton;