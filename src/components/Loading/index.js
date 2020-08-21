import React from 'react';
import PropTypes from 'prop-types';

import './loading.scss';

const Loading = ({ isSmall }) => (
  <div className={isSmall ? 'small-loading' : 'loading'}>
    <div className="lds-roller">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

Loading.propTypes = {
  isSmall: PropTypes.bool,
};

Loading.defaultProps = {
  isSmall: false,
};

export default Loading;
