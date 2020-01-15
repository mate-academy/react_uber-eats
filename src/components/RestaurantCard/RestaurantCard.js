import React from 'react';
import { PropTypes } from 'prop-types';

const RestaurantCard = ({
  imageUrl,
  title,
  categories,
  deliveryTime,
  uuid,
}) => (
  <div className="restaurant-card">
    <img src={imageUrl} alt={title} className="restaurant-card__img" />
    <h2 className="restaurant-card__title">{title}</h2>
    <div className="restaurant-card__categories">
      {categories.join(' • ')}
    </div>
    <div className="restaurant-card__time">
      {deliveryTime}
    </div>
  </div>
);

RestaurantCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  deliveryTime: PropTypes.string,
  uuid: PropTypes.string.isRequired,
};

RestaurantCard.defaultProps = {
  categories: [],
  deliveryTime: '',
};

export default RestaurantCard;
