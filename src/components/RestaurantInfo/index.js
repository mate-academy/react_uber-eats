import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getRestaurantInfo } from '../../store';

import './restaurant-info.scss';

const RestaurantInfo = () => {
  const { url } = useRouteMatch();

  const {
    title,
    categories = [],
    address,
    image,
  } = useSelector(getRestaurantInfo);

  return (
    <div
      className="restaurant__image"
      style={{ backgroundImage: `url(${image})` }}
    >
      <section className="restaurant-info">
        <h1 className="restaurant-info__title">{title}</h1>
        <p className="restaurant-info__categories">{categories.join(' • ')}</p>
        <p className="time">35 - 45 min</p>
        <address className="restaurant-info__address ">{address}</address>
        <span className="restaurant-info__point">•</span>
        <Link to={url} className="restaurant-info__link">More&nbsp;info</Link>
      </section>
    </div>
  );
};

export default RestaurantInfo;
