import React from 'react';
import { ErrorProps, ErrorDefault } from '../PropTypes';

export const Error = ({ message }) => (
  <div className="error">
    <p className="error__text">
      {message}
    </p>
    <a href="/" className="error__link">
      Return home
    </a>
  </div>
);

Error.propTypes = ErrorProps;
Error.defaultProps = ErrorDefault;
