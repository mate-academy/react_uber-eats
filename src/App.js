import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadRestaurants } from './store/thunk';

import RestaurantsListPage from './components/RestourantsListPage';
import './App.css';

// eslint-disable-next-line no-shadow
const App = ({ loadRestaurants }) => {
  useEffect(() => {
    loadRestaurants();
  }, []);

  return (
    <>
      <h1>React Uber eats</h1>
      <RestaurantsListPage />
    </>
  );
};

export default connect(null, { loadRestaurants })(App);

App.propTypes = {
  loadRestaurants: PropTypes.func.isRequired,
};
