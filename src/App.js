import React from 'react';
import { Route } from 'react-router-dom';

import {
  RestaurantsListPage,
} from './components/RestaurantsListPage/index';
import {
  RestaurantPage,
} from './components/RestaurantPage/index';

import './App.scss';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const uuidv1 = require('uuid/v1');

export const App = ({ restaurantsData }) => {

  return (
    <>
      <Header />
      <div className="page">
        <main>
          <Route
            exact
            path="/"
            component={RestaurantsListPage}
          />

          <Route
            path="/restaurants/:id"
            component={RestaurantPage}
          />
        </main>
      </div>
      <Footer />
    </>
  );
};
