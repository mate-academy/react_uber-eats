import { connect } from 'react-redux';

import { RestaurantsListPage } from './RestaurantsListPage';
import { loadRestaurants } from '../../store/actions';
import {
  selectRestaurantsList,
  selectRestaurantsListError,
  selectIsLoading,
} from '../../store/selector';

const mapState2Props = state => ({
  restaurantsListData: selectRestaurantsList(state),
  error: selectRestaurantsListError(state),
  isLoading: selectIsLoading(state),
});

const mapDispatch2Props = {
  loadRestaurants,
};

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props
)(RestaurantsListPage);

export { Enhanced as RestaurantsListPage };
