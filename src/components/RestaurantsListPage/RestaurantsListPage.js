import React, { useEffect } from 'react';
import Proptypes from 'prop-types';
import { RestaurantCard } from '../RestaurantCard';
import './RestaurantsListPage.scss';

const DEFAULT_ETA_RANGE = '20 - 30 min';

export const RestaurantsListPage = ({ restaurantsData, loadRestaurants }) => {
  useEffect(() => {
    loadRestaurants();
  }, []);

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
};

RestaurantsListPage.defaultProps = {
  restaurantsData: [],
};
