import { connect } from 'react-redux';
import RestaurantsListPage from './RestaurantsListPage';
import { getRestaurantsList,
  loadRestaurantsList,
  getIsLoading }
  from '../../store/index';

const mapStateToProps = state => ({
  restaurantsList: getRestaurantsList(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  loadRestaurantsList: () => dispatch(loadRestaurantsList()),
});

const connectedRestaurantsListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsListPage);

export { connectedRestaurantsListPage as RestaurantsListPage };
