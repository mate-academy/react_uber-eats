import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import { RestaurantListPage } from './components/RestaurantListPage';
import { Header } from './components/Header/Header';

import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="page">
      <Header />
      <main className="content">
        <RestaurantListPage />
      </main>
      <footer>Uber Eats Footer</footer>
    </div>
  </Provider>
);

export default App;
