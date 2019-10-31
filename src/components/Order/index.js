import { connect } from 'react-redux';

import { Order } from './Order';
import { hideModalWindow } from '../../store/actions';
import {
  selectOrder,
  selectRestaurantsListError,
  selectIsLoading,
} from '../../store/selector';

const mapStateToProps = state => ({
  order: selectOrder(state),
  error: selectRestaurantsListError(state),
  isLoading: selectIsLoading(state),
});

const mapDispatchToProps = {
  hideModalWindow,
};

const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);

export { Enhanced as Order };
