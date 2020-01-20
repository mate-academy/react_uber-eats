import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

const RestaurantCard = ({
  title,
  heroImageUrl,
  categories,
  etaRange,
}) => (
  <div className="restaurant-card">
    <img
      src={heroImageUrl}
      alt={title}
      className="restaurant-card__img"
    />
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
  heroImageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  etaRange: PropTypes.string,
};

RestaurantCard.defaultProps = {
  categories: [],
  etaRange: '',
};

export default RestaurantCard;
