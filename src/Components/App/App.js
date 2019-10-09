import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { RestaurantsListPage } from '../RestaurantsListPage';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { RestaurantPage } from '../RestaurantPage';

export const App = () => (
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
        path="/:id"
        component={RestaurantPage}
      />
    </main>
    <Footer />
  </>
);
