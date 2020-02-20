import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadRestaurants, setTotalRestaurants } from '../../store/actions';
import { selectRastaurantsList } from '../../store/selectors';
import RestaurantCard from '../restaurantCard/restaurantCard';

const RestaurantsList = (
  { loadData,
    restaurants,
    query,
    restaurantsPerPage,
    currentPage,
    totalRestaurants }
) => {
  useEffect(() => {
    loadData();
  }, []);

  let filteredRestaurants = '';

  query
    ? filteredRestaurants = restaurants
      .filter(restaurant => restaurant.title.includes(query))
    : filteredRestaurants = restaurants;

  const lengthPagination = filteredRestaurants.length;

  useEffect(() => {
    totalRestaurants(lengthPagination);
  }, [filteredRestaurants.length]);

  const indexOfLAstRestaurant = currentPage * restaurantsPerPage;
  const indexOfFirstRestaurant = indexOfLAstRestaurant - restaurantsPerPage;

  const currentRestaurants = filteredRestaurants
    .slice(indexOfFirstRestaurant, indexOfLAstRestaurant);

  return (
    <>
      <h2
        className="restaurants_list__heading"
      >
        London restaurants
      </h2>
      {currentRestaurants.map((restaurant) => {
        const {
          categories,
          heroImageUrl,
          title,
          uuid,
          etaRange,
        } = restaurant;

        return (
          <RestaurantCard
            categories={categories}
            heroImageUrl={heroImageUrl}
            title={title}
            uuid={uuid}
            etaRange={etaRange.text}
            key={uuid}
          />
        );
      })}
    </>
  );
};

const mapState2Props = state => ({
  restaurants: selectRastaurantsList(state),
  query: state.query,
  currentPage: state.currentPage,
  restaurantsPerPage: state.restaurantsPerPage,
});

const mapDispatch2Props = ({
  loadData: loadRestaurants,
  totalRestaurants: setTotalRestaurants,
});

RestaurantsList.propTypes = {
  loadData: PropTypes.func.isRequired,
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string,
  restaurantsPerPage: PropTypes.number,
  currentPage: PropTypes.number,
  totalRestaurants: PropTypes.func.isRequired,
};

RestaurantsList.defaultProps = {
  query: '',
  restaurantsPerPage: 10,
  currentPage: 1,
};

export default connect(mapState2Props, mapDispatch2Props)(RestaurantsList);
