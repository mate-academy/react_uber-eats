import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
// heroImageUrl, title, categories, etaRange.errorMessage, uuid

const DEFAULT_ETA_RANGE = '20 - 30 min';

class RestaurantsListPage extends Component {
  componentDidMount() {
    const { loadRestaurants } = this.props;

    loadRestaurants();
  }

  render() {
    const { restaurantsData } = this.props;

    return (
      <div>
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
              etaRange={etaRange ? etaRange.errorMessage : DEFAULT_ETA_RANGE}
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
};

RestaurantsListPage.defaultProps = {
  restaurantsData: [],
};

export default RestaurantsListPage;
