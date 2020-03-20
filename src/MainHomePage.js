import React from 'react';
import propTypes from 'prop-types';
import RestoItem from './RestoItem';
import LocationAndTime from './LocationAndTime';
import FilterHomePage from './FilterHomePage';

import './styles/mainHomePage.scss';

const MainHomePage = ({
  stores,
  locationValue,
  onHandlerChangeLocation,
  onClearLocation,
  filterValue,
  onHandlerFilter,
}) => (
  <main className="main container">
    <div className="main__filter">
      <FilterHomePage
        filterValue={filterValue}
        onHandlerFilter={onHandlerFilter}
      />
    </div>

    <div className="main__header">
      <LocationAndTime
        locationValue={locationValue}
        onHandlerChangeLocation={onHandlerChangeLocation}
        onClearLocation={onClearLocation}
      />
    </div>

    <h1 className="main__location">
      {`${locationValue} Restaurant`}
    </h1>

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
  stores: propTypes.shape().isRequired,
  locationValue: propTypes.string.isRequired,
  onHandlerChangeLocation: propTypes.func.isRequired,
  onClearLocation: propTypes.func.isRequired,
  filterValue: propTypes.string.isRequired,
  onHandlerFilter: propTypes.func.isRequired,
};

export default MainHomePage;
