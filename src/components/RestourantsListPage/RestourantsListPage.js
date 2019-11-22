import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RestaurantCard from '../RestautantCard/RestautantCard';
import './RestourantsListPage.scss';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

const DEFAULT_ETA_RANGE = '20 - 30 min';

export default class RestaurantsListPage extends Component {
  componentDidMount() {
    const { loadRestaurants } = this.props;

    loadRestaurants();
  }

  render() {
    const {
      restaurantsData,
      error,
      isLoading,
    } = this.props;

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
              etaRange={etaRange.text || DEFAULT_ETA_RANGE}
            />
          );
        })}
      </div>
    );
  }
}

RestaurantsListPage.propTypes = {
  restaurantsData: PropTypes.arrayOf(PropTypes.shape({})),
  loadRestaurants: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

RestaurantsListPage.defaultProps = {
  restaurantsData: [],
  error: null,
  isLoading: false,
};
