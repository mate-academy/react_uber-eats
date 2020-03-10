import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./RestaurantsListPage.scss";
import Loader from "../Loader/Loader";
import { connector } from ".";
import { ConnectedProps } from "react-redux";
import { IRestaurantsList } from "../../types";
const RestaurantsListPage = ({
  restaurantsList = [],
  loadRestaurantsList,
  isLoading,
  locationId,
  currentHash,
}: ConnectedProps<typeof connector>) => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    loadRestaurantsList(locationId);
  }, [loadRestaurantsList, locationId]);

  useEffect(() => {
    history.push("/restaurants" + currentHash.replace("#/restaurants", ""));
  }, []);

  const params = new URLSearchParams(location.search);
  const filteredRestaurants = restaurantsList.filter(
    (restaurant: IRestaurantsList) =>
      params.get("title")
        ? restaurant.slug.includes(params.get("title")!)
        : true,
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="restaurants-list">
      {filteredRestaurants &&
        filteredRestaurants.map((restaurant: IRestaurantsList) => (
          <RestaurantCard
            key={restaurant.uuid}
            uuid={restaurant.uuid}
            title={restaurant.title}
            imageUrl={restaurant.heroImageUrl}
            categories={restaurant.categories}
            etaRange={restaurant.etaRange.text}
          />
        ))}
    </div>
  );
};

export default RestaurantsListPage;
