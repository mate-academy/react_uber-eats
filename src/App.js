import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import { RestaurantListPage } from './components/RestaurantListPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import './App.scss';

const App = () => (
  <Provider store={store}>
    <Header />
    <div className="page">
      <main className="content">
        <RestaurantListPage />
      </main>
    </div>
    <Footer />
  </Provider>
);

export default App;
