import React, { useMemo } from "react";
import "./RestaurantsList.scss";
import { useSelector } from "react-redux";
import { getRestaurants } from "../../store/actionTypes";
import { RestaurantCard } from "../RestaurantCard";
import { useLocation } from "react-router";

export const RestaurantsList = () => {
  const restaurants = useSelector(getRestaurants);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = useMemo(() => searchParams.get("query") || "", [searchParams]);

  const filterRestaurantsBySearch = (
    query: string,
    restaurants: RestaurantCard[]
  ) => {
    if (!query) {
      return restaurants;
    }

    return restaurants.filter((restaurant) =>
      restaurant.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
  };

  const visibleRestaurants = useMemo(
    () => filterRestaurantsBySearch(query, restaurants),
    [query, restaurants]
  );

  return (
    <div className="RestaurantsList container RestList">
      {visibleRestaurants.length === 0 && (
        <img
          src="images/notFoundRestaurants.png"
          alt="not found"
          className="RestaurantsList__NotFound"
        />
      )}
      {visibleRestaurants.map((restaurant) => (
        <RestaurantCard restaurant={restaurant} />
      ))}
    </div>
  );
};
