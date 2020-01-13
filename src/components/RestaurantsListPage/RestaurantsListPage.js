import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import RestaurantCard from '../RestaurantCard/RestaurantCard';

const RestourantsListPage = ({ restaurantsData, loadRestaurants }) => {
  useEffect(() => loadRestaurants(), []);

  return (
    <div className="restaurant-list">
      {restaurantsData.map(({
        uuid,
        title,
        heroImageUrl,
        categories,
        etaRange,
      }) => (
        <RestaurantCard
          key={uuid}
          uuid={uuid}
          title={title}
          imageUrl={heroImageUrl}
          categories={categories}
          deliveryTime={etaRange.text}
        />
      ))}
    </div>
  );
};

RestourantsListPage.propTypes = {
  restaurantsData: PropTypes.arrayOf(PropTypes.shape({})),
  loadRestaurants: PropTypes.func.isRequired,
};

RestourantsListPage.defaultProps = {
  restaurantsData: [],
};

export default RestourantsListPage;
