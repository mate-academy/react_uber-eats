import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import RestaurantPage from '../RestaurantPage/RestaurantPage';
import { getRestaurant,
  getIsLoading,
  getCurrentUuid,
  getLocation,
}
  from '../../store/selectors';
import { loadRestaurant } from '../../store/thunks';
import { RootState, Actions } from '../../types'

const mapStateToProps = (state: RootState) => ({
  restaurant: getRestaurant(state),
  isLoading: getIsLoading(state),
  currentUuid: getCurrentUuid(state),
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, unknown, Actions>) => ({
  loadRestaurant: (uuid: string) => dispatch(loadRestaurant(uuid)),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

const connectedRestaurantPage = connector(RestaurantPage);

export { connectedRestaurantPage as RestaurantPage };
