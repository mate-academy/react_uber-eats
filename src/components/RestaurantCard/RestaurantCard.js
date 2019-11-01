import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantCard.scss';

const RestaurantCard = (props) => {
  const {
    imageUrl,
    title,
    categories,
    etaRange,
    // uuid,
  } = props;

  return (
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
};

RestaurantCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  etaRange: PropTypes.string,
  // uuid: PropTypes.string.isRequired,
};

RestaurantCard.defaultProps = {
  categories: [],
  etaRange: '',
};

export default RestaurantCard;
