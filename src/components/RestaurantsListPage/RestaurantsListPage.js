import React, { useEffect } from 'react';
import Proptypes from 'prop-types';

export const RestaurantsListPage = ({ restaurantsData, loadRestaurants }) => {
  useEffect(() => {
    loadRestaurants();
  }, []);

  return (
    <div>
      <pre>
        {JSON.stringify(restaurantsData, null, 4)}
      </pre>
    </div>
  );
};

RestaurantsListPage.propTypes = {
  restaurantsData: Proptypes.arrayOf(Proptypes.shape({})),
  loadRestaurants: Proptypes.func.isRequired,
};

RestaurantsListPage.defaultProps = {
  restaurantsData: [],
};
