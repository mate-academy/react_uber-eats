/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store';
import { RestaurantsListPage } from './components/RestaurantsListPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = () => (
  <Provider store={store}>
    <Header />
    <main className="page">
      <div className="content">
        <RestaurantsListPage />
      </div>
    </main>
    <Footer />
  </Provider>
);
