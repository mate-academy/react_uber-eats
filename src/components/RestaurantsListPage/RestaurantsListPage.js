/* eslint-disable import/prefer-default-export */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RestaurantCard } from '../RestaurantCard/RestaurantCard';
import './RestaurantsListPage.scss';
import { Loader } from '../Loader';
import { Error } from '../Error';

const DEFAULT_ETA_RANGE = '20 - 30 min';

export class RestaurantsListPage extends Component {
  componentDidMount() {
    const { loadRestaurants } = this.props;

    loadRestaurants();
  }

  render() {
    console.log('restaurant loaaaad');
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
      <div className="content">
        <div className="restaurant-list">
          {restaurantsData.map((restaurant) => {
            const {
              uuid,
              title,
              categories,
              etaRange,
              heroImageUrl,
            } = restaurant;

            return (
              <RestaurantCard
                key={uuid}
                title={title}
                imageUrl={heroImageUrl}
                etaRange={etaRange ? etaRange.text : DEFAULT_ETA_RANGE}
                categories={categories}
                uuid={uuid}
              />
            );
          })}
        </div>
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
