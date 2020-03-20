import React from 'react';
import propTypes from 'prop-types';
import './styles/restoItem.scss';

const RestoItem = ({ store }) => (
  <a href="#!" className="store">
    <a href="#!" className="store-images">
      <img src={`${store.heroImageUrl}`} alt="mac" />
    </a>
    <a href="#!" className="store-name">
      <h2 className="store-name__headline">{store.title}</h2>
    </a>
    <div className="store-type">
      {store.categories.join(' • ')}
    </div>
    <div className="store-time">
      {store.etaRange !== null ? store.etaRange.text : 'ASAP'}
    </div>
  </a>
);

RestoItem.propTypes = {
  store: propTypes.shape().isRequired,
};

export default RestoItem;
