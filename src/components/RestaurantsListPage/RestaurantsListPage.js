import React, { useEffect } from 'react';
import Proptypes from 'prop-types';
import { RestaurantCard } from '../RestaurantCard';
import './RestaurantsListPage.scss';
import { Loader } from '../Loader';
import { Error } from '../Error';

const DEFAULT_ETA_RANGE = '20 - 30 min';

export const RestaurantsListPage = ({
  restaurantsData,
  loadRestaurants,
  error,
  isLoading,
}) => {
  useEffect(() => {
    loadRestaurants();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="restaurant-list">
      {restaurantsData.map((restaurant) => {
        const {
          uuid,
          title,
          heroImageUrl,
          categories,
          etaRange,
        } = restaurant;

        return (
          <RestaurantCard
            key={uuid}
            uuid={uuid}
            title={title}
            imageUrl={heroImageUrl}
            categories={categories}
            etaRange={etaRange ? etaRange.text : DEFAULT_ETA_RANGE}
          />
        );
      })}
    </div>
  );
};

RestaurantsListPage.propTypes = {
  restaurantsData: Proptypes.arrayOf(Proptypes.shape({})),
  loadRestaurants: Proptypes.func.isRequired,
  error: Proptypes.string,
  isLoading: Proptypes.bool,
};

RestaurantsListPage.defaultProps = {
  restaurantsData: [],
  error: null,
  isLoading: false,
};
