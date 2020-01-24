import React from 'react';
import { HashLink } from 'react-router-hash-link';

import { useSelector } from 'react-redux';
import { getRestaurantSections } from '../../store';

import './restaurant-nav.scss';

const RestaurantPageNav = () => {
  const titles = useSelector(getRestaurantSections);

  return (
    <nav className="restaurant__nav">
      <ul className="restaurant-nav">
        {titles.map(({ uuid, title }) => (
          <li key={uuid} className="restaurant-nav__item">
            <HashLink
              className="restaurant-nav__link"
              to={{ hash: uuid }}
            >
              {title}
            </HashLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RestaurantPageNav;
