import React from 'react';
import PropTypes from 'prop-types';

import './Error.scss';

export const Error = (props) => {

  const { message } = props;

  return(
    <div className="error">
      <p className="error__text">
        {message}
        <a href="/" className="error_link">Try again</a>
      </p>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string,
}

Error.defaultProps = {
  message: `Some went wrong`
}
