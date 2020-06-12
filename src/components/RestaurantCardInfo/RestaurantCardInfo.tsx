import React from "react";
import "./RestaurantCardInfo.scss";

interface Props {
  title: string;
  etaRange: string;
  categories: string[];
}

export const RestaurantCardInfo: React.FC<Props> = ({ title, etaRange, categories }) => {
  return (
    <>
      <p className="RestaurantCardInfo__Title">{title}</p>
      <p className="RestaurantCardInfo__Categories">
        {categories.join(" • ")}
      </p>
      <div className="RestaurantCardInfo__TimeContainer">
        <p className="RestaurantCardInfo__TimeText">{etaRange}</p>
      </div>
    </>
  );
};
