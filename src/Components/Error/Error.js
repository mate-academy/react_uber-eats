import React from 'react';
import PropTypes from 'prop-types';
import './Error.scss';

export const Error = ({ massage }) => (
  <div className="error">
    <p className="error__text">{massage}</p>
    <a href="/" className="error__link">Go to home</a>
  </div>
);

Error.propTypes = {
  massage: PropTypes.string,
};

Error.defaultProps = {
  massage: '',
};
