import React, { useState } from "react";
import "./RestaurantCard.scss";
import { Link } from "react-router-dom";
import { RestaurantCardInfo } from "../RestaurantCardInfo";
import cn from "classnames";

interface Props {
  restaurant: RestaurantCard;
}

export const RestaurantCard: React.FC<Props> = ({ restaurant }) => {
  const [imgVisible, setImgVisible] = useState(false);

  return (
    <Link to={`/${restaurant.uuid}`} className="RestaurantCard__Link">
      <div className="RestaurantCard">
        {!imgVisible && (
          <div className="RestaurantCard__Spinner">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        <img
          src={restaurant.heroImageUrl}
          alt={restaurant.title}
          className={cn({
            RestaurantCard__Image: true,
            RestaurantCard__ImageVisible: imgVisible,
          })}
          onLoad={() => setImgVisible(true)}
        />
        <RestaurantCardInfo
          title={restaurant.title}
          etaRange={restaurant.etaRange.text}
          categories={restaurant.categories}
        />
      </div>
    </Link>
  );
};
