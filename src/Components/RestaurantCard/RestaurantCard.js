import React from 'react';
import './RestaurantCard.scss';
import { NavLink } from 'react-router-dom';
import {
  RestaurantCardProps,
  RestaurantCardDefault,
} from '../PropTypes';

export const RestaurantCard = (props) => {
  const {
    imageUrl,
    title,
    categories,
    uuid,
    etaRange,
    setRestaurantId,
  } = props;

  return (
    <>
      <NavLink
        className="restaurant-card"
        to={`/${uuid}`}
        onClick={() => setRestaurantId(uuid)}
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
      </NavLink>
    </>
  );
};

RestaurantCard.propTypes = RestaurantCardProps;
RestaurantCard.defaultProps = RestaurantCardDefault;
