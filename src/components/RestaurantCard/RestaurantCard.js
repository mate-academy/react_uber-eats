import React from 'react';
import './RestaurantCard.scss';
import PropTypes from 'prop-types';

export const RestaurantCard = ({
  imageUrl,
  title,
  categories,
  etaRange,
  uuid,
}) => (
  <div className="restaurant-card">
    <img src={imageUrl} alt={title} className="restaurant-card__img" />
    <h2 className="restaurant-card__title">{title}</h2>
    <div className="restaurant-card__categories">
      {categories.join(' • ')}
    </div>
    <div className="restaurant-card__eta">
      {etaRange}
    </div>
  </div>
);

RestaurantCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  etaRange: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};
