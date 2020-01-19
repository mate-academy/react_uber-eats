import React from 'react';
import PropTypes from 'prop-types';

import './Error.scss';

const Error = ({ message }) => (
  <div className="error">
    <p className="error__text">
      {message}
    </p>
    <a href="/" className="error__link">
      Try again
    </a>
  </div>
);

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: 'Something went wrong',
};

export default Error;
