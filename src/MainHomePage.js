import React from 'react';
import propTypes from 'prop-types';
import RestoItem from './RestoItem';

import './styles/mainHomePage.scss';

const MainHomePage = ({ stores }) => (
  <main className="main">
    <div className="stores">
      {
        stores.map(store => (
          <RestoItem
            key={store.uuid}
            store={store}
          />
        ))
      }
    </div>

  </main>
);

MainHomePage.propTypes = {
  stores: propTypes.arrayOf().isRequired,
};

export default MainHomePage;
