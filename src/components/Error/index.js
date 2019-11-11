import { connect } from 'react-redux';
import { Error } from './Error';
import { closeModalWindow } from '../../store/actions';

const ImprovedError = connect(
  null,
  {
    closeModalWindow,
  }
)(Error);

export {
  ImprovedError as Error,
};
