import { connect } from 'react-redux';
import { Section } from './Section';
import {
  selectRestorauntItems,
} from '../../store/selector';

const mapStateToProps = state => ({
  restaurantItems: selectRestorauntItems(state),
});

const Enhanced = connect(
  mapState2Props,
)(Section);

export { Enhanced as Section };
