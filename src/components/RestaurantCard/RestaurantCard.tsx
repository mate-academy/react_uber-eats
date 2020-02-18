import React from 'react';
import { NavLink } from 'react-router-dom';
import './RestaurantCard.scss';
import { IRestaurantCard } from '../../types';
const RestaurantCard = ({
  imageUrl,
  title,
  categories,
  etaRange,
  uuid,
}: IRestaurantCard) => (
  <div
    className="restaurant-card"
    role="presentation"
  >
    <NavLink to={`/restaurants/${uuid}`}>
      <img src={imageUrl} alt={title} className="restaurant-card__img" />
      <h2 className="restaurant-card__title">{title}</h2>
      <div className="restaurant-card__categories">
        {categories.map((elem, i)=> {
          if(i === 0) return elem[0]
          return elem;
        })
          .join(' • ')}
      </div>
      <div className="restaurant-card__eta">
        {etaRange}
      </div>
    </NavLink>
  </div>
);

export default RestaurantCard;
