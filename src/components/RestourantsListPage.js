import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectRestaurantsList } from '../store/selectors';

const RestaurantsListPage = ({ restaurants }) => (
  <pre>
    {JSON.stringify(restaurants, null, 4)}
    {/* {restaurants.map(restaurant =>
       <Restaurant restaurant={restaurant} />)}
       */}
  </pre>
);

const mapStateToProps = state => ({
  restaurants: selectRestaurantsList(state),
});

export default connect(mapStateToProps)(RestaurantsListPage);

RestaurantsListPage.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};
