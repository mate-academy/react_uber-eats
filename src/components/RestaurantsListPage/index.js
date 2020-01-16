import { connect } from 'react-redux';
import RestaurantsListPage from './RestaurantsListPage';
import { loadRestaurants } from '../../store/actions';
import { selectRestaurantsList } from '../../store/selectors';

function mapStateToProps(state) {
  return {
    restaurantsListData: selectRestaurantsList(state),
  };
}

const mapDispatchToProps = {
  loadRestaurants,
};

export const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsListPage);
