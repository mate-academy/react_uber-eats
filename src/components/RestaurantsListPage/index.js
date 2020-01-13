import { connect } from 'react-redux';
import { loadRestaurants } from '../../store/actions';
import { RestaurantsListPage } from './RestaurantsListPage';
import { selectRestaurantsList } from '../../store/selectors';

function mapState2Props(state) {
  return {
    restaurantsData: selectRestaurantsList(state),
  };
}

const mapDispatch2Props = {
  loadRestaurants,
};

const Enhanced
  = connect(mapState2Props, mapDispatch2Props)(RestaurantsListPage);

export { Enhanced as RestaurantsListPage };
