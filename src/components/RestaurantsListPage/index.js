import { connect } from 'react-redux';
import { RestaurantsListPage } from './RestaurantsListPage';
import { loadRestaurants } from '../../store/actions';
import {
  selectRestaurantsList,
  selectRestaurantsListError,
  selectIsLoading,
} from '../../store/selectors';

const mapStateToProps = state => ({
  restaurantsData: selectRestaurantsList(state),
  error: selectRestaurantsListError(state),
  isLoading: selectIsLoading(state),
});

const Enhanced = connect(
  mapStateToProps,
  { loadRestaurants }
)(RestaurantsListPage);

export { Enhanced as RestaurantsListPage };
