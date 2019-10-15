import { connect } from 'react-redux';
import { RestaurantsListPage } from './RestaurantsListPage';
import { loadRestaurants } from '../../store/actions';
import {
  selectRestaurantList,
  selectRestaurantListError,
  selectIsLoading,
} from '../../store/selectors';

const ImprovedRestaurantsListPage = connect(
  state => ({
    restaurantsListData: selectRestaurantList(state),
    error: selectRestaurantListError(state),
    isLoading: selectIsLoading(state),
  }),
  {
    loadRestaurants,
  },
)(RestaurantsListPage);

export { ImprovedRestaurantsListPage as RestaurantsListPage };
