import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './Error.module.scss';

export const Error = memo(({ massage }) => (
  <div className={styles.error}>
    <p className={styles.text}>{massage}</p>
    <a href="/" className={styles.link}>Go to home</a>
  </div>
));

Error.propTypes = {
  massage: PropTypes.string,
};

Error.defaultProps = {
  massage: '',
};
