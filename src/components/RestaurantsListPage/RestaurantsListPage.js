import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { RestaurantCard } from '../RestaurantCard/RestaurantCard';
import './RestaurantsListPage.scss';
import Loader from '../Loader/Loader';

const RestaurantsListPage = ({
  restaurantsList,
  loadRestaurantsList,
  isLoading,
}) => {
  useState(
    () => {
      loadRestaurantsList();
    }, []
  );

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const filteredRestaurants = restaurantsList
    .filter(restaurant => (params.get('location')
      ? restaurant.citySlug === params.get('location')
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

RestaurantsListPage.propTypes = {
  restaurantsList: PropTypes.arrayOf(PropTypes.object),
  loadRestaurantsList: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

RestaurantsListPage.defaultProps = {
  restaurantsList: [],
};
export default RestaurantsListPage;
