import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ message }) => (
  <div className="error">
    <p className="error__text">
      {message}
    </p>

    <a href="/" className="error__link">
      Go to Home
    </a>
  </div>
);

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: 'Sorry, something went wrong!!!',
};

export default Error;
