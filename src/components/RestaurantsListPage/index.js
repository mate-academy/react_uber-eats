import { connect } from 'react-redux';
import { RestaurantsListPage } from './RestaurantsListPage';
import { loadLocationsVariants } from '../../store/actions';
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
    locationsVariants: state.locationsVariants,
  }),
  {
    loadLocationsVariants,
  },
)(RestaurantsListPage);

export { ImprovedRestaurantsListPage as RestaurantsListPage };
