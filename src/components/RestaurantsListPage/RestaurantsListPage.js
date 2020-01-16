import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import './RestaurantsListPage.scss';

// heroImageUrl, title, categories, etaRange.text, uuid;

const RestaurantsListPage = ({ restaurantsListData, loadRestaurants }) => {
  useEffect(() => {
    loadRestaurants();
  }, []);

  return (
    <div className="restaurant-list">
      {restaurantsListData.map((restaurant) => {
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
            title={title}
            uuid={uuid}
            imageUrl={heroImageUrl}
            categories={categories}
            etaRange={etaRange.text}
          />
        );
      })}
    </div>
  );
};

RestaurantsListPage.propTypes = {
  restaurantsListData: PropTypes.arrayOf(PropTypes.object),
  loadRestaurants: PropTypes.func.isRequired,
};

RestaurantsListPage.defaultProps = {
  restaurantsListData: [],
};

export default RestaurantsListPage;
