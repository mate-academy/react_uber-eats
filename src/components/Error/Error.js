import React from 'react';
import PropTypes from 'prop-types';
import './Error.scss';

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

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: 'Sorry, something went wrong(',
};
