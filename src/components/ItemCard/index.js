import { connect } from 'react-redux';
import { openMenuItemModalWindow } from '../../store/actions';
import { ItemCard } from './ItemCard';

const ImprovedItemCard = connect(
  null,
  {
    openMenuItemModalWindow,
  }
)(ItemCard);

export {
  ImprovedItemCard as ItemCard,
};
