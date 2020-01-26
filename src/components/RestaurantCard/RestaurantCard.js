import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantCard.scss';

export const RestaurantCard = (props) => {
  const {
    imageUrl, categories,
    title, etaRange,
  } = props;

  return (
    <div className="restaurant-card">
      <img
        src={imageUrl}
        alt={title}
        className="restaurant-card__img"
      />
      <h2>{title}</h2>
      <div className="restaurant-card__categories">
        {categories.join(' • ')}
      </div>
      <div className="restaurant-card__eta">
        {etaRange}
      </div>
      {title}
    </div>
  );
};

RestaurantCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  etaRange: PropTypes.string,
};

RestaurantCard.defaultProps = {
  categories: [],
  etaRange: '',
};
