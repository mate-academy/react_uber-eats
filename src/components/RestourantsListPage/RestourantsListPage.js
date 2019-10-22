import './RestourantsListPage.scss';

import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Error from '../Error';
import RestaurantCard from '../RestaurantCard';

class RestourantsListPage extends Component {
  componentDidMount() {
    this.props.loadRestaurants();
  }

  render() {
    const {
      restaurantsListData,
      hasError,
      loadingRestaurants,
    } = this.props;

    return (loadingRestaurants && (
      <Loader
        className="loader"
        type="ThreeDots"
        color="#5fb709"
        height={100}
        width={100}
      />
    ))
    || (
      hasError
      && (
        <Error message={hasError} />
      ))
    || (
      <div className="restaurants-list">
        {restaurantsListData.map((restaurant) => {
          const {
            uuid,
            heroImageUrl,
            title,
            categories,
            etaRange,
            feedback,
          } = restaurant;

          return (
            <RestaurantCard
              key={uuid}
              uuid={uuid}
              title={title}
              categories={categories}
              etaRange={etaRange.text}
              feedback={feedback}
              imageUrl={heroImageUrl}
            />
          );
        })}
      </div>
    );
  }
}

RestourantsListPage.propTypes = {
  restaurantsListData: PropTypes.arrayOf(PropTypes.shape({
  })),
  loadRestaurants: PropTypes.func.isRequired,
  hasError: PropTypes.string,
  loadingRestaurants: PropTypes.bool,
};

RestourantsListPage.defaultProps = {
  restaurantsListData: [],
  hasError: '',
  loadingRestaurants: false,
};

export default RestourantsListPage;
