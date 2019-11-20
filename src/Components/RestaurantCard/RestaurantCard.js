import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantCard.scss';

const RestaurantCard = ({
  imageUrl,
  categories,
  title,
  etaRange,
}) => (
  <div className="restaurant-card">
    <img
      src={imageUrl}
      alt={title}
      className="restaurant-card__img"
    />
    <h2 className="restaurant-card__title">
      {title}
    </h2>
    <div className="restaurant-card__categories">
      {categories.join(' • ')}
    </div>
    <div className="restaurant-card__eta-range">
      {etaRange}
    </div>
  </div>
);

RestaurantCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  etaRange: PropTypes.string,
};

RestaurantCard.defaultProps = {
  categories: [],
  etaRange: '',
};

export default RestaurantCard;
