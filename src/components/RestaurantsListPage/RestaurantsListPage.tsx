import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import './RestaurantsListPage.scss';
import Loader from '../Loader/Loader';
import { IRestaurantsListPage } from '../../types';
const RestaurantsListPage = ({
  restaurantsList = [],
  loadRestaurantsList,
  isLoading,
  locationId,
}: IRestaurantsListPage) => {

  const location = useLocation();

  useEffect(
    () => {
      loadRestaurantsList(locationId);
    }, [loadRestaurantsList, locationId]
  );

  const params = new URLSearchParams(location.search);
  const filteredRestaurants = restaurantsList
    .filter(restaurant => (params.get('title')
      ? restaurant.slug.includes(params.get('title')!)
      : true));

  if (isLoading) {
    return (<Loader />);
  }

  return (
    <div className="restaurants-list">
      {filteredRestaurants && filteredRestaurants.map(restaurant => (
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
