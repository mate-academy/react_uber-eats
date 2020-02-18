import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import  MenuItem from './MenuItem';
import {
  getMenuItem,
  getIsLoading,
  getRestaurant,
  getCounter,
  getCurrentPrice,
  getHasError,
} from '../../store/selectors';
import { loadMenuItem, getCustomPrice } from '../../store/thunks'
import { RootState, Actions, addPrice } from '../../types'
import {
  increaseCounter,
  decreaseCounter,
  setHasError,
} from '../../store/actions';

const mapStateToProps = (state: RootState) => ({
  menuItem: getMenuItem(state),
  isLoading: getIsLoading(state),
  restaurant: getRestaurant(state),
  counter: getCounter(state),
  fullPrice: getCurrentPrice(state),
  hasError: getHasError(state),
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, unknown, Actions>) => ({
    setHasError: (value: boolean) => dispatch(setHasError(value)),
    loadMenuItem: (itemUuid: string) => dispatch(loadMenuItem(itemUuid)),
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
    getCustomPrice: (
      price: addPrice,
      subtitle: addPrice,
      type: string,
      customItem: addPrice) =>(
        dispatch(getCustomPrice(price, subtitle, type, customItem))),
  });

const connectedMenuItem = connect(
  mapStateToProps, mapDispatchToProps
)(MenuItem);

export { connectedMenuItem as MenuItem };
