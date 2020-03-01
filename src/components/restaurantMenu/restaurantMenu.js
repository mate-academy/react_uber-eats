import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DishCard from '../dishCard/dishCard';
import ModalWindow from '../modalWindow/ModalWindow';
import { toggleModal } from '../../store/actions';
// import { HashLink as Link } from 'react-router-hash-link';

const RestaurantMenu = ({ restaurant, toggle, togglerModal }) => {
  const menu = {
    sectionsUUID: restaurant.sections,
    sectionsMenu: restaurant.sections.map(item => restaurant.sectionsMap[item])
      .map(item => ({
        ...item,
        dishes: item.itemUuids.map(uuid => restaurant.entitiesMap[uuid]),
      })),
  };

  const onlyDishes = menu.sectionsMenu;

  return (
    <>
      {menu.sectionsMenu.map(item => (

        <DishCard
          key={item.uuid}
          uuid={item.uuid}
          title={item.title}
          dishes={item.dishes}
        />

      ))}
      <ModalWindow
        handleClose={() => toggle(false)}
        togglerModal={togglerModal}
        allMenu={onlyDishes}
      />
    </>
  );
};

const mapState2props = state => ({
  restaurant: state.restaurant,
  togglerModal: state.togglerModal,
});

const mapDispatch2Props = ({
  toggle: toggleModal,
});

RestaurantMenu.propTypes = {
  restaurant: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
  toggle: PropTypes.func,
  togglerModal: PropTypes.bool,
};

RestaurantMenu.defaultProps = {
  restaurant: {},
  toggle: '',
  togglerModal: false,
};

export default connect(mapState2props, mapDispatch2Props)(RestaurantMenu);
