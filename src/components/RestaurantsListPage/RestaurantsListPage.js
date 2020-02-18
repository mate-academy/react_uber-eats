import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import './RestaurantsListPage.scss';
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';

const RestaurantsListPage = ({
  restaurantsListData,
  loadRestaurants,
  isLoading,
  error,
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
    <div className="restaurants-list">
      {restaurantsListData.map((restaurant) => {
        const { uuid, title, heroImageUrl, categories, etaRange } = restaurant;

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
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

RestaurantsListPage.defaultProps = {
  restaurantsListData: [],
  error: null,
  isLoading: false,
};

export default RestaurantsListPage;
