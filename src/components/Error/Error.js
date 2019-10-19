import './Error.scss';
import React from 'react';
import { PropTypes } from 'prop-types';

const Error = (props) => {
  const { message } = props;

  return (
    <div className="error">
      <h1>{message}</h1>
      <a className="error__link" href="/"> Go to home page</a>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
