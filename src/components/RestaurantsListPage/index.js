import { connect } from 'react-redux';
import { loadRestaurants } from '../../store/actions';
import { RestaurantsListPage } from './RestaurantsListPage';
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

const Enhanced
  = connect(mapStateToProps, { loadRestaurants })(RestaurantsListPage);

export { Enhanced as RestaurantsListPage };
