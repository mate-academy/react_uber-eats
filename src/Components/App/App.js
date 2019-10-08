import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { RestaurantsListPage } from '../RestaurantsListPage';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { RestaurantPage } from '../RestaurantPage';
import { AppProps } from '../PropTypes';

export const App = ({ itemId }) => (
  <>
    <Header />
    <main className="page">
      <div className="content">
        <Route
          exact
          path="/"
          component={RestaurantsListPage}
        />
      </div>
      <Route
        path={`/${itemId}`}
        render={
          ({ match }) => (
            <RestaurantPage match={match} uuid={itemId} />
          )
        }
      />
    </main>
    <Footer />
  </>
);

App.propTypes = AppProps;
