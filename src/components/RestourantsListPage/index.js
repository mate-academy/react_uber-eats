import { connect } from 'react-redux';
import RestourantsListPage from './RestourantsListPage';
import { loadRestaurants } from '../../store/actions';
import {
  selectIsLoading,
  selectRestaurantsList,
  selectRestautantsListError,
} from '../../store/selectors';

function mapState2Props(state) {
  return {
    restaurantsData: selectRestaurantsList(state),
    error: selectRestautantsListError(state),
    isLoading: selectIsLoading(state),
  };
}

const mapDispatch2Props = {
  loadRestaurants,
};

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props,
)(RestourantsListPage);

export { Enhanced as RestaurantsListPage };
