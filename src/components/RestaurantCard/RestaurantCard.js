import React from 'react';
import './RestaurantCard.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const RestaurantCard = (props) => {
  const {
    imageUrl,
    title,
    categories,
    uuid,
    etaRange,
  } = props;

  return (
    <>
      <Link
        className="restaurant-card"
        to={`/${uuid}`}
      >
        <img src={imageUrl} alt={title} className="restaurant-card__img" />
        <h2 className="restaurant-card__title">
          {title}
        </h2>
        <div className="restaurant-card__categories">
          {categories.join(' • ')}
        </div>
        <div className="restaurant-card__eta">
          {etaRange}
        </div>
      </Link>
    </>
  );
};

RestaurantCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  uuid: PropTypes.string.isRequired,
  etaRange: PropTypes.string,
};

RestaurantCard.defaultProps = {
  categories: [],
  etaRange: '',
};
