import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScrollUpButton from 'react-scroll-up-button';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import { setStores, getStores, getFilterValue } from './store';
import Header from './components/Header';
import SearchAndDelivery from './components/SearchAndDelivery';
import RestaurantsList from './components/RestaurantsList';
import Footer from './components/Footer';

const URL = 'https://mate-academy.github.io/react_uber-eats/api';

const App = ({ loadStores, stores, filterValue }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await fetch(`${URL}/location/ChIJdd4hrwug2EcRmSrV3Vo6llI.json`)
        .then(response => response.json())
        .then(({ data }) => {
          loadStores(data.feedItems.map(({ uuid }) => (
            data.storesMap[uuid]
          )));
        })
        .finally(() => setIsLoaded(true));
    }

    fetchData();
  }, []);

  const filterStores = () => {
    if (filterValue === '') {
      return stores;
    }

    return stores.filter(
      store => (
        (store.title + store.categories)
          .toLowerCase()
          .includes(filterValue.trim())
      ),
    );
  };

  const filteredStores = filterStores();

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <main className="main">
              <SearchAndDelivery />

              {isLoaded
                ? (
                  <RestaurantsList
                    stores={filteredStores}
                  />
                ) : (
                  <div>Loading...</div>
                )
              }
            </main>
          )}
        />
      </Switch>

      <Footer />

      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={150}
        EasingType="easeOutCubic"
        AnimationDuration={500}
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
        style={{
          width: '80px',
          height: '80px',
          backgroundColor: '#59BD5A',
          outline: 'none',
        }}
      />
    </div>
  );
};

const getData = state => ({
  stores: getStores(state),
  filterValue: getFilterValue(state),
});

const getMethods = dispatch => ({
  loadStores: stores => dispatch(setStores(stores)),
});

App.propTypes = {
  loadStores: PropTypes.func.isRequired,
  stores: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default connect(getData, getMethods)(App);
