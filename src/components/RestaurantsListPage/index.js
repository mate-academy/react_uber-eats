import { connect } from 'react-redux';
import { RestaurantsListPage } from './RestaurantsListPage';
import { loadRestaurants } from '../../store/actions';
import {
  selectorRestaurants,
  selectIsLoading,
  selectRestaurantsListError,
} from '../../store/selectors';

function mapState2Props(state) {
  return {
    restaurantsData: selectorRestaurants(state),
    isLoading: selectIsLoading(state),
    error: selectRestaurantsListError(state),
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
