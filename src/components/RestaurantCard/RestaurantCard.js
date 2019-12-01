import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './RestaurantCard.scss';

export const RestaurantsCard = (props) => {
  const {
    imageUrl,
    title,
    categories,
    etaRange,
    uuid,
  } = props;

  return (
    <Link to={`/restaurants/${uuid}`}>
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
    </Link>
  );
};

RestaurantsCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  etaRange: PropTypes.string,
  uuid: PropTypes.string.isRequired,
};

RestaurantsCard.defaultProps = {
  categories: [],
  etaRange: '',
};
