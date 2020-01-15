import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

const RestourantsListPage = ({
  restaurantsData,
  loadRestaurants,
  error,
  isLoading,
}) => {
  useEffect(() => loadRestaurants(), []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

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
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

RestourantsListPage.defaultProps = {
  restaurantsData: [],
  error: null,
  isLoading: false,
};

export default RestourantsListPage;
