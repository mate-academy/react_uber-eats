import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantCard.scss';

export const tra = 'tra';

export const RestaurantCard = (props) => {
  const {
    heroImageUrl,
    title,
    categories,
    etaRange,
    // uuid,
  } = props;

  return (
    <div className="restaurant-card">
      <img src={heroImageUrl} alt={title} className="restaurant-card__img" />
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
  heroImageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  etaRange: PropTypes.string,
  // uuid: PropTypes.string.isRequired,
};

RestaurantCard.defaultProps = {
  categories: [],
  etaRange: '',
};
