import { connect } from 'react-redux';
import RestaurantsListPage from './RestaurantsListPage';
import { getRestaurantsList, getIsLoading, getLocation } from '../../store/selectors';
import { loadRestaurantsList } from '../../store/thunks';
import { ThunkDispatch } from 'redux-thunk';
import { RootState, Actions } from '../../types';

const mapStateToProps = (state: RootState) => ({
  restaurantsList: getRestaurantsList(state),
  isLoading: getIsLoading(state),
  locationId: getLocation(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, unknown, Actions>) => ({
  loadRestaurantsList: (value: string) => dispatch(loadRestaurantsList(value)),
});

const connectedRestaurantsListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsListPage);

export { connectedRestaurantsListPage as RestaurantsListPage };
