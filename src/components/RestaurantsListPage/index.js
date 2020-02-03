import { connect } from 'react-redux';
import { RestaurantsListPage } from './RestaurantsListPage';
import { loadRestaurants } from '../../store/actions';
import {
  selectIsLoading,
  selectRestaurantsList,
  selectRestaurantsListError,
} from '../../store/selectors';

const mapStateToProps = state => ({
  restaurantsData: selectRestaurantsList(state),
  error: selectRestaurantsListError(state),
  isLoading: selectIsLoading(state),
});

const mapDispatchToProps = {
  loadRestaurants,
};

const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantsListPage);

export { Enhanced as RestaurantsListPage };
