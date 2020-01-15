import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import './RestaurantsListPage.scss';

const DEFAULT_ETA_RANGE = '20 - 30 min';

const RestaurantsListPage = ({ loadRestaurants, restaurantsListData }) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <div className="restaurants-list">
      {restaurantsListData.map((restaurant) => {
        const {
          heroImageUrl, title, categories, etaRange, uuid,
        } = restaurant;

        return (
          <RestaurantCard
            key={uuid}
            imageUrl={heroImageUrl}
            title={title}
            categories={categories}
            etaRange={etaRange ? etaRange.text : DEFAULT_ETA_RANGE}
            uuid={uuid}
          />
        );
      })}
    </div>
  );
};

RestaurantsListPage.propTypes = {
  restaurantsListData: PropTypes.arrayOf(PropTypes.shape()),
  loadRestaurants: PropTypes.func.isRequired,
};

RestaurantsListPage.defaultProps = {
  restaurantsListData: [],
};

export default RestaurantsListPage;
