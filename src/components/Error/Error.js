import React from 'react';
import PropTypes from 'prop-types';
import './Error.scss';

export const Error = props => (
  <div className="error">
    <p className="error__text">
      {props.message}
    </p>
    {props.children}
  </div>
);

Error.propTypes = {
  message: PropTypes.string,
  children: PropTypes.shape({}),
};

Error.defaultProps = {
  message: 'Sorry, something went wrong(',
  children: {},
};
