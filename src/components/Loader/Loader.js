import React from 'react';
import './Loader.scss';

export const Loader = () => (
  <div className="loader-container">
    <div className="lds-ripple">
      <div />
      <div />
    </div>
  </div>
);
