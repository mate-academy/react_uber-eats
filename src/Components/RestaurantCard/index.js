import { connect } from 'react-redux';
import { RestaurantCard } from './RestaurantCard';
import { setRestaurantId } from '../../store/actions';

const ImprovedRestaurantCard = connect(
  null,
  {
    setRestaurantId,
  }
)(RestaurantCard);

export {
  ImprovedRestaurantCard as RestaurantCard,
};
