import { connect } from 'react-redux';

import { CardItem } from './CardItem';
import {
  selectRestaurantCurency,
} from '../../store/selector';
import { loadMenuItem } from '../../store/actions';

const mapStateToProps = state => ({
  restaurantCurency: selectRestaurantCurency(state),
});

const mapDispatchToProps = dispatch => ({
  createOrder: uuid => dispatch(loadMenuItem(uuid)),
});

const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardItem);

export { Enhanced as CardItem };
