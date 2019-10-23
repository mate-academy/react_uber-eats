import { connect } from 'react-redux';
import { CardItem } from './CardItem';
import {
  selectRestaurantCurency,
} from '../../store/selector';

const mapState2Props = state => ({
  restaurantCurency: selectRestaurantCurency(state),
});

const Enhanced = connect(
  mapState2Props,
)(CardItem);

export { Enhanced as CardItem };
