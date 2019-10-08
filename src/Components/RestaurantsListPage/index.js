import { connect } from 'react-redux';
import { RestaurantsListPage } from './RestaurantsListPage';
import { loadRestaurants } from '../../store/actions';
import {
  selectRestaurantList,
  selectRestaurantListError,
  selectIsLoading,
} from '../../store/selectors';

const mapDispatchToProps = dispatch => ({
  loadRestaurants: () => dispatch(loadRestaurants()),
});

const ImprovedRestaurantsListPage = connect(
  state => ({
    restaurantsListData: selectRestaurantList(state),
    error: selectRestaurantListError(state),
    isLoading: selectIsLoading(state),
  }),
  mapDispatchToProps
)(RestaurantsListPage);

export { ImprovedRestaurantsListPage as RestaurantsListPage };
