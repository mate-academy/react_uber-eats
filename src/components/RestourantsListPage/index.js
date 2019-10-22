import { connect } from 'react-redux';
import { loadRestaurants } from '../../store/actions';
import RestourantsListPage from './RestourantsListPage';
import {
  selectRestaurantList,
  selectRestaurantsListLoading,
  selectRestaurantsListError,
} from '../../store/selectors';

const mapStateToProps = state => ({
  restaurantsListData: selectRestaurantList(state),
  hasError: selectRestaurantsListError(state),
  loadingRestaurants: selectRestaurantsListLoading(state),
});

const mapDispatchToProps = dispatch => ({
  loadRestaurants: () => dispatch(loadRestaurants()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestourantsListPage);
