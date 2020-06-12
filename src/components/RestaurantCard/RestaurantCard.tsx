import React from "react";
import "./RestaurantCard.scss";
import { Link } from "react-router-dom";
import { RestaurantCardInfo } from "../RestaurantCardInfo";

interface Props {
  restaurant: RestaurantCard;
}

export const RestaurantCard: React.FC<Props> = ({ restaurant }) => (
  <Link to={`/${restaurant.uuid}`} className="RestaurantCard__Link">
    <div className="RestaurantCard">
      <img
        src={restaurant.heroImageUrl}
        alt={restaurant.title}
        className="RestaurantCard__Image"
      />
      <RestaurantCardInfo
        title={restaurant.title}
        etaRange={restaurant.etaRange.text}
        categories={restaurant.categories}
      />
    </div>
  </Link>
);
