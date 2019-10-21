import { connect } from 'react-redux';
import { RestaurantListPage } from './RestaurantListPage';
import { loadRestaurants } from '../../store/actions';
import {
  selectRestaurantsList,
  selectRestaurantsListError,
  selectIsLoading,
} from '../../store/selectors';

function mapStateToProps(state) {
  return {
    restaurantsData: selectRestaurantsList(state),
    error: selectRestaurantsListError(state),
    isLoading: selectIsLoading(state),
  };
}

const mapDispatchToProps = {
  loadRestaurants,
};

const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantListPage);

export { Enhanced as RestaurantListPage };
