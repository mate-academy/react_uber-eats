import { connect } from 'react-redux';
import { RestaurantPage } from './RestaurantPage';
import { loadRestaurant, openModalWindow } from '../../store/actions';
import {
  selectorRestaurant,
} from '../../store/selectors';

function mapState2Props(state) {
  return {
    restaurantData: selectorRestaurant(state),
  };
}

const mapDispatch2Props = (dispatch) => {
  return ({
    loadRestaurant: uuid => dispatch(loadRestaurant(uuid)),
    openModalWindow: () => dispatch(openModalWindow()),
  });
};

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props,
)(RestaurantPage);

export { Enhanced as RestaurantPage };
