import React, { memo } from 'react';
import styles from './Loader.module.scss';

export const Loader = memo(() => (
  <div className={styles.loaderContainer}>
    <div className={styles.balls}>
      <div />
      <div />
      <div />
    </div>
  </div>
));
