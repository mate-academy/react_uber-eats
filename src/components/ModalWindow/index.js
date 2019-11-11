import { connect } from 'react-redux';
import { ModalWindow } from './ModalWindow';
import {
  closeModalWindow,
} from '../../store/actions';
import {
  isDataLoadingSelector,
} from '../../store/selectors';

const ImprovedModalWindow = connect(
  state => ({
    isLoading: isDataLoadingSelector(state),
  }),
  {
    closeModalWindow,
  }
)(ModalWindow);

export {
  ImprovedModalWindow as ModalWindow,
};
