import { connect } from 'react-redux';
import { RestaurantsListPage } from './RestaurantsListPage';
import { loadRestaurants } from '../../store/actions';
import {
  selectIsLoading,
  selectRestaurants,
  selectRestaurantsListError,
} from '../../store/selectors';

const mapStateToProps = state => ({
  restaurantsData: selectRestaurants(state),
  loadingError: selectRestaurantsListError(state),
  isLoading: selectIsLoading(state),
});

const Enhanced = connect(
  mapStateToProps,
  { loadRestaurants }
)(RestaurantsListPage);

export { Enhanced as RestaurantsListPage };
