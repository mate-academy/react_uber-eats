import { connect } from 'react-redux';
import { modalWindowOpening } from '../../store/actions';
import { ItemCard } from './ItemCard';

const ImprovedItemCard = connect(
  null,
  {
    modalWindowOpening,
  }
)(ItemCard);

export {
  ImprovedItemCard as ItemCard,
};
