import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import MenuIcon from '@material-ui/icons/Menu';
import { toggleNav } from '../../store/actions';

const RestaurantNav = ({ restaurant, setToggle, toggleMenu }) => (
  <>
    <MenuIcon
      onClick={() => setToggle(!toggleMenu)}
      className="toggle"
    />
    <nav className={toggleMenu
      ? 'restaurant__nav nav nav--active'
      : 'restaurant__nav nav'}
    >
      <ul className="nav__list">
        {restaurant.sections.map(item => (
          <li
            className="nav__item"
            key={item}
          >
            <Link
              to={`#${item}`}
              className="nav__link"
            >
              {restaurant.sectionsMap[item].title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </>
);

const mapStateToProps = state => ({
  toggleMenu: state.toggleMenu,
});

const mapDispachToProps = ({
  setToggle: toggleNav,
});

RestaurantNav.propTypes = {
  restaurant: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
  setToggle: PropTypes.func,
  toggleMenu: PropTypes.bool,
};

RestaurantNav.defaultProps = {
  restaurant: {},
  setToggle: '',
  toggleMenu: '',
};

export default connect(mapStateToProps, mapDispachToProps)(RestaurantNav);
