import { connect } from 'react-redux';

import { CardItem } from './CardItem';
import {
  selectRestaurantCurency,
} from '../../store/selector';
import { loadMenuItem, setAltDataModalWindow } from '../../store/actions';

const mapStateToProps = state => ({
  restaurantCurency: selectRestaurantCurency(state),
});

const mapDispatchToProps = dispatch => ({
  createOrder: uuid => dispatch(loadMenuItem(uuid)),
  setAltData: data => dispatch(setAltDataModalWindow(data)),
});

const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardItem);

export { Enhanced as CardItem };
