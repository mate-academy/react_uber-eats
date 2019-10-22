import { connect } from 'react-redux';
import { CardItem } from './CardItem';
import {
  selectRestaurantCurency,
} from '../../store/selector';

const mapStateToProps = state => ({
  restaurantCurency: selectRestaurantCurency(state),
});

const Enhanced = connect(
  mapState2Props,
)(CardItem);

export { Enhanced as CardItem };
