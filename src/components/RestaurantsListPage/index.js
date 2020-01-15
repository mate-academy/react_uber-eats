import { connect } from 'react-redux';
import { loadRestaurants } from '../../store/actions';
import { selectRestaurantsList,
  selectRestaurantListError,
  selectIsLoading } from '../../store/selectors';
import RestaurantsListPage from './RestaurantsListPage';

const mapStateToProps = state => ({
  restaurantsData: selectRestaurantsList(state),
  error: selectRestaurantListError(state),
  isLoading: selectIsLoading(state),
});

const mapDispatchToProps = {
  loadRestaurants,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantsListPage);
