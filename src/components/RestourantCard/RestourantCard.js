import React from 'react';
import PropTypes from 'prop-types';
import './RestourantCard.scss';

export const RestourantCard = props => {
  const {
    imageURL,
    title,
    categories,
    etaRange,
    uuid
   } = props;

  return(
    <div className="restourant-card">
      <img src={imageURL} alt={title} className="restourant-card__img"/>
      <h2 className="restourant-card__title">{title}</h2>
      <div className="restourant-card__categories">
        {categories.join(' • ')}
      </div>
      <div className="restourant-card__eta">
        {etaRange}
      </div>
    </div>
  );
}

RestourantCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  etaRange: PropTypes.string,
  uuid: PropTypes.string.isRequired
};

RestourantCard.defaultProps = {
  categories: [],
  etaRange: '',
};
