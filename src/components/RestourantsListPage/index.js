import { connect } from 'react-redux';
import { RestaurantsListPage } from './RestaurantsListPage';
import { loadRestaurants } from '../../store/actions';
import {selectIsLoading, selectRestaurantList, selectRestaurantListError} from '../../store/selectors';

function mapState2Props(state) {
  return {
    restaurantsListData: selectRestaurantList(state),
    error: selectRestaurantListError(state),
    isLoading: selectIsLoading(state),
  };
}

const mapDispatch2Props = {
  loadRestaurants,
};

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props,
)(RestaurantsListPage);

export { Enhanced as RestaurantsListPage };
