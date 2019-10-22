import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantCard.scss';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export const RestaurantCard = (props) => {
  const {
    imageUrl,
    title,
    categories,
    etaRange,
    uuid,
  } = props;

  return (
    <Link to={`${uuid}`}>
      <div className="restaurant-card">
        <img src={imageUrl} alt={title} className="restaurant-card__img" />
        <h2 className="restaurant-card__title">{title}</h2>
        <div className="restaurant-card__categories">
          {categories.join(' \u2022 ')}
        </div>
        <div className="restaurant-card__eta">
          {etaRange}
        </div>
      </div>
    </Link>
  );
};

RestaurantCard.propTypes = {
  uuid: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  etaRange: PropTypes.string,
};

RestaurantCard.defaultProps = {
  categories: [],
  etaRange: 'd',
};
