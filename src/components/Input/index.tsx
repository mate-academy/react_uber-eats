import { connect } from 'react-redux';
import Input from './Input';
import { ThunkDispatch } from 'redux-thunk';
import { getLocationList, getLocation } from '../../store/selectors';
import { RootState, Actions } from '../../types'
import { setLocation } from '../../store/actions';

const mapStateToProps = (state: RootState) => ({
  locationList: getLocationList(state),
  locationId: getLocation(state),
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, unknown, Actions>) => ({
    setLocation: (value: string) => dispatch(setLocation(value)),
});

const connectedInput = connect(
  mapStateToProps, mapDispatchToProps
)(Input);

export { connectedInput as Input };
