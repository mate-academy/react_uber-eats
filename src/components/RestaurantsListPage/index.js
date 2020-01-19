import { connect } from 'react-redux';
import RestaurantsListPage from './RestaurantsListPage';
import { loadRestaurantsAction } from '../../store/actions';
import {
  selectRestaurantsList,
  selectRestaurantsLoadError,
  selectIsLoading,
} from '../../store/selectors';

const mapStateToProps = state => ({
  restaurantsListData: selectRestaurantsList(state),
  error: selectRestaurantsLoadError(state),
  isLoading: selectIsLoading(state),
});

const mapDispatchToProps = {
  loadRestaurants: loadRestaurantsAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsListPage);
