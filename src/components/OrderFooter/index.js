import { connect } from 'react-redux';

import { OrderFooter } from './OrderFooter';
import { hideModalWindow } from '../../store/actions';
import { selectOrderAmount, selectCurencyCode } from '../../store/selector';

const mapStateToProps = state => ({
  orderAmount: selectOrderAmount(state),
  currencyCode: selectCurencyCode(state),
});

const mapDispatchToProps = {
  hideModalWindow,
};

const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderFooter);

export { Enhanced as OrderFooter };
