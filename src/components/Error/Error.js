import React from 'react';
import PropTypes from 'prop-types';

import './Error.scss';

export const Error = (props) => {
  const { message } = props;

  return (
    <div className="error">
      <p className="error__text">something wrong</p>
      <p className="error__text">
        {message}
      </p>
      <a href="/" className="error__link">
        Go to main page
      </a>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: 'Sorry, something went wrong',
};
